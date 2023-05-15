<template>
  <div class="py-12">
    <form @submit.prevent="sendEmail" class="flex flex-col gap-2 w-full">
      <TextInput v-model="name" label="Jméno" />
      {{ name }}
      <TextInput v-model="email" label="Email" />
      <TextInput v-model="message" label="Zpráva" />
      <div class="my-5 mt-7">
        <recaptcha />
      </div>
      <button class="outline">Odeslat email</button>
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    sendEmail() {
      emailjs.init('azb-n7ngrQUlC8TIV')
      var templateParams = {
        name: this.name,
        email: this.email,
        message: this.message,
      }
      emailjs.send('service_f1vqemc', 'template_pn2rx8p', templateParams).then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
          deleteInputs()
        },
        function (error) {
          console.log('FAILED...', error)
        }
      )
    },
    deleteInputs() {
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
}
</script>

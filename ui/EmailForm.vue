<template>
  <div class="py-12">
    <form @submit.prevent="sendEmail" class="flex flex-col gap-2 w-full">
      <TextInput v-model="name" label="Jméno" />
      {{ name }}
      <TextInput v-model="email" label="Email" />
      <TextInput v-model="message" label="Zpráva" />
      <div class="recap-wrapper">
        <recaptcha />
      </div>
      <p class="text-red-700">Potvrďte že nejste robot</p>
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
      recapToken: '',
    }
  },
  methods: {
    async sendEmail() {
      try {
        const token = await this.$recaptcha.getResponse()
        this.recapToken = token

        // send token to server alongside your form data
        emailjs.init('azb-n7ngrQUlC8TIV')
        var templateParams = {
          name: this.name,
          email: this.email,
          message: this.message,
        }
        emailjs
          .send('service_f1vqemc', 'template_pn2rx8p', templateParams)
          .then(
            function (response) {
              console.log('SUCCESS!', response.status, response.text)
              deleteInputs()
            },
            function (error) {
              console.log('FAILED...', error)
            }
          )
        // at the end you need to reset recaptcha
        await this.$recaptcha.reset()
      } catch (error) {
        console.log('Login error:', error)
      }
    },
    deleteInputs() {
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
}
</script>

<style scoped>
.recap-wrapper {
  margin: 1.5rem 0;
}
</style>

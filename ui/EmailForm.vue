<template>
  <div class="py-12">
    <form @submit.prevent="sendEmail" class="flex flex-col gap-2 w-full">
      <TextInput v-model="name" label="Jméno" />
      {{ name }}
      <TextInput v-model="email" label="Email" />
      <TextInput v-model="message" label="Zpráva" />
      <div class="recap-wrapper">
        <recaptcha @verify="onCaptchaVerify" />
      </div>
      <p class="text-red-700" v-show="recapError">Potvrďte že nejste robot</p>
      {{ recapError }}
      <button class="bg-sky-300 dark:bg-slate-900 dark:text-gray-200 w-52">
        Odeslat email
      </button>
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
      recapError: false,
    }
  },

  methods: {
    async onSubmit() {
      try {
        const token = await this.$recaptcha.getResponse()
        this.recapToken = await token

        if (token != null) {
          this.sendEmail()
          await this.$recaptcha.reset()
        } else {
          this.recapError = true
        }
        // send token to server alongside your form data
      } catch (error) {}
      this.deleteInputs()
    },
    sendEmail() {
      try {
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
            },
            function (error) {
              console.log('FAILED...', error)
            }
          )
      } catch (error) {}
    },
    onCaptchaVerify(response) {
      this.recapToken = response
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

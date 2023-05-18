<template>
  <div class="py-12">
    <form @submit.prevent="onSubmit" class="flex flex-col gap-2 w-full">
      <TextInput v-model="name.value" label="*Jméno" :error="name.error" />
      <TextInput
        v-model="email.value"
        label="*Email"
        class="mb-2"
        :error="email.error"
        type="email"
      />
      <textarea
        id="message"
        rows="4"
        class="py-2 px-1 outline outline-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :class="
          message.error
            ? 'outline-red-700'
            : 'outline-sky-700 dark:outline-slate-700'
        "
        placeholder="Zpráva"
        v-model="message.value"
      ></textarea>
      <div v-if="message.error" class="text-red-600">{{ message.error }}</div>
      <div class="recap-wrapper">
        <recaptcha />
      </div>
      <p v-if="recapError" class="text-red-600">Potvrďte že nejste robot</p>
      <button class="bg-sky-300 dark:bg-slate-900 dark:text-gray-200 w-52">
        Odeslat email
      </button>
    </form>
    <div
      v-if="responseSucces"
      class="text-green-500"
      @click="responseSucces = false"
    >
      Úspěšně odesláno X
    </div>
    <div v-if="responseFail" class="text-red-600" @click="responseFail = false">
      Odeslání se nezdařilo X
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  data() {
    return {
      name: {
        value: '',
        error: '',
      },
      email: {
        value: '',
        error: '',
      },
      message: {
        value: '',
        error: '',
      },
      requiredEmail: false,
      recapError: false,
      responseSucces: false,
      responseFail: false,
    }
  },
  methods: {
    async onSubmit() {
      // reset errors
      this.name.error = ''
      this.email.error = ''
      this.message.error = ''
      this.recapError = false
      this.responseFail = false
      this.responseSucces = false

      if (this.name.value === '') {
        this.name.error = 'toto pole musí být vyplněné'
      }

      if (this.email.value === '') {
        this.email.error = 'toto pole musí být vyplněné'
      }

      if (this.message.value === '') {
        this.message.error = 'toto pole musí být vyplněné'
      }

      let token = ''
      try {
        token = await this.$recaptcha.getResponse()
      } catch (err) {}

      if (token === '') {
        this.recapError = true
      }

      if (this.name.error || this.email.error || this.message.error || !token) {
        return
      }

      // now we have valid inputs
      this.sendEmail(token)
      this.resetInputs()

      try {
        console.log(token)

        await this.$recaptcha.reset()
      } catch (error) {
        console.log(error)
      }
    },
    sendEmail(token) {
      emailjs.init('azb-n7ngrQUlC8TIV')

      const templateParams = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value,
        token,
      }

      emailjs
        .send('service_f1vqemc', 'template_pn2rx8p', templateParams)
        .then((response) => {
          this.responseSucces = true
        })
        .catch((error) => {
          this.responseFail = true
        })
    },
    resetInputs() {
      this.name.value = ''
      this.email.value = ''
      this.message.value = ''
      this.name.error = ''
      this.email.error = ''
      this.message.error = ''
      this.recapError = false
      this.$recaptcha.reset()
    },
  },
}
</script>

<style scoped>
.recap-wrapper {
  margin: 1.5rem 0;
}
</style>

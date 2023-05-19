<template>
  <div class="justify-center items-center">
    <h2 class="font-bold text-3xl py-5">Kontaktuj mě pomocí formuláře</h2>
    <div class="h-screen">
      <EmailForm />
    </div>
  </div>
</template>

<script>
import EmailForm from '@/ui/EmailForm.vue'
export default {
  components: {
    EmailForm,
  },
}
</script>

<style lang="scss" scoped></style>

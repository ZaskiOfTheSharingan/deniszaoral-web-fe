<template>
  <div class="flex flex-col">
    <label>{{ label }}</label>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="outline outline-1 outline-sky-700 w-52 dark:outline-slate-700"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    label: '',
    isTextArea: false,
  },
}
</script>

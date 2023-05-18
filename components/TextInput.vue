<template>
  <div class="flex flex-col">
    <label>{{ label }}</label>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="p-1 outline outline-1 rounded-lg w-52"
      :class="
        error ? 'outline-red-700' : 'outline-sky-700 dark:outline-slate-700'
      "
      :type="type"
      v-bind="$attrs"
    />
    <div v-if="error" class="text-red-600">{{ error }}</div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    label: '',
    error: '',
  },
}
</script>

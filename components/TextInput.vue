<template>
  <div class="flex flex-col">
    <label>{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="outline w-52"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: '',
  },
  emits: ['update:modelValue'],
}
</script>

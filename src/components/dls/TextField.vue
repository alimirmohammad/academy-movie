<template>
  <div :class="classess">
    <label :for="name" class="hidden">{{ label }}</label>
    <input
      :value="modelValue"
      :type="inputType"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      v-on="onEvents"
    />
    <slot name="detail">
      <div v-if="detail" class="text-field__detail">
        {{ detail }}
      </div>
    </slot>
  </div>
</template>
<script setup>
import { computed, reactive, ref } from 'vue'
import { inputTypes } from '@/utils/variables'
const emits = defineEmits(['update:modelValue', 'focus', 'blur'])
const props = defineProps({
  modelValue: [String, Number],
  name: String,
  type: String,
  label: String,
  error: String,
  hint: String,
  placeholder: String,
  disabled: Boolean
})
const isFocused = ref(false)
const isActive = computed(() => props.modelValue || isFocused.value)
const inputType = computed(() => inputTypes.find((item) => item === (props.type || 'text')))
const classess = computed(() => ({
  'text-field': true,
  'text-field--active': isActive.value,
  'text-field--focus': isFocused.value,
  'text-field--error': !!props.error,
  'text-field--disable': props.disable
}))
const detail = computed(() => props.error || props.hint || '')

function onInput(e) {
  if(props.disabled) return;
  emits('update:modelValue', e.target.value)
}
function onFocus(e) {
  isFocused.value = true
  emits('focus', e)

}
function onBlur(e) {
  isFocused.value = false
  emits('blur', e)

}
const onEvents = reactive({
  input: onInput,
  focus: onFocus,
  blur: onBlur
})
</script>
<style scoped>
.text-field input {
  @apply w-full rounded-xl h-10 bg-transparent border-[3px] border-secondary my-2 pl-2 text-white;
}
.text-field .text-field.text-field--disable {
  @apply pointer-events-none;
}
.text-field.text-field--active input {
  @apply border-purple-400 text-purple-400;
}
.text-field.text-field--focus input {
  @apply border-purple-400 text-purple-400;
}
.text-field.text-field--error input {
  @apply border-red-400 text-red-400;
}
.text-field.text-field--disable input {
  @apply border-gray-400 text-gray-400;

}
</style>

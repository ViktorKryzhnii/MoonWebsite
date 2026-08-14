<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: string
    label: string
    id: string
    type?: string
    as?: 'input' | 'textarea'
    placeholder?: string
    required?: boolean
    error?: string
    variant?: 'light' | 'dark'
  }>(),
  {
    type: 'text',
    as: 'input',
    placeholder: '',
    required: false,
    error: '',
    variant: 'light'
  }
)

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="id" class="font-sans font-semibold" :class="variant === 'dark' ? 'text-white' : 'text-neutral-800'">
      {{ label }}<span v-if="required"> *</span>
    </label>

    <textarea
      v-if="as === 'textarea'"
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      rows="6"
      class="w-full px-4 py-3 font-sans focus:outline-none resize-none"
      :class="[
        variant === 'dark'
          ? 'bg-transparent border border-white/30 text-white placeholder-white/50 focus:border-white'
          : 'border border-neutral-300 text-neutral-800 focus:border-green',
        error ? '!border-error' : ''
      ]"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <input
      v-else
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      class="w-full px-4 py-3 font-sans focus:outline-none"
      :class="[
        variant === 'dark'
          ? 'bg-transparent border border-white/30 text-white placeholder-white/50 focus:border-white'
          : 'border border-neutral-300 text-neutral-800 focus:border-green',
        error ? '!border-error' : ''
      ]"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />

    <span v-if="error" class="font-sans text-xs text-error">{{ error }}</span>
  </div>
</template>

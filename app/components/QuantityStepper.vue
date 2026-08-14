<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: number
    min?: number
  }>(),
  { min: 1 }
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

function decrease() {
  emit('update:modelValue', Math.max(props.min, props.modelValue - 1))
}

function increase() {
  emit('update:modelValue', props.modelValue + 1)
}
</script>

<template>
  <div class="flex items-center border border-neutral-300">
    <button type="button" class="p-3 text-warm-black hover:bg-neutral-200 transition-colors" aria-label="Decrease quantity" @click="decrease">
      <Icon name="custom:line-rounded-minus" class="w-4 h-4" />
    </button>
    <span class="w-10 text-center font-sans text-sm font-semibold text-warm-black">{{ modelValue }}</span>
    <button type="button" class="p-3 text-warm-black hover:bg-neutral-200 transition-colors" aria-label="Increase quantity" @click="increase">
      <Icon name="custom:line-rounded-plus" class="w-4 h-4" />
    </button>
  </div>
</template>

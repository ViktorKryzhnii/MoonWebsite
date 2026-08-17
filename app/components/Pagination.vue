<script setup lang="ts">
const props = defineProps<{
  modelValue: number
  totalPages: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()
</script>

<template>
  <nav aria-label="Pagination" class="flex items-center justify-center gap-2 font-sans text-sm">
    <button
      type="button"
      :disabled="modelValue === 1"
      aria-label="Previous page"
      class="flex items-center justify-center w-9 h-9 text-neutral-600 hover:text-warm-black disabled:opacity-30 disabled:cursor-not-allowed transition"
      @click="modelValue > 1 && emit('update:modelValue', modelValue - 1)"
    >
      <Icon name="custom:line-rounded-chevron-left" class="w-4 h-4" />
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      type="button"
      :aria-current="modelValue === page ? 'page' : undefined"
      class="flex items-center justify-center w-9 h-9 border transition"
      :class="modelValue === page
        ? 'bg-warm-black text-white border-warm-black'
        : 'border-transparent text-neutral-600 hover:border-neutral-300'"
      @click="emit('update:modelValue', page)"
    >
      {{ page }}
    </button>

    <button
      type="button"
      :disabled="modelValue === totalPages"
      aria-label="Next page"
      class="flex items-center justify-center w-9 h-9 text-neutral-600 hover:text-warm-black disabled:opacity-30 disabled:cursor-not-allowed transition"
      @click="modelValue < totalPages && emit('update:modelValue', modelValue + 1)"
    >
      <Icon name="custom:line-rounded-chevron-right" class="w-4 h-4" />
    </button>
  </nav>
</template>

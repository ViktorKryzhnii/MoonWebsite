<script setup lang="ts">
defineProps<{
  color: ColorSwatch
  active: boolean
  size?: 'sm' | 'md'
}>()

defineEmits<{
  select: [name: string]
}>()
</script>

<template>
  <button
    type="button"
    :aria-label="color.name"
    :aria-pressed="active"
    class="border transition"
    :class="[size === 'md' ? 'w-8 h-8' : 'w-6 h-6', active ? 'border-warm-black' : 'border-neutral-300']"
    :style="{ backgroundColor: color.hex }"
    @click="$emit('select', color.name)"
  />
</template>

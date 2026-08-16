<script setup lang="ts">
defineProps<{
  image: string
  alt: string
}>()

const activeThumbnail = ref(0)
const thumbnailCount = 4
</script>

<template>
  <div>
    <div class="overflow-hidden w-full aspect-[3/4] bg-beige-peach">
      <NuxtImg :src="image" :alt="alt" class="w-full h-full object-cover" />
    </div>

    <div class="grid grid-cols-4 gap-3 mt-4">
      <button
        v-for="index in thumbnailCount"
        :key="index"
        type="button"
        class="overflow-hidden aspect-square border transition-colors"
        :class="activeThumbnail === index - 1 ? 'border-warm-black' : 'border-neutral-200 hover:border-neutral-400'"
        @click="activeThumbnail = index - 1"
      >
        <NuxtImg :src="image" :alt="`${alt} thumbnail ${index}`" class="w-full h-full object-cover" />
      </button>
    </div>
  </div>
</template>

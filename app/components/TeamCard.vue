<script setup lang="ts">
defineProps<{
  image: string
  name: string
  role: string
}>()
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="w-full h-80 overflow-hidden mb-6">
      <NuxtImg 
        :src="image" 
        :alt="name" 
        class="w-full h-full object-cover"
      />
    </div>
    <h3 class="font-semibold text-lg text-neutral-800 uppercase tracking-widest mb-1">{{ name }}</h3>
    <p class="text-neutral-600">{{ role }}</p>
  </div>
</template>

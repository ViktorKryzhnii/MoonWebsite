<script setup lang="ts">
const products = [
  { name: 'TABLEWARE', image: '/img/backgrounds/bg-7.jpg' },
  { name: 'HOME DECOR', image: '/img/backgrounds/bg-9.jpg' },
  { name: 'HOLIDAY', image: '/img/backgrounds/bg-2.jpg' },
  { name: 'COLLECTION', image: '/img/backgrounds/bg-26.jpg' },
]
</script>

<template>
  <section class="py-20 px-40">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="product in products" :key="product.name" class="flex flex-col items-center group">
        <div class="overflow-hidden w-full aspect-square mb-6">
          <NuxtImg 
            :src="product.image" 
            :alt="product.name" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <h3 class="font-sans text-lg font-semibold text-neutral-800 tracking-widest uppercase">
          {{ product.name }}
        </h3>
      </div>
    </div>
  </section>
</template>

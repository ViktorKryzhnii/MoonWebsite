<script setup lang="ts">
const products = [
  { name: 'TABLEWARE', image: '/img/backgrounds/bg-7.jpg' },
  { name: 'HOME DECOR', image: '/img/backgrounds/bg-9.jpg' },
  { name: 'HOLIDAY', image: '/img/backgrounds/bg-2.jpg' },
  { name: 'COLLECTION', image: '/img/backgrounds/bg-26.jpg' },
]
</script>

<template>
  <section class="py-12 md:py-20 px-8 md:px-40">
    <div
      class="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 lg:grid-cols-4"
    >
      <div
        v-for="product in products"
        :key="product.name"
        class="group flex w-[75%] shrink-0 snap-start flex-col items-center sm:w-[45%] md:w-auto md:shrink"
      >
        <div class="overflow-hidden w-full aspect-square mb-6">
          <NuxtImg
            :src="product.image"
            :alt="product.name"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <h3 class="font-sans text-base md:text-lg font-semibold text-neutral-800 tracking-widest uppercase">
          {{ product.name }}
        </h3>
      </div>
    </div>
  </section>
</template>

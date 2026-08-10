<script setup lang="ts">
interface Product {
  name: string
  price: string
  desc: string
  image: string
}

defineProps<{
  title: string
  products: Product[]
}>()
</script>

<template>
  <section class="py-20 px-40 bg-white">
    <h2 class="font-serif text-3xl font-semibold text-warm-black text-center mb-16 tracking-widest uppercase">
      {{ title }}
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
      <div v-for="product in products" :key="product.name" class="flex flex-col">
        <div class="overflow-hidden w-full aspect-[3/4] mb-6">
          <NuxtImg 
            :src="product.image" 
            :alt="product.name" 
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <h3 class="font-sans text-sm font-semibold text-warm-black mb-1 uppercase tracking-wider">
          {{ product.name }}
        </h3>
        <p class="font-sans text-sm text-neutral-800 mb-2 font-semibold">
          {{ product.price }}
        </p>
        <p class="font-sans text-xs text-neutral-600 mb-6 leading-relaxed flex-grow">
          {{ product.desc }}
        </p>
        
        <button class="w-full py-3 border border-neutral-300 font-sans text-xs font-semibold uppercase tracking-widest text-warm-black hover:bg-neutral-100 transition">
          Add to cart
        </button>
      </div>
    </div>
  </section>
</template>

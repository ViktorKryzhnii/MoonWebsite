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
      <ProductCard v-for="product in products" :key="product.name" :product="product" />
    </div>
  </section>
</template>

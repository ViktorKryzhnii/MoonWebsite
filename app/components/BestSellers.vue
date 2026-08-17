<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    products: ShopProduct[]
    align?: 'center' | 'left'
  }>(),
  { align: 'center' }
)
</script>

<template>
  <section class="py-20 px-8 md:px-40 bg-white">
    <h2
      class="font-serif text-3xl font-semibold text-warm-black mb-16 tracking-widest uppercase"
      :class="align === 'center' ? 'text-center' : 'text-left'"
    >
      {{ title }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
      <ProductCard v-for="product in products" :key="product.slug" :product="product" />
    </div>
  </section>
</template>

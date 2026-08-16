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

    <div
      class="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16 md:overflow-visible md:pb-0 lg:grid-cols-4"
    >
      <ProductCard
        v-for="product in products"
        :key="product.slug"
        :product="product"
        class="w-[75%] shrink-0 snap-start md:w-auto md:shrink"
      />
    </div>
  </section>
</template>

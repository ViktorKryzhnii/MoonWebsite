<script setup lang="ts">
const { paginatedProducts } = useShopFilters()
</script>

<template>
  <div v-if="paginatedProducts.length" class="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-16">
    <ProductCard v-for="product in paginatedProducts" :key="product.slug" :product="product" />
  </div>
  <p v-else class="font-sans text-sm text-neutral-600 text-center py-20">
    No products match the selected filters.
  </p>
</template>

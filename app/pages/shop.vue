<script setup lang="ts">
// Страница "Магазин"
const { currentPage, totalPages } = useShopFilters()
</script>

<template>
  <div class="px-8 md:px-40 pt-8 flex flex-col gap-6">
    <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'Shop' }]" />
    <ShopToolbar />
  </div>

  <div class="flex flex-col lg:flex-row gap-12 px-8 md:px-40 py-12">
    <ShopFilters class="lg:w-64 lg:shrink-0" />

    <main class="flex-1">
      <h1 class="sr-only">Shop</h1>
      <ShopProductGrid />
      <Pagination v-model="currentPage" :total-pages="totalPages" class="mt-16" />
    </main>
  </div>
</template>

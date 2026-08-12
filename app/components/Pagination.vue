<script setup lang="ts">
const { currentPage, totalPages } = useShopFilters()
</script>

<template>
  <nav aria-label="Pagination" class="flex items-center justify-center gap-2 font-sans text-sm">
    <button
      type="button"
      :disabled="currentPage === 1"
      aria-label="Previous page"
      class="flex items-center justify-center w-9 h-9 text-neutral-600 hover:text-warm-black disabled:opacity-30 disabled:cursor-not-allowed transition"
      @click="currentPage > 1 && currentPage--"
    >
      <Icon name="custom:line-rounded-chevron-left" class="w-4 h-4" />
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      type="button"
      :aria-current="currentPage === page ? 'page' : undefined"
      class="flex items-center justify-center w-9 h-9 border transition"
      :class="currentPage === page
        ? 'bg-warm-black text-white border-warm-black'
        : 'border-transparent text-neutral-600 hover:border-neutral-300'"
      @click="currentPage = page"
    >
      {{ page }}
    </button>

    <button
      type="button"
      :disabled="currentPage === totalPages"
      aria-label="Next page"
      class="flex items-center justify-center w-9 h-9 text-neutral-600 hover:text-warm-black disabled:opacity-30 disabled:cursor-not-allowed transition"
      @click="currentPage < totalPages && currentPage++"
    >
      <Icon name="custom:line-rounded-chevron-right" class="w-4 h-4" />
    </button>
  </nav>
</template>

<script setup lang="ts">
// Страница "Блог"
const { currentPage, totalPages } = useBlogPosts()
</script>

<template>
  <BlogFeatured />

  <div class="flex flex-col lg:flex-row gap-12 px-8 md:px-40 py-12">
    <main class="flex-1">
      <h1 class="sr-only">Blog</h1>
      <BlogPostGrid />
      <Pagination v-model="currentPage" :total-pages="totalPages" class="mt-16" />
    </main>

    <BlogSidebar class="lg:w-64 lg:shrink-0" />
  </div>
</template>

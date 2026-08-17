<script setup lang="ts">
const { paginatedPosts } = useBlogPosts()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
    <BlogPostCard v-for="post in paginatedPosts" :key="post.id" :post="post" />
  </div>
</template>

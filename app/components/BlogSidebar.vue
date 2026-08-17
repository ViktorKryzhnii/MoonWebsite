<script setup lang="ts">
const popularPosts = [
  { title: featuredPost.title, image: featuredPost.image },
  { title: blogPosts[0].title, image: blogPosts[0].image },
  { title: blogPosts[3].title, image: blogPosts[3].image }
]

const categories = [
  { name: 'Dinnerware', count: 3 },
  { name: 'Ceramic', count: 5 },
  { name: 'Furniture', count: 7 },
  { name: 'Decor Art', count: 2 },
  { name: 'Gifts sets', count: 8 }
]

const tags = ['Ceramic', 'Kitchen', 'Gifts sets', 'Lamp', 'Flower vase', 'Plate', 'Kitchen']
</script>

<template>
  <aside class="flex flex-col gap-12">
    <div class="relative">
      <Icon name="custom:line-rounded-search" class="w-5 h-5 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
      <input
        type="search"
        placeholder="Search for product..."
        class="w-full border border-neutral-300 pl-12 pr-4 py-3 font-sans text-sm text-neutral-800 focus:outline-none focus:border-warm-black"
      />
    </div>

    <div>
      <h2 class="font-sans text-2xl font-extrabold text-warm-black uppercase tracking-wide mb-8">Popular Posts</h2>
      <ul class="flex flex-col gap-6">
        <li v-for="(post, index) in popularPosts" :key="index" class="flex items-center gap-4">
          <div class="w-24 h-24 shrink-0 overflow-hidden">
            <NuxtImg :src="post.image" :alt="post.title" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-base text-neutral-800 leading-snug">{{ post.title }}</p>
        </li>
      </ul>
    </div>

    <div class="border-t border-neutral-200 pt-8">
      <h2 class="font-sans text-2xl font-extrabold text-warm-black uppercase tracking-wide mb-8">Categories</h2>
      <ul class="flex flex-col gap-4">
        <li v-for="category in categories" :key="category.name" class="font-sans text-base text-neutral-700">
          {{ category.name }} ({{ category.count }})
        </li>
      </ul>
    </div>

    <div class="border-t border-neutral-200 pt-8">
      <h2 class="font-sans text-2xl font-extrabold text-warm-black uppercase tracking-wide mb-8">Tags Post</h2>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="(tag, index) in tags"
          :key="`${tag}-${index}`"
          class="px-5 py-2 border border-neutral-300 font-sans text-sm text-neutral-600"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </aside>
</template>

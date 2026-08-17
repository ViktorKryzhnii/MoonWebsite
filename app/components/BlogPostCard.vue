<script setup lang="ts">
defineProps<{
  post: BlogPost
}>()
</script>

<template>
  <article class="flex flex-col">
    <div class="overflow-hidden w-full aspect-[16/10] mb-6">
      <NuxtImg
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </div>

    <div class="flex items-center gap-2 mb-3">
      <span class="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-200 shrink-0">
        <Icon name="custom:filled-person" class="w-3.5 h-3.5 text-neutral-600" />
      </span>
      <span class="font-sans text-xs text-neutral-600">{{ post.author }}</span>
      <span class="w-4 h-px bg-neutral-300"></span>
      <span class="font-sans text-xs text-neutral-600">{{ post.date }}</span>
    </div>

    <h3 class="font-sans text-lg font-semibold text-warm-black mb-2">
      {{ post.title }}
    </h3>
    <p class="font-sans text-sm text-neutral-600 leading-relaxed">
      {{ post.excerpt }}
    </p>
  </article>
</template>

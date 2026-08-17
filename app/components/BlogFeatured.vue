<script setup lang="ts">
// Секция самой популярной статьи
</script>

<template>
  <section class="flex flex-col md:flex-row md:h-[500px] overflow-hidden">
    <div class="w-full md:w-1/2 h-[300px] md:h-full">
      <NuxtImg
        :src="featuredPost.image"
        :alt="featuredPost.title"
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    <div class="w-full md:w-1/2 bg-beige-peach py-16 px-12 flex flex-col justify-center items-center text-center">
      <h2 class="font-serif text-3xl font-semibold text-warm-black tracking-widest uppercase max-w-md">
        {{ featuredPost.title }}
      </h2>
      <p class="font-sans text-sm sm:text-base text-neutral-600 mt-6 max-w-[460px] leading-relaxed">
        {{ featuredPost.description }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: string
  title: string
  description: string
  image: string
  alt: string
  buttonText?: string
}>()

const titleLines = computed(() => props.title.split('\n'))
</script>

<template>
  <section class="w-full bg-white md:px-40">
    <h2 class="px-8 md:px-0 font-serif text-3xl font-semibold text-warm-black text-center mb-16 tracking-widest uppercase">
      OUR BLOG
    </h2>
    <div class="flex flex-col-reverse md:flex-row min-h-[400px] md:h-[500px] overflow-hidden">
      <div class="w-full md:w-1/2 bg-neutral-200/20 py-16 px-12 flex flex-col justify-center items-center text-center">
        <p class="font-sans text-sm text-neutral-500 uppercase tracking-[0.2em] mb-4">
          {{ category }}
        </p>
        <h3 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[38px] lg:leading-[46px] font-semibold text-warm-black tracking-widest uppercase max-w-xl">
          <template v-for="(line, index) in titleLines" :key="index">
            {{ line }}<br v-if="index < titleLines.length - 1" class="hidden sm:inline" />
          </template>
        </h3>
        
        <p class="font-sans text-sm sm:text-base text-neutral-600 mt-6 mb-10 max-w-[460px] leading-relaxed">
          {{ description }}
        </p>
        
        <NuxtLink 
          to="/blog" 
          class="font-sans text-xs sm:text-sm font-semibold text-warm-black uppercase tracking-[0.2em] border-b border-warm-black pb-1 hover:text-green hover:border-green transition-all duration-300"
        >
          {{ buttonText || 'Read more' }}
        </NuxtLink>
      </div>

      <div class="w-full md:w-1/2 h-[350px] md:h-full relative overflow-hidden">
        <NuxtImg 
          :src="image" 
          :alt="alt" 
          class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

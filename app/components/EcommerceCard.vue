<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description: string
  image: string
  alt: string
  reverse?: boolean
  buttonText?: string
}>(), {
  reverse: false,
  buttonText: ''
})
</script>

<template>
  <section class="w-full bg-white px-40">
    <div 
      class="flex flex-col min-h-[400px] md:h-[500px] overflow-hidden"
      :class="reverse ? 'md:flex-row-reverse' : 'md:flex-row'"
    >
      <!-- Левая колонка (Контент) -->
      <div class="w-full md:w-1/2 bg-neutral-200/20 py-16 px-12 flex flex-col justify-center items-center text-center">
        <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[38px] lg:leading-[46px] font-semibold text-warm-black tracking-widest uppercase max-w-xl" v-html="title">
        </h2>
        
        <p class="font-sans text-sm sm:text-base text-neutral-600 mt-6 mb-10 max-w-[460px] leading-relaxed">
          {{ description }}
        </p>
        
        <NuxtLink 
          v-if="buttonText"
          to="/shop" 
          class="font-sans text-xs sm:text-sm font-semibold text-warm-black uppercase tracking-[0.2em] border-b border-warm-black pb-1 hover:text-green hover:border-green transition-all duration-300"
        >
          {{ buttonText }}
        </NuxtLink>
      </div>

      <!-- Правая колонка (Изображение) -->
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

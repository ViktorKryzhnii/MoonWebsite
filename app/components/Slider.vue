<script setup lang="ts">
const slides = [
  '/img/backgrounds/bg-1.jpg',
  '/img/backgrounds/bg-4.jpg',
  '/img/backgrounds/bg-5.jpg',
  '/img/backgrounds/bg-10.jpg',
  '/img/backgrounds/bg-25.jpg',
]

const currentSlide = ref(0)

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
})
</script>

<template>
  <div class="relative h-[600px] w-full overflow-hidden">
    <!-- Слайды -->
    <div 
      v-for="(slide, index) in slides" 
      :key="slide"
      class="absolute inset-0 transition-opacity duration-1000"
      :class="currentSlide === index ? 'opacity-100' : 'opacity-0'"
    >
      <NuxtImg :src="slide" alt="Slide" class="h-full w-full object-cover" />
    </div>

    <!-- Оверлей -->
    <div class="absolute left-[165px] top-0 h-full w-1/3 bg-[#826F66] p-12 flex flex-col justify-center items-center text-center">
      <!-- Логотип -->
      <div class="flex items-center gap-2 mb-6">
        <NuxtImg src="/img/Logo.svg" alt="Moon Logo" class="h-12 w-auto brightness-0 invert" />
        <span class="font-serif text-4xl font-extrabold text-white tracking-tighter">MOON</span>
      </div>

      <p class="font-sans text-sm text-white mb-4 uppercase tracking-widest">
        Handcrafted in Viet Nam since 1650
      </p>
      <h2 class="font-serif text-5xl text-white font-extrabold mb-8 leading-tight">
        BAT TRANG<br />DINNER SET
      </h2>
      <button class="px-8 py-4 bg-white text-warm-black font-sans font-semibold uppercase tracking-wider hover:bg-beige-peach transition">
        Shop Now
      </button>
    </div>
  </div>
</template>

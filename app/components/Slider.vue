<script setup lang="ts">
const slides = [
  '/img/backgrounds/bg-1.jpg',
  '/img/backgrounds/bg-4.jpg',
  '/img/backgrounds/bg-5.jpg',
  '/img/backgrounds/bg-10.jpg',
  '/img/backgrounds/bg-25.jpg',
]

const currentSlide = ref(0)

let intervalId: ReturnType<typeof setInterval>

onMounted(() => {
  intervalId = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="relative w-full overflow-hidden md:h-[600px]">
    <!-- Слайды -->
    <div class="relative h-[420px] w-full md:absolute md:inset-0 md:h-full">
      <div
        v-for="(slide, index) in slides"
        :key="slide"
        class="absolute inset-0 transition-opacity duration-1000"
        :class="currentSlide === index ? 'opacity-100' : 'opacity-0'"
      >
        <NuxtImg :src="slide" alt="Slide" class="h-full w-full object-cover" />
      </div>
    </div>

    <!-- Оверлей -->
    <div class="relative flex w-full flex-col items-center justify-center px-8 py-12 text-center bg-overlay-brown md:absolute md:left-[165px] md:top-0 md:h-full md:w-1/3 md:p-12">
      <!-- Логотип -->
      <div class="flex items-center gap-2 mb-6">
        <NuxtImg src="/img/Logo.svg" alt="Moon Logo" class="h-10 w-auto md:h-12 brightness-0 invert" />
        <span class="hidden md:inline font-serif text-4xl font-extrabold text-white tracking-tighter">MOON</span>
      </div>

      <p class="font-sans text-xs sm:text-sm text-white mb-4 uppercase tracking-widest">
        Handcrafted in Viet Nam since 1650
      </p>
      <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-extrabold mb-8 leading-tight">
        BAT TRANG<br />DINNER SET
      </h2>
      <button class="px-8 py-4 bg-white text-warm-black font-sans font-semibold uppercase tracking-wider hover:bg-beige-peach transition">
        Shop Now
      </button>
    </div>
  </div>
</template>

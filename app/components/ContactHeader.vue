<template>
  <div class="relative w-full overflow-hidden md:h-[600px]">
    <!-- Изображение -->
    <NuxtImg
      src="/img/backgrounds/bg-5.jpg"
      alt="Contact Us"
      class="h-[420px] w-full object-cover md:absolute md:inset-0 md:h-full"
    />

    <!-- Оверлей -->
    <div class="relative flex w-full flex-col items-center justify-center px-8 py-12 text-center bg-overlay-gray md:absolute md:left-[165px] md:top-0 md:h-full md:w-1/3 md:p-12">
      <!-- Логотип -->
      <div class="mb-8">
        <NuxtImg src="/img/Logo.svg" alt="Moon Logo" class="h-12 w-auto md:h-16 [filter:brightness(0)_invert(66%)_sepia(21%)_saturate(718%)_hue-rotate(347deg)_brightness(88%)_contrast(92%)]" />
      </div>

      <h1 class="font-serif text-4xl md:text-5xl font-extrabold text-brand-gold tracking-tighter uppercase mb-6">
        CONTACT US
      </h1>

      <!-- Разделитель -->
      <div class="w-full h-px bg-brand-gold/90 mb-8 max-w-xs"></div>

      <!-- Текст соцсетей -->
      <p class="font-sans text-brand-gold text-sm mb-6 uppercase tracking-widest font-semibold">
        Follow us on social media
      </p>

      <!-- Социальные сети -->
      <div class="flex gap-4">
        <a href="#" class="w-10 h-10 flex items-center justify-center bg-brand-gold hover:opacity-90 transition">
          <Icon name="custom:social-facebook" class="w-5 h-5 text-overlay-gray" />
        </a>
        <a href="#" class="w-10 h-10 flex items-center justify-center bg-brand-gold hover:opacity-90 transition">
          <Icon name="custom:social-twitter" class="w-5 h-5 text-overlay-gray" />
        </a>
        <a href="#" class="w-10 h-10 flex items-center justify-center bg-brand-gold hover:opacity-90 transition">
          <Icon name="custom:social-instagram" class="w-5 h-5 text-overlay-gray" />
        </a>
        <a href="#" class="w-10 h-10 flex items-center justify-center bg-brand-gold hover:opacity-90 transition">
          <Icon name="custom:social-linkedin" class="w-5 h-5 text-overlay-gray" />
        </a>
        <a href="#" class="w-10 h-10 flex items-center justify-center bg-brand-gold hover:opacity-90 transition">
          <Icon name="custom:social-youtube" class="w-5 h-5 text-overlay-gray" />
        </a>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="relative h-[600px] w-full overflow-hidden">
    <!-- Изображение -->
    <NuxtImg src="/img/backgrounds/bg-5.jpg" alt="Contact Us" class="h-full w-full object-cover" />
    
    <!-- Оверлей -->
    <div class="absolute left-[165px] top-0 h-full w-1/3 p-12 flex flex-col justify-center items-center text-center bg-overlay-gray">
      <!-- Логотип -->
      <div class="mb-8">
        <NuxtImg src="/img/Logo.svg" alt="Moon Logo" class="h-16 w-auto [filter:brightness(0)_invert(66%)_sepia(21%)_saturate(718%)_hue-rotate(347deg)_brightness(88%)_contrast(92%)]" />
      </div>

      <h1 class="font-serif text-5xl font-extrabold text-brand-gold tracking-tighter uppercase mb-6">
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

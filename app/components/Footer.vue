<script setup lang="ts">
const aboutLinks = ['Mission', 'Our team', 'Awards', 'Testimonials', 'Privacy policy']
const serviceLinks = ['Web design', 'Web development', 'Mobile design', 'UI/UX design', 'Branding design']
const portfolioLinks = ['Corporate websites', 'E-commerce', 'Mobile apps', 'Landing pages', 'UI/UX projects']
</script>

<template>
  <footer class="bg-heading text-white py-20 px-40">
    <!-- Footer Top -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
      <!-- Блок 1: Логотип и CTA -->
      <div class="flex flex-col items-start border-r border-neutral-600 pr-16">
        <div class="flex items-center gap-2 mb-6">
          <NuxtImg src="/img/Logo.svg" alt="Moon Logo" class="h-8 w-auto brightness-0 invert" />
          <span class="font-serif text-2xl font-extrabold tracking-tighter">MOON.</span>
        </div>
        <p class="font-sans text-sm text-neutral-300 mb-8 max-w-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
        </p>
        <button class="px-8 py-3 border border-white font-sans text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-heading transition">
          GET STARTED →
        </button>
      </div>

      <!-- Блок 2: Ссылки -->
      <div class="grid grid-cols-3 gap-8 pl-16">
        <div>
          <h4 class="font-sans text-sm font-semibold uppercase tracking-widest mb-6">About Us</h4>
          <ul class="space-y-4">
            <li v-for="link in aboutLinks" :key="link" class="text-sm text-neutral-300 hover:text-white cursor-pointer">{{ link }}</li>
          </ul>
        </div>
        <div>
          <h4 class="font-sans text-sm font-semibold uppercase tracking-widest mb-6">Services</h4>
          <ul class="space-y-4">
            <li v-for="link in serviceLinks" :key="link" class="text-sm text-neutral-300 hover:text-white cursor-pointer">{{ link }}</li>
          </ul>
        </div>
        <div>
          <h4 class="font-sans text-sm font-semibold uppercase tracking-widest mb-6">Portfolio</h4>
          <ul class="space-y-4">
            <li v-for="link in portfolioLinks" :key="link" class="text-sm text-neutral-300 hover:text-white cursor-pointer">{{ link }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-neutral-600 mb-12"></div>

    <!-- Footer Bottom: Copyright -->
    <div class="flex justify-center items-center gap-4 text-sm text-neutral-400">
      <span>Copyright © 2023 Moon | All Rights Reserved</span>
      <span class="hover:text-white cursor-pointer">Terms and Conditions</span>
      <span class="hover:text-white cursor-pointer">Privacy Policy</span>
    </div>
  </footer>
</template>

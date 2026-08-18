<script setup lang="ts">
const aboutLinks = ['Mission', 'Our team', 'Awards', 'Testimonials', 'Privacy policy']
const serviceLinks = ['Web design', 'Web development', 'Mobile design', 'UI/UX design', 'Branding design']
const portfolioLinks = ['Corporate websites', 'E-commerce', 'Mobile apps', 'Landing pages', 'UI/UX projects']
</script>

<template>
  <footer class="bg-heading text-white py-12 md:py-20 px-8 md:px-40">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
      <div class="flex flex-col items-start pb-12 border-b border-neutral-600 md:pb-0 md:border-b-0 md:border-r md:pr-16">
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

      <div class="grid grid-cols-2 gap-8 md:grid-cols-3 md:pl-16">
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

    <div class="border-t border-neutral-600 mb-12"></div>

    <div class="flex flex-col items-center gap-2 text-center text-sm text-neutral-400 md:flex-row md:justify-center md:gap-4">
      <span>Copyright © 2023 Moon</span>
      <span>All Rights Reserved</span>
      <span class="flex items-center gap-2">
        <span class="underline hover:text-white cursor-pointer">Terms and Conditions</span>
        <span>|</span>
        <span class="underline hover:text-white cursor-pointer">Privacy Policy</span>
      </span>
    </div>
  </footer>
</template>

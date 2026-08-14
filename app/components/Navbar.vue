<script setup lang="ts">
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const { cartCount } = useCart()
</script>

<template>
  <nav class="flex items-center justify-between py-6 px-8 bg-white border-b border-neutral-200">
    <!-- Логотип -->
    <div class="flex items-center gap-2">
      <NuxtImg src="/img/Logo.svg" alt="Moon Logo" class="h-8 w-auto" />
      <span class="font-serif text-2xl font-extrabold text-warm-black tracking-tighter">MOON</span>
    </div>

    <!-- Навигация -->
    <ul class="hidden md:flex gap-8">
      <li v-for="link in navLinks" :key="link.name">
        <NuxtLink 
          :to="link.path" 
          class="font-sans text-neutral-800 hover:text-green transition-colors font-semibold"
        >
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>

    <!-- Иконки -->
    <div class="flex items-center gap-6">
      <button class="text-neutral-800 hover:text-green transition-colors">
        <Icon name="custom:line-rounded-search" class="w-6 h-6" />
      </button>
      <button class="text-neutral-800 hover:text-green transition-colors">
        <Icon name="custom:line-rounded-user" class="w-6 h-6" />
      </button>
      <button class="text-neutral-800 hover:text-green transition-colors">
        <Icon name="custom:line-rounded-heart" class="w-6 h-6" />
      </button>
      <NuxtLink to="/cart" class="relative text-neutral-800 hover:text-green transition-colors">
        <Icon name="custom:line-rounded-shopping-cart" class="w-6 h-6" />
        <span
          v-if="cartCount > 0"
          class="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 rounded-full bg-warm-black text-white text-[10px] font-sans font-semibold"
        >
          {{ cartCount }}
        </span>
      </NuxtLink>
    </div>
  </nav>
</template>

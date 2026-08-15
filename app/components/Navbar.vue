<script setup lang="ts">
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTitle } from 'radix-vue'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const { cartCount } = useCart()

const mobileMenuOpen = ref(false)
</script>

<template>
  <nav class="flex items-center justify-between py-6 px-8 bg-white border-b border-neutral-200">
    <!-- Гамбургер (мобильный) -->
    <button
      type="button"
      class="md:hidden text-neutral-800 hover:text-green transition-colors"
      aria-label="Open menu"
      @click="mobileMenuOpen = true"
    >
      <Icon name="custom:line-rounded-menu" class="w-6 h-6" />
    </button>

    <!-- Логотип -->
    <div class="flex items-center gap-2">
      <NuxtImg src="/img/Logo.svg" alt="Moon Logo" class="h-8 w-auto" />
      <span class="font-serif text-2xl font-extrabold text-warm-black tracking-tighter">MOON.</span>
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
      <button class="hidden md:inline-flex text-neutral-800 hover:text-green transition-colors">
        <Icon name="custom:line-rounded-search" class="w-6 h-6" />
      </button>
      <button class="hidden md:inline-flex text-neutral-800 hover:text-green transition-colors">
        <Icon name="custom:line-rounded-user" class="w-6 h-6" />
      </button>
      <button class="hidden md:inline-flex text-neutral-800 hover:text-green transition-colors">
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

  <DialogRoot v-model:open="mobileMenuOpen">
    <DialogPortal>
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 z-40 bg-warm-black/50 md:hidden" />
      </Transition>
      <Transition
        enter-active-class="transition-transform duration-300"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-200"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <DialogContent
          class="fixed inset-y-0 left-0 z-50 flex h-full w-72 flex-col bg-white p-8 md:hidden focus:outline-none"
        >
          <div class="flex items-center justify-between mb-10">
            <DialogTitle class="font-serif text-lg font-semibold text-warm-black">Menu</DialogTitle>
            <DialogClose type="button" class="text-neutral-800 hover:text-green transition-colors" aria-label="Close menu">
              <Icon name="custom:line-rounded-close" class="w-5 h-5" />
            </DialogClose>
          </div>

          <ul class="flex flex-col gap-6">
            <li v-for="link in navLinks" :key="link.name">
              <NuxtLink
                :to="link.path"
                class="font-sans text-base text-neutral-800 hover:text-green transition-colors font-semibold"
                @click="mobileMenuOpen = false"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </DialogContent>
      </Transition>
    </DialogPortal>
  </DialogRoot>
</template>

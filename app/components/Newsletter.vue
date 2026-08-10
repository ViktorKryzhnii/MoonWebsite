<script setup lang="ts">
const email = ref('')
</script>

<template>
  <section class="py-20 px-40 bg-white flex flex-col items-center text-center">
    <p class="font-sans text-sm text-neutral-600 mb-2 uppercase tracking-widest">
      Sign up for emails
    </p>
    <h2 class="font-serif text-3xl font-semibold text-warm-black mb-10 tracking-widest uppercase">
      FOR NEWS, COLLECTIONS & MORE
    </h2>
    
    <div class="w-full max-w-md">
      <input 
        v-model="email"
        type="email" 
        placeholder="Enter your email address" 
        class="w-full text-center border-b border-warm-black pb-2 mb-8 focus:outline-none placeholder:text-neutral-400 font-sans text-sm"
      />
      
      <button class="px-12 py-3 border border-warm-black font-sans text-xs font-semibold uppercase tracking-widest text-warm-black hover:bg-warm-black hover:text-white transition">
        SIGN UP
      </button>
    </div>
  </section>
</template>

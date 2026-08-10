<script setup lang="ts">
// Компонент "How We Work"
</script>

<template>
  <section class="pb-20 px-8 md:px-40">
    <div class="grid md:grid-cols-2 gap-16 items-center">
      <div class="w-full h-[500px] overflow-hidden">
        <NuxtImg 
          src="/img/backgrounds/bg-33.jpg" 
          alt="How we work" 
          class="w-full h-full object-cover"
        />
      </div>
      <div class="flex flex-col gap-8">
        <h2 class="font-serif text-3xl font-bold text-[#3D3A42] tracking-widest uppercase">
          HOW WE WORKS
        </h2>
        <div class="flex flex-col gap-6">
          <div>
            <h3 class="font-bold text-lg text-neutral-800 mb-2">Product design</h3>
            <p class="text-neutral-600">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.</p>
          </div>
          <div>
            <h3 class="font-bold text-lg text-neutral-800 mb-2">Crafted</h3>
            <p class="text-neutral-600">Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.</p>
          </div>
          <div>
            <h3 class="font-bold text-lg text-neutral-800 mb-2">Sell product</h3>
            <p class="text-neutral-600">Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

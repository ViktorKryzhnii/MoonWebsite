<script setup lang="ts">
// Страница "О нас"
</script>

<template>
  <main class="py-12 md:py-20">
    <!-- About Header Component -->
    <section class="flex flex-col items-center justify-center px-8 text-center mb-12 md:mb-20">
      <h1 class="font-serif text-4xl md:text-5xl font-extrabold text-heading tracking-tighter mb-4">
        ABOUT MOON
      </h1>
      <p class="font-sans text-lg text-neutral-600 max-w-lg">
        Moon's handmade ceramic products have been around since 1650, let's explore our journey
      </p>
    </section>

    <!-- History Section -->
    <div class="flex flex-col">
      <EcommerceCard
        title="1910"
        description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
        image="/img/backgrounds/bg-32.jpg"
        alt="1910 - Early days"
        imageFirstOnMobile
      />
      <EcommerceCard
        title="1990"
        description="Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit"
        image="/img/backgrounds/bg-31.jpg"
        alt="1990 - Expansion"
        reverse
        imageFirstOnMobile
      />
      <EcommerceCard
        title="2010"
        description="Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus. sit aliquam sit nullam neque ultrices."
        image="/img/backgrounds/bg-30.jpg"
        alt="2010 - Modern era"
        imageFirstOnMobile
      />
    </div>
  </main>

  <HowWeWork />
  <MeetOurTeam />
  <Newsletter />
</template>

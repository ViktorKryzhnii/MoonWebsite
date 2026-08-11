<script setup lang="ts">
const team = [
  { name: 'Bernie Patterson', role: 'CEO & Founder', image: '/img/backgrounds/bg-11.jpg' },
  { name: 'Ophelia Vase', role: 'Creative Director', image: '/img/backgrounds/bg-13.jpg' },
  { name: 'Corbin Hossain', role: 'Artist', image: '/img/backgrounds/bg-14.jpg' },
  { name: 'Seren Bowl', role: 'Marketing', image: '/img/backgrounds/bg-21.jpg' },
]
</script>

<template>
  <section class="py-20 px-8 md:px-40">
    <h2 class="font-serif text-3xl font-extrabold text-heading tracking-widest uppercase text-center mb-16">
      MEET OUR TEAM
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <TeamCard
        v-for="member in team"
        :key="member.name"
        :name="member.name"
        :role="member.role"
        :image="member.image"
      />
    </div>
  </section>
</template>

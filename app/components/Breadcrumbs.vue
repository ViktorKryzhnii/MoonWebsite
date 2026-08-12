<script setup lang="ts">
defineProps<{
  items: { label: string; to?: string }[]
}>()
</script>

<template>
  <nav aria-label="Breadcrumb" class="font-sans text-sm">
    <ol class="flex items-center gap-2">
      <li v-for="(item, index) in items" :key="item.label" class="flex items-center gap-2">
        <NuxtLink v-if="item.to" :to="item.to" class="text-neutral-400 hover:text-warm-black transition-colors">
          {{ item.label }}
        </NuxtLink>
        <span v-else class="text-warm-black">{{ item.label }}</span>
        <span v-if="index < items.length - 1" class="text-neutral-400">/</span>
      </li>
    </ol>
  </nav>
</template>

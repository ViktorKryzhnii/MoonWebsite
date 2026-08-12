<script setup lang="ts">
const categories = ['Dinnerware', 'Ceramic', 'Furniture', 'Decor Art', 'Gifts sets']
const priceRanges = ['$0 - $10', '$10 - $50', '$50 - $100', '$100 - $200', '> $200']
const tags = ['Dinnerware', 'Ceramic', 'Furniture', 'Decor Art', 'Gifts sets']
const colors = [
  { name: 'All', hex: '#FFFFFF' },
  { name: 'Tan', hex: '#C69B7B' },
  { name: 'Sage', hex: '#B7C4B1' },
  { name: 'Red', hex: '#B3261E' },
  { name: 'Purple', hex: '#8B7E9A' }
]

const { selectedCategories, selectedPriceRanges, selectedTags, selectedColor } = useShopFilters()
</script>

<template>
  <aside class="flex flex-col gap-8 font-sans">
    <div>
      <h3 class="font-semibold text-warm-black mb-4">Category</h3>
      <ul class="flex flex-col gap-3">
        <li v-for="category in categories" :key="category">
          <label class="flex items-center gap-3 text-sm text-neutral-600 cursor-pointer">
            <input v-model="selectedCategories" type="checkbox" :value="category" class="w-4 h-4 border-neutral-300 accent-warm-black" />
            {{ category }}
          </label>
        </li>
      </ul>
    </div>

    <div class="border-t border-neutral-200 pt-8">
      <h3 class="font-semibold text-warm-black mb-4">Price Range</h3>
      <ul class="flex flex-col gap-3">
        <li v-for="range in priceRanges" :key="range">
          <label class="flex items-center gap-3 text-sm text-neutral-600 cursor-pointer">
            <input v-model="selectedPriceRanges" type="checkbox" :value="range" class="w-4 h-4 border-neutral-300 accent-warm-black" />
            {{ range }}
          </label>
        </li>
      </ul>
    </div>

    <div class="border-t border-neutral-200 pt-8">
      <h3 class="font-semibold text-warm-black mb-4">Color</h3>
      <div class="flex items-center gap-3">
        <button
          v-for="color in colors"
          :key="color.name"
          type="button"
          :aria-label="color.name"
          :aria-pressed="selectedColor === color.name"
          class="w-6 h-6 border transition"
          :class="selectedColor === color.name ? 'border-warm-black' : 'border-neutral-300'"
          :style="{ backgroundColor: color.hex }"
          @click="selectedColor = selectedColor === color.name ? null : color.name"
        />
      </div>
    </div>

    <div class="border-t border-neutral-200 pt-8">
      <h3 class="font-semibold text-warm-black mb-4">Tags</h3>
      <ul class="flex flex-col gap-3">
        <li v-for="tag in tags" :key="tag">
          <label class="flex items-center gap-3 text-sm text-neutral-600 cursor-pointer">
            <input v-model="selectedTags" type="checkbox" :value="tag" class="w-4 h-4 border-neutral-300 accent-warm-black" />
            {{ tag }}
          </label>
        </li>
      </ul>
    </div>
  </aside>
</template>

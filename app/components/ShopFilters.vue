<script setup lang="ts">
const categories = ['Dinnerware', 'Ceramic', 'Furniture', 'Decor Art', 'Gifts sets']
const priceRanges = ['$0 - $10', '$10 - $50', '$50 - $100', '$100 - $200', '> $200']
const tags = ['Dinnerware', 'Ceramic', 'Furniture', 'Decor Art', 'Gifts sets']
const colors: ColorSwatch[] = [
  { name: 'All', hex: '#FFFFFF' },
  { name: 'Tan', hex: '#C69B7B' },
  { name: 'Sage', hex: '#B7C4B1' },
  { name: 'Red', hex: '#B3261E' },
  { name: 'Purple', hex: '#8B7E9A' }
]

const { selectedCategories, selectedPriceRanges, selectedTags, selectedColor, filterDrawerOpen } = useShopFilters()
</script>

<template>
  <div
    class="fixed inset-0 z-40 bg-warm-black/50 transition-opacity lg:hidden"
    :class="filterDrawerOpen ? 'opacity-100' : 'pointer-events-none opacity-0'"
    @click="filterDrawerOpen = false"
  />

  <aside
    v-bind="$attrs"
    class="fixed inset-y-0 left-0 z-50 w-72 -translate-x-full overflow-y-auto bg-white p-8 transition-transform duration-300 lg:static lg:z-auto lg:w-auto lg:translate-x-0 lg:overflow-visible lg:bg-transparent lg:p-0 flex flex-col gap-8 font-sans"
    :class="filterDrawerOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="flex items-center justify-between lg:hidden">
      <h2 class="font-serif text-lg font-semibold text-warm-black">Filter</h2>
      <button type="button" class="text-neutral-800 hover:text-green transition-colors" aria-label="Close filter" @click="filterDrawerOpen = false">
        <Icon name="custom:line-rounded-close" class="w-5 h-5" />
      </button>
    </div>

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
        <ColorSwatchButton
          v-for="color in colors"
          :key="color.name"
          :color="color"
          :active="selectedColor === color.name"
          @select="selectedColor = selectedColor === $event ? null : $event"
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

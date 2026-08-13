<script setup lang="ts">
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport
} from 'radix-vue'

const { sortBy, filteredProducts } = useShopFilters()

const sortOptions = ['Name', 'Price: Low to High', 'Price: High to Low']
</script>

<template>
  <div class="flex items-center justify-between font-sans text-sm">
    <p class="text-neutral-600">Showing {{ filteredProducts.length }} items</p>

    <div class="flex items-center gap-2 text-neutral-600">
      <span>Sort by:</span>
      <SelectRoot v-model="sortBy">
        <SelectTrigger
          class="flex w-48 items-center justify-between gap-2 border border-neutral-300 bg-white py-2 pl-3 pr-3 font-sans font-semibold text-warm-black focus:outline-none focus:border-warm-black hover:border-neutral-400 transition-colors"
          aria-label="Sort by"
        >
          <SelectValue class="truncate" />
          <SelectIcon as-child>
            <Icon name="custom:line-rounded-chevron-down" class="w-4 h-4 text-neutral-600 shrink-0" />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectContent
            position="popper"
            :side-offset="4"
            class="z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden border border-neutral-300 bg-white shadow-md"
          >
            <SelectViewport class="p-1">
              <SelectItem
                v-for="option in sortOptions"
                :key="option"
                :value="option"
                class="relative flex cursor-pointer select-none items-center py-2 pl-8 pr-3 font-sans text-sm text-warm-black outline-none data-[highlighted]:bg-neutral-200"
              >
                <span class="absolute left-2 flex h-4 w-4 items-center justify-center">
                  <SelectItemIndicator>
                    <Icon name="custom:line-rounded-checkmark" class="w-4 h-4 text-warm-black" />
                  </SelectItemIndicator>
                </span>
                <SelectItemText>{{ option }}</SelectItemText>
              </SelectItem>
            </SelectViewport>
          </SelectContent>
        </SelectPortal>
      </SelectRoot>
    </div>
  </div>
</template>

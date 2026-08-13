const PAGE_SIZE = 9

export function useShopFilters() {
  const selectedCategories = useState<string[]>('shop-filter-categories', () => [])
  const selectedPriceRanges = useState<string[]>('shop-filter-price-ranges', () => [])
  const selectedTags = useState<string[]>('shop-filter-tags', () => [])
  const selectedColor = useState<string | null>('shop-filter-color', () => null)
  const sortBy = useState<string>('shop-sort', () => 'Name')
  const currentPage = useState<number>('shop-current-page', () => 1)

  const filteredProducts = computed(() => {
    return shopProducts.filter((product) => {
      if (selectedCategories.value.length && !selectedCategories.value.includes(product.category)) {
        return false
      }
      if (selectedTags.value.length && !product.tags.some((tag) => selectedTags.value.includes(tag))) {
        return false
      }
      if (selectedColor.value && selectedColor.value !== 'All' && product.color !== selectedColor.value) {
        return false
      }
      if (selectedPriceRanges.value.length) {
        const matchesRange = selectedPriceRanges.value.some((range) => priceRangeMatchers[range]?.(product.priceValue))
        if (!matchesRange) return false
      }
      return true
    })
  })

  const sortedProducts = computed(() => {
    const sorted = [...filteredProducts.value]
    if (sortBy.value === 'Price: Low to High') return sorted.sort((a, b) => a.priceValue - b.priceValue)
    if (sortBy.value === 'Price: High to Low') return sorted.sort((a, b) => b.priceValue - a.priceValue)
    return sorted.sort((a, b) => a.name.localeCompare(b.name))
  })

  const totalPages = computed(() => Math.max(1, Math.ceil(sortedProducts.value.length / PAGE_SIZE)))

  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * PAGE_SIZE
    return sortedProducts.value.slice(start, start + PAGE_SIZE)
  })

  const pageResetWatcherRegistered = useState('shop-page-reset-watcher-registered', () => false)
  if (!pageResetWatcherRegistered.value) {
    pageResetWatcherRegistered.value = true
    effectScope(true).run(() => {
      watch(
        [selectedCategories, selectedPriceRanges, selectedTags, selectedColor, sortBy],
        () => {
          currentPage.value = 1
        },
        { deep: true }
      )
    })
  }

  return {
    selectedCategories,
    selectedPriceRanges,
    selectedTags,
    selectedColor,
    sortBy,
    currentPage,
    totalPages,
    filteredProducts: sortedProducts,
    paginatedProducts
  }
}

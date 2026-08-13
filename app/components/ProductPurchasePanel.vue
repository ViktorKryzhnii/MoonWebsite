<script setup lang="ts">
const props = defineProps<{
  product: ShopProduct
}>()

const quantity = ref(1)
const selectedColor = ref(colorSwatches[0]?.name)
const isWishlisted = ref(false)

const fullStars = computed(() => Math.round(props.product.rating))

function decreaseQuantity() {
  quantity.value = Math.max(1, quantity.value - 1)
}

function increaseQuantity() {
  quantity.value += 1
}
</script>

<template>
  <div>
    <h1 class="font-serif text-3xl font-semibold text-warm-black uppercase tracking-wider mb-3">
      {{ product.name }}
    </h1>

    <div class="flex items-center gap-4 mb-4">
      <div class="flex items-center gap-1">
        <Icon
          v-for="star in 5"
          :key="star"
          :name="star <= fullStars ? 'custom:filled-star' : 'custom:line-rounded-star'"
          class="w-4 h-4 text-brand-gold"
        />
        <span class="font-sans text-sm text-neutral-600 ml-2">({{ product.reviewCount }} Reviews)</span>
      </div>
      <span class="font-sans text-sm text-neutral-600">
        Stock:
        <span :class="product.inStock ? 'text-green' : 'text-error'">{{ product.inStock ? 'In stock' : 'Out of stock' }}</span>
      </span>
    </div>

    <div class="flex items-baseline gap-3 mb-6">
      <span class="font-sans text-3xl font-semibold text-warm-black">${{ product.priceValue }}</span>
      <span v-if="product.originalPriceValue" class="font-sans text-xl text-neutral-400 line-through">${{ product.originalPriceValue }}</span>
    </div>

    <div class="mb-8">
      <p class="font-sans text-sm font-semibold text-warm-black mb-3">
        Color : <span class="font-normal text-neutral-600">{{ selectedColor }}</span>
      </p>
      <div class="flex items-center gap-3">
        <ColorSwatchButton
          v-for="swatch in colorSwatches"
          :key="swatch.name"
          :color="swatch"
          :active="selectedColor === swatch.name"
          size="md"
          @select="selectedColor = $event"
        />
      </div>
    </div>

    <div class="flex items-center gap-4 mb-4">
      <div class="flex items-center border border-neutral-300">
        <button type="button" class="p-3 text-warm-black hover:bg-neutral-200 transition-colors" aria-label="Decrease quantity" @click="decreaseQuantity">
          <Icon name="custom:line-rounded-minus" class="w-4 h-4" />
        </button>
        <span class="w-10 text-center font-sans text-sm font-semibold text-warm-black">{{ quantity }}</span>
        <button type="button" class="p-3 text-warm-black hover:bg-neutral-200 transition-colors" aria-label="Increase quantity" @click="increaseQuantity">
          <Icon name="custom:line-rounded-plus" class="w-4 h-4" />
        </button>
      </div>

      <button
        type="button"
        :disabled="!product.inStock"
        class="flex-1 py-3 bg-warm-black font-sans text-xs font-semibold uppercase tracking-widest text-white hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:opacity-40"
      >
        Add to cart
      </button>
    </div>

    <div class="flex items-center gap-4 mb-8">
      <button
        type="button"
        :disabled="!product.inStock"
        class="flex-1 py-3 border border-neutral-300 font-sans text-xs font-semibold uppercase tracking-widest text-warm-black hover:bg-neutral-200 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
      >
        Buy now
      </button>
      <button
        type="button"
        class="p-3 border border-neutral-300 transition-colors"
        :class="isWishlisted ? 'text-brand-gold border-brand-gold' : 'text-warm-black hover:bg-neutral-200'"
        aria-label="Toggle wishlist"
        @click="isWishlisted = !isWishlisted"
      >
        <Icon :name="isWishlisted ? 'custom:filled-heart' : 'custom:line-rounded-heart'" class="w-4 h-4" />
      </button>
    </div>

    <div class="flex items-center gap-4">
      <span class="font-sans text-sm font-semibold text-warm-black">Share this:</span>
      <a href="#" aria-label="Share on Facebook" class="text-brand-gold hover:opacity-70 transition"><Icon name="custom:social-facebook" class="w-5 h-5" /></a>
      <a href="#" aria-label="Share on Twitter" class="text-brand-gold hover:opacity-70 transition"><Icon name="custom:social-twitter" class="w-5 h-5" /></a>
      <a href="#" aria-label="Share on Instagram" class="text-brand-gold hover:opacity-70 transition"><Icon name="custom:social-instagram" class="w-5 h-5" /></a>
      <a href="#" aria-label="Share on LinkedIn" class="text-brand-gold hover:opacity-70 transition"><Icon name="custom:social-linkedin" class="w-5 h-5" /></a>
    </div>
  </div>
</template>

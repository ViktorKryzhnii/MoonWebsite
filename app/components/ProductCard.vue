<script setup lang="ts">
const props = defineProps<{
  product: ShopProduct
}>()

const justAdded = ref(false)
const { addToCart } = useCart()

function handleAddToCart() {
  addToCart(props.product)
  justAdded.value = true
  setTimeout(() => {
    justAdded.value = false
  }, 1500)
}
</script>

<template>
  <article class="flex flex-col">
    <NuxtLink :to="`/product/${product.slug}`" class="overflow-hidden w-full aspect-[3/4] mb-6 block">
      <NuxtImg
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </NuxtLink>

    <h3 class="font-sans text-sm font-semibold text-warm-black mb-1 uppercase tracking-wider">
      <NuxtLink :to="`/product/${product.slug}`">{{ product.name }}</NuxtLink>
    </h3>
    <p class="font-sans text-sm text-neutral-800 mb-2 font-semibold">
      {{ product.price }}
    </p>
    <p class="font-sans text-xs text-neutral-600 mb-6 leading-relaxed flex-grow">
      {{ product.desc }}
    </p>

    <button
      type="button"
      :disabled="!product.inStock"
      class="w-full py-3 border border-neutral-300 font-sans text-xs font-semibold uppercase tracking-widest text-warm-black hover:bg-neutral-100 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
      @click="handleAddToCart"
    >
      {{ justAdded ? 'Added ✓' : 'Add to cart' }}
    </button>
  </article>
</template>

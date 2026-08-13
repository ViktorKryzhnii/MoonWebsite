<script setup lang="ts">
const route = useRoute()
const product = getProductBySlug(route.params.slug as string)

if (!product) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

const otherProducts = shopProducts.filter((item) => item.slug !== product.slug)
const similarProducts = [
  ...otherProducts.filter((item) => item.category === product.category),
  ...otherProducts.filter((item) => item.category !== product.category)
].slice(0, 4)
</script>

<template>
  <div class="px-8 md:px-40 pt-8">
    <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'Shop', to: '/shop' }, { label: product.name }]" />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 md:px-40 py-12 pb-20">
    <ProductGallery :image="product.image" :alt="product.name" />
    <div>
      <ProductPurchasePanel :product="product" />
      <ProductAccordion :desc="product.desc" class="mt-12" />
    </div>
  </div>

  <BestSellers title="Similar Items" :products="similarProducts" align="left" />
</template>

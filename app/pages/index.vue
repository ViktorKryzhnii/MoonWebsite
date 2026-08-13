<script setup lang="ts">
// Главная страница
const bestSellers = [
  'small-ecru-ceramic-compote',
  'warrick-white-vase-14',
  'porcelain-dinner-plate',
  'warrick-white-vase-20',
  'rounded-dual-handled-vase',
  'marin-white-dinner-plate',
  'tall-cream-ceramic-vase',
  'luana-bowl'
].map((slug) => getProductBySlug(slug)!)

const newArrivals = [
  'porcelain-dinner-plate-3',
  'ophelia-matte-natural-vase',
  'porcelain-dinner-plate-2',
  'luana-bowl-2'
].map((slug) => getProductBySlug(slug)!)
</script>

<template>
  <Slider />
  <ProductGrid />
  <EcommerceCard
    title="UP TO 40% OFF OUR<br class='hidden sm:inline' /> CHRISTMAS COLLECTION"
    description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
    image="/img/backgrounds/bg-27.jpg"
    alt="Christmas Collection Plates"
  />
  <BestSellers title="Best Sellers" :products="bestSellers" />
  <EcommerceCard
    title="NEW COLLECTION<br class='hidden sm:inline' /> ARRIVALS"
    description="Discover our latest handcrafted ceramics, designed to bring elegance and warmth to your home."
    image="/img/backgrounds/bg-28.jpg"
    alt="New Collection"
    reverse
    buttonText="Learn more"
  />
  <EcommerceCard
    title="TIMELESS DESIGN<br class='hidden sm:inline' /> FOR EVERY DAY"
    description="Explore our everyday essentials, blending functionality with aesthetic beauty."
    image="/img/backgrounds/bg-24.jpg"
    alt="Everyday Essentials"
    buttonText="Learn more"
  />
  <BestSellers title="Discover New Arrivals" :products="newArrivals" />
  <BlogCard
    category="TABLEWARE"
    title="THE SECRETS TO A<br class='hidden sm:inline' /> KITCHEN ROOM"
    description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
    image="/img/backgrounds/bg-29.jpg"
    alt="Our Blog"
    buttonText="READ MORE"
  />
  <Newsletter />
</template>

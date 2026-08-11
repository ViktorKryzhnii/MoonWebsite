<script setup lang="ts">
// Главная страница
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
  <BestSellers
    title="Best Sellers"
    :products="[
      { name: 'SMALL ECRU CERAMIC COMPOTE', price: '$49.00', desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.', image: '/img/products/product-4.jpg' },
      { name: 'WARRICK WHITE VASE 14', price: '$49.00', desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.', image: '/img/products/product-7.jpg' },
      { name: 'PORCELAIN DINNER PLATE', price: '$49.00', desc: 'Lorem ipsum dolor sit amet conse bolli tetur .', image: '/img/products/product-8.jpg' },
      { name: 'WARRICK WHITE VASE 20', price: '$49.00', desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.', image: '/img/products/product-9.jpg' },
      { name: 'ROUNDED DUAL HANDLED VASE', price: '$49.00', desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.', image: '/img/products/product-10.jpg' },
      { name: 'MARIN WHITE DINNER PLATE', price: '$49.00', desc: 'Lorem ipsum dolor sit amet conse.', image: '/img/products/product-11.jpg' },
      { name: 'TALL CREAM CERAMIC VASE', price: '$49.00', desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.', image: '/img/products/product-12.jpg' },
      { name: 'LUANA BOWL', price: '$49.00', desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.', image: '/img/products/product-13.jpg' },
    ]"
  />
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
  <BestSellers
    title="Discover New Arrivals"
    :products="[
      { name: 'Porcelain Dinner Plate', price: '$49.00', desc: 'Lorem ipsum dolor sit amet.', image: '/img/products/product-15.jpg' },
      { name: 'Ophelia Matte Natural  Vase', price: '$49.00', desc: 'Lorem ipsum dolor sit amet.', image: '/img/products/product-14.jpg' },
      { name: 'Porcelain Dinner Plate', price: '$49.00', desc: 'Lorem ipsum dolor sit amet.', image: '/img/products/product-1.jpg' },
      { name: 'Luana Bowl', price: '$49.00', desc: 'Lorem ipsum dolor sit amet.', image: '/img/products/product-16.jpg' },
    ]"
  />
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

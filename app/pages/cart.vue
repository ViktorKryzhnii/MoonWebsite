<script setup lang="ts">
const { cartItems, cartCount, cartSubtotal, removeFromCart, setQuantity } = useCart()
</script>

<template>
  <div class="px-8 md:px-40 pt-8 flex flex-col gap-6">
    <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'Shopping Cart' }]" />
    <h1 class="font-serif text-3xl font-semibold text-warm-black">
      Cart ({{ cartCount }} item{{ cartCount === 1 ? '' : 's' }})
    </h1>
  </div>

  <div class="px-8 md:px-40 py-12">
    <div v-if="!cartItems.length" class="flex flex-col items-center gap-4 py-20 text-center">
      <p class="font-sans text-sm text-neutral-600">Your cart is empty.</p>
      <NuxtLink to="/shop" class="font-sans text-xs font-semibold text-warm-black uppercase tracking-[0.2em] border-b border-warm-black pb-1 hover:text-green hover:border-green transition-all">
        Continue shopping
      </NuxtLink>
    </div>

    <template v-else>
      <div class="border border-neutral-200">
        <div class="hidden md:grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-6 bg-heading px-6 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-white">
          <span class="w-6"></span>
          <span>Product</span>
          <span class="w-24 text-right">Price</span>
          <span class="w-32 text-center">Quantity</span>
          <span class="w-24 text-right">Subtotal</span>
        </div>

        <div
          v-for="item in cartItems"
          :key="item.product.slug"
          class="flex flex-col gap-4 border-t border-neutral-200 px-6 py-6 first:border-t-0 md:grid md:grid-cols-[auto_1fr_auto_auto_auto] md:items-center md:gap-6"
        >
          <button
            type="button"
            class="w-6 text-error hover:opacity-70 transition self-start md:self-center"
            aria-label="Remove item"
            @click="removeFromCart(item.product.slug)"
          >
            <Icon name="custom:line-rounded-close" class="w-5 h-5" />
          </button>

          <div class="flex items-center gap-4">
            <NuxtImg :src="item.product.image" :alt="item.product.name" class="w-20 h-20 object-cover shrink-0" />
            <NuxtLink :to="`/product/${item.product.slug}`" class="font-sans text-sm font-semibold text-warm-black uppercase tracking-wider hover:text-green transition-colors">
              {{ item.product.name }}
            </NuxtLink>
          </div>

          <span class="font-sans text-sm font-semibold text-warm-black md:w-24 md:text-right">{{ item.product.price }}</span>

          <div class="md:w-32 md:flex md:justify-center">
            <QuantityStepper :model-value="item.quantity" @update:model-value="setQuantity(item.product.slug, $event)" />
          </div>

          <span class="font-sans text-sm font-semibold text-brand-gold md:w-24 md:text-right">
            ${{ item.product.priceValue * item.quantity }}
          </span>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8">
        <div class="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Coupon code"
            class="border border-neutral-300 px-4 py-3 font-sans text-sm text-neutral-800 focus:outline-none focus:border-warm-black"
          />
          <button type="button" class="px-6 py-3 bg-warm-black font-sans text-xs font-semibold uppercase tracking-widest text-white hover:opacity-90 transition">
            Apply Coupon
          </button>
        </div>

        <button type="button" class="px-6 py-3 bg-heading font-sans text-xs font-semibold uppercase tracking-widest text-white hover:opacity-90 transition">
          Update Cart
        </button>
      </div>

      <div class="flex justify-end mt-12">
        <div class="w-full md:w-96 bg-heading text-white p-8 flex flex-col gap-6">
          <h2 class="font-sans text-lg font-semibold">Cart totals</h2>

          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between font-sans text-sm">
              <span class="font-semibold">Subtotal</span>
              <span>${{ cartSubtotal.toFixed(2) }}</span>
            </div>
            <div class="flex items-center justify-between font-sans text-sm">
              <span class="font-semibold">Total</span>
              <span>${{ cartSubtotal.toFixed(2) }}</span>
            </div>
          </div>

          <NuxtLink to="/checkout" class="w-full py-4 border border-white font-sans text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-heading transition flex items-center justify-center">
            Proceed to Checkout
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>

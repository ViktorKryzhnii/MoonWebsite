<script setup lang="ts">
import {
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupRoot,
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

const { cartItems, cartSubtotal } = useCart()

onMounted(() => {
  if (!cartItems.value.length) {
    navigateTo('/cart')
  }
})

const total = computed(() => cartSubtotal.value + SHIPPING_FLAT_RATE)

const countries = ['United States', 'Canada', 'United Kingdom', 'Australia']
const states = ['California', 'New York', 'Texas', 'Florida', 'Other']

const billing = reactive({
  firstName: '',
  lastName: '',
  company: '',
  country: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  email: '',
  notes: ''
})

const paymentMethod = ref('credit-card')
const card = reactive({
  number: '',
  name: '',
  expiry: '',
  cvc: ''
})

const errors = reactive<Record<string, string>>({})
const submitting = ref(false)
const orderPlaced = ref(false)

function validate(): boolean {
  for (const key of Object.keys(errors)) delete errors[key]

  if (!isRequired(billing.firstName)) {
    errors.firstName = 'First name is required.'
  } else if (!isValidName(billing.firstName)) {
    errors.firstName = 'First name must contain letters only.'
  }

  if (!isRequired(billing.lastName)) {
    errors.lastName = 'Last name is required.'
  } else if (!isValidName(billing.lastName)) {
    errors.lastName = 'Last name must contain letters only.'
  }

  if (!isRequired(billing.country)) errors.country = 'Please select a country.'
  if (!isRequired(billing.street)) errors.street = 'Street address is required.'

  if (!isRequired(billing.city)) {
    errors.city = 'Town / City is required.'
  } else if (!isValidName(billing.city)) {
    errors.city = 'Town / City must contain letters only.'
  }

  if (!isRequired(billing.state)) errors.state = 'Please select a state.'

  if (!isRequired(billing.phone)) {
    errors.phone = 'Phone is required.'
  } else if (!isValidPhone(billing.phone)) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (billing.email && !isValidEmail(billing.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (paymentMethod.value === 'credit-card') {
    if (!isValidCardNumber(card.number)) errors.cardNumber = 'Enter a valid card number.'

    if (!isRequired(card.name)) {
      errors.cardName = 'Name on card is required.'
    } else if (!isValidName(card.name)) {
      errors.cardName = 'Name on card must contain letters only.'
    }

    if (!isValidExpiry(card.expiry)) errors.cardExpiry = 'Use MM/YY, not expired.'
    if (!isValidCvc(card.cvc)) errors.cardCvc = 'Enter a valid security code.'
  }

  return Object.keys(errors).length === 0
}

async function handlePlaceOrder() {
  if (!validate()) return

  submitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 1500))
  submitting.value = false

  cartItems.value = []
  orderPlaced.value = true
}
</script>

<template>
  <div class="px-8 md:px-40 pt-8">
    <Breadcrumbs :items="[{ label: 'Cart', to: '/cart' }, { label: 'Shipping' }, { label: 'Payment' }]" />
  </div>

  <div class="px-8 md:px-40 py-12">
    <div v-if="orderPlaced" class="flex flex-col items-center gap-4 py-20 text-center">
      <h1 class="font-serif text-3xl font-semibold text-warm-black">Thank you for your order!</h1>
      <p class="font-sans text-sm text-neutral-600 max-w-md">
        We've received your order and will get it ready for you shortly.
      </p>
      <NuxtLink to="/" class="font-sans text-xs font-semibold text-warm-black uppercase tracking-[0.2em] border-b border-warm-black pb-1 hover:text-green hover:border-green transition-all">
        Back to home
      </NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h1 class="font-serif text-3xl font-semibold text-warm-black mb-8">Billing Details</h1>

        <form class="flex flex-col gap-6" @submit.prevent="handlePlaceOrder">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField id="firstName" v-model="billing.firstName" label="First Name" required placeholder="Samatha Clarken" :error="errors.firstName" />
            <FormField id="lastName" v-model="billing.lastName" label="Last Name" required placeholder="Clarken" :error="errors.lastName" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField id="company" v-model="billing.company" label="Company" placeholder="Moon" />

            <div class="flex flex-col gap-2">
              <label class="font-sans font-semibold text-neutral-800">Country / Region <span>*</span></label>
              <SelectRoot v-model="billing.country">
                <SelectTrigger
                  class="flex w-full items-center justify-between gap-2 border px-4 py-3 font-sans text-neutral-800 focus:outline-none hover:border-neutral-400 transition-colors"
                  :class="errors.country ? 'border-error focus:border-error' : 'border-neutral-300 focus:border-green'"
                  aria-label="Country / Region"
                >
                  <SelectValue placeholder="United states" class="truncate" />
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
                        v-for="option in countries"
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
              <span v-if="errors.country" class="font-sans text-xs text-error">{{ errors.country }}</span>
            </div>
          </div>

          <FormField id="street" v-model="billing.street" label="Street address" required placeholder="Address" :error="errors.street" />

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField id="city" v-model="billing.city" label="Town / City" required placeholder="City" :error="errors.city" />

            <div class="flex flex-col gap-2">
              <label class="font-sans font-semibold text-neutral-800">State <span>*</span></label>
              <SelectRoot v-model="billing.state">
                <SelectTrigger
                  class="flex w-full items-center justify-between gap-2 border px-4 py-3 font-sans text-neutral-800 focus:outline-none hover:border-neutral-400 transition-colors"
                  :class="errors.state ? 'border-error focus:border-error' : 'border-neutral-300 focus:border-green'"
                  aria-label="State"
                >
                  <SelectValue placeholder="State" class="truncate" />
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
                        v-for="option in states"
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
              <span v-if="errors.state" class="font-sans text-xs text-error">{{ errors.state }}</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField id="zip" v-model="billing.zip" label="ZIP Code" placeholder="Zip code" />
            <FormField id="phone" v-model="billing.phone" label="Phone" required type="tel" placeholder="(123) 456 - 7890" :error="errors.phone" />
          </div>

          <FormField id="email" v-model="billing.email" label="Email" type="email" placeholder="example@youremail.com" :error="errors.email" />

          <FormField id="notes" v-model="billing.notes" label="Order notes" as="textarea" placeholder="Type your message here..." />

          <div class="flex items-center justify-between mt-4">
            <NuxtLink to="/cart" class="flex items-center gap-2 font-sans text-sm font-semibold text-neutral-600 hover:text-warm-black transition-colors">
              <Icon name="custom:line-rounded-chevron-left" class="w-4 h-4" />
              Return to Cart
            </NuxtLink>
            <button
              type="submit"
              :disabled="submitting"
              class="px-8 py-4 bg-heading font-sans text-xs font-semibold uppercase tracking-widest text-white hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ submitting ? 'Placing order...' : 'Continue to Shipping →' }}
            </button>
          </div>
        </form>
      </div>

      <div>
        <div class="flex items-center justify-between font-serif text-2xl font-semibold text-warm-black border-b border-neutral-200 pb-4 mb-4">
          <span>Product</span>
          <span>Subtotal</span>
        </div>

        <div class="flex flex-col gap-3 mb-6">
          <div v-for="item in cartItems" :key="item.product.slug" class="flex items-center justify-between font-sans text-sm text-neutral-800">
            <span>{{ item.product.name }}<span v-if="item.quantity > 1"> × {{ item.quantity }}</span></span>
            <span>${{ (item.product.priceValue * item.quantity).toFixed(2) }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-3 border-t border-neutral-200 pt-4">
          <div class="flex items-center justify-between font-sans text-sm font-semibold text-warm-black">
            <span>Subtotal</span>
            <span>${{ cartSubtotal.toFixed(2) }}</span>
          </div>
          <div class="flex items-center justify-between font-sans text-sm font-semibold text-warm-black">
            <span>Shipping</span>
            <span>${{ SHIPPING_FLAT_RATE.toFixed(2) }}</span>
          </div>
        </div>

        <div class="flex items-center justify-between border-t border-neutral-200 mt-4 pt-4 mb-8">
          <span class="font-serif text-xl font-semibold text-warm-black">Total</span>
          <span class="font-serif text-xl font-semibold text-warm-black">${{ total.toFixed(2) }}</span>
        </div>

        <div class="bg-heading text-white p-8 flex flex-col gap-6">
          <h2 class="font-sans text-lg font-semibold">Payment</h2>

          <RadioGroupRoot v-model="paymentMethod" class="flex flex-col gap-6">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <RadioGroupItem
                  id="pm-card"
                  value="credit-card"
                  class="w-5 h-5 rounded-full border border-white flex items-center justify-center shrink-0"
                >
                  <RadioGroupIndicator class="w-2.5 h-2.5 rounded-full bg-white" />
                </RadioGroupItem>
                <label for="pm-card" class="font-sans text-sm text-white cursor-pointer">Credit card</label>
                <div class="ml-auto flex items-center gap-2">
                  <NuxtImg src="/img/Frame.jpg" alt="Visa" class="h-5 w-auto" />
                  <NuxtImg src="/img/Frame-1.jpg" alt="Mastercard" class="h-5 w-auto" />
                </div>
              </div>

              <div v-if="paymentMethod === 'credit-card'" class="flex flex-col gap-4 border-t border-white/20 pt-6">
                <FormField id="cardNumber" v-model="card.number" label="Card number" variant="dark" placeholder="Card number" :error="errors.cardNumber" />
                <FormField id="cardName" v-model="card.name" label="Name on card" variant="dark" placeholder="Name on card" :error="errors.cardName" />
                <div class="grid grid-cols-2 gap-4">
                  <FormField id="cardExpiry" v-model="card.expiry" label="Expiration date (MM/YY)" variant="dark" placeholder="MM/YY" :error="errors.cardExpiry" />
                  <FormField id="cardCvc" v-model="card.cvc" label="Security code" variant="dark" placeholder="Security code" :error="errors.cardCvc" />
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3 border-t border-white/20 pt-6">
              <RadioGroupItem
                id="pm-paypal"
                value="paypal"
                class="w-5 h-5 rounded-full border border-white flex items-center justify-center shrink-0"
              >
                <RadioGroupIndicator class="w-2.5 h-2.5 rounded-full bg-white" />
              </RadioGroupItem>
              <label for="pm-paypal" class="cursor-pointer">
                <NuxtImg src="/img/paypal.svg" alt="PayPal" class="h-5 w-auto" />
              </label>
            </div>
          </RadioGroupRoot>

          <button
            type="button"
            :disabled="submitting"
            class="w-full py-4 border border-white font-sans text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-heading transition disabled:opacity-60 disabled:cursor-not-allowed"
            @click="handlePlaceOrder"
          >
            {{ submitting ? 'Placing order...' : 'Place Order' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

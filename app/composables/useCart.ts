export interface CartItem {
  product: ShopProduct
  quantity: number
}

const STORAGE_KEY = 'moon-cart'
let hydrated = false

export function useCart() {
  const cartItems = useState<CartItem[]>('cart-items', () => [])

  if (import.meta.client && !hydrated) {
    hydrated = true

    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        cartItems.value = JSON.parse(stored)
      } catch {
        cartItems.value = []
      }
    }

    watch(
      cartItems,
      (value) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
      },
      { deep: true }
    )
  }

  const cartCount = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0))
  const cartSubtotal = computed(() => cartItems.value.reduce((sum, item) => sum + item.product.priceValue * item.quantity, 0))

  function addToCart(product: ShopProduct, quantity = 1) {
    const existing = cartItems.value.find((item) => item.product.slug === product.slug)
    if (existing) {
      existing.quantity += quantity
    } else {
      cartItems.value.push({ product, quantity })
    }
  }

  function removeFromCart(slug: string) {
    cartItems.value = cartItems.value.filter((item) => item.product.slug !== slug)
  }

  function setQuantity(slug: string, quantity: number) {
    const item = cartItems.value.find((entry) => entry.product.slug === slug)
    if (item) {
      item.quantity = Math.max(1, quantity)
    }
  }

  function increaseQuantity(slug: string) {
    const item = cartItems.value.find((entry) => entry.product.slug === slug)
    if (item) {
      item.quantity += 1
    }
  }

  function decreaseQuantity(slug: string) {
    const item = cartItems.value.find((entry) => entry.product.slug === slug)
    if (item) {
      item.quantity = Math.max(1, item.quantity - 1)
    }
  }

  return {
    cartItems,
    cartCount,
    cartSubtotal,
    addToCart,
    removeFromCart,
    setQuantity,
    increaseQuantity,
    decreaseQuantity
  }
}

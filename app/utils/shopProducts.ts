export interface ShopProduct {
  slug: string
  name: string
  price: string
  priceValue: number
  originalPriceValue?: number
  desc: string
  image: string
  category: string
  tags: string[]
  color: string
  rating: number
  reviewCount: number
  inStock: boolean
}

export const shopProducts: ShopProduct[] = [
  { slug: 'small-ecru-ceramic-compote', name: 'Small Ecru Ceramic Compote', price: '$49.00', priceValue: 49, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.', image: '/img/products/product-4.jpg', category: 'Ceramic', tags: ['Ceramic', 'Decor Art'], color: 'Tan', rating: 4.5, reviewCount: 320, inStock: true },
  { slug: 'warrick-white-vase-14', name: 'Warrick White Vase 14', price: '$49.00', priceValue: 49, originalPriceValue: 65, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.', image: '/img/products/product-7.jpg', category: 'Decor Art', tags: ['Decor Art'], color: 'All', rating: 4, reviewCount: 145, inStock: true },
  { slug: 'porcelain-dinner-plate', name: 'Porcelain Dinner Plate', price: '$49.00', priceValue: 49, desc: 'Lorem ipsum dolor sit amet conse bolli tetur.', image: '/img/products/product-8.jpg', category: 'Dinnerware', tags: ['Dinnerware'], color: 'All', rating: 4, reviewCount: 340, inStock: true },
  { slug: 'warrick-white-vase-20', name: 'Warrick White Vase 20', price: '$68.00', priceValue: 68, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.', image: '/img/products/product-9.jpg', category: 'Decor Art', tags: ['Decor Art'], color: 'All', rating: 5, reviewCount: 89, inStock: true },
  { slug: 'rounded-dual-handled-vase', name: 'Rounded Dual Handled Vase', price: '$49.00', priceValue: 49, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.', image: '/img/products/product-10.jpg', category: 'Decor Art', tags: ['Decor Art'], color: 'All', rating: 3.5, reviewCount: 52, inStock: true },
  { slug: 'marin-white-dinner-plate', name: 'Marin White Dinner Plate', price: '$35.00', priceValue: 35, originalPriceValue: 50, desc: 'Lorem ipsum dolor sit amet conse.', image: '/img/products/product-11.jpg', category: 'Dinnerware', tags: ['Dinnerware', 'Gifts sets'], color: 'All', rating: 4, reviewCount: 1256, inStock: true },
  { slug: 'tall-cream-ceramic-vase', name: 'Tall Cream Ceramic Vase', price: '$79.00', priceValue: 79, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.', image: '/img/products/product-12.jpg', category: 'Ceramic', tags: ['Ceramic', 'Decor Art'], color: 'Tan', rating: 4.5, reviewCount: 210, inStock: true },
  { slug: 'luana-bowl', name: 'Luana Bowl', price: '$49.00', priceValue: 49, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.', image: '/img/products/product-13.jpg', category: 'Dinnerware', tags: ['Dinnerware'], color: 'Sage', rating: 4, reviewCount: 67, inStock: true },
  { slug: 'ophelia-matte-natural-vase', name: 'Ophelia Matte Natural Vase', price: '$149.00', priceValue: 149, desc: 'Lorem ipsum dolor sit amet conse bolli tetur.', image: '/img/products/product-14.jpg', category: 'Decor Art', tags: ['Decor Art', 'Gifts sets'], color: 'Tan', rating: 5, reviewCount: 412, inStock: true },
  { slug: 'porcelain-dinner-plate-3', name: 'Porcelain Dinner Plate', price: '$49.00', priceValue: 49, desc: 'Lorem ipsum dolor sit amet.', image: '/img/products/product-15.jpg', category: 'Dinnerware', tags: ['Dinnerware'], color: 'All', rating: 3.5, reviewCount: 28, inStock: false },
  { slug: 'luana-bowl-2', name: 'Luana Bowl', price: '$49.00', priceValue: 49, desc: 'Lorem ipsum dolor sit amet conse.', image: '/img/products/product-16.jpg', category: 'Dinnerware', tags: ['Dinnerware'], color: 'Purple', rating: 4, reviewCount: 95, inStock: true },
  { slug: 'porcelain-dinner-plate-2', name: 'Porcelain Dinner Plate', price: '$49.00', priceValue: 49, originalPriceValue: 60, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.', image: '/img/products/product-1.jpg', category: 'Dinnerware', tags: ['Dinnerware', 'Gifts sets'], color: 'Red', rating: 4.5, reviewCount: 178, inStock: true }
]

export function getProductBySlug(slug: string): ShopProduct | undefined {
  return shopProducts.find((product) => product.slug === slug)
}

export interface ColorSwatch {
  name: string
  hex: string
}

export const colorSwatches: ColorSwatch[] = [
  { name: 'Blue', hex: '#9DB8C2' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Orange', hex: '#C97B2E' },
  { name: 'Navy', hex: '#1B2A32' },
  { name: 'Pink', hex: '#E8C4B8' },
  { name: 'Sage', hex: '#A3AD8C' }
]

export const priceRangeMatchers: Record<string, (price: number) => boolean> = {
  '$0 - $10': (price) => price <= 10,
  '$10 - $50': (price) => price > 10 && price <= 50,
  '$50 - $100': (price) => price > 50 && price <= 100,
  '$100 - $200': (price) => price > 100 && price <= 200,
  '> $200': (price) => price > 200
}

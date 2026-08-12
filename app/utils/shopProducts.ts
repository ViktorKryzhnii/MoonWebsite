export interface ShopProduct {
  name: string
  price: string
  priceValue: number
  desc: string
  image: string
  category: string
  tags: string[]
  color: string
}

export const shopProducts: ShopProduct[] = [
  { name: 'SMALL ECRU CERAMIC COMPOTE', price: '$49.00', priceValue: 49, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.', image: '/img/products/product-4.jpg', category: 'Ceramic', tags: ['Ceramic', 'Decor Art'], color: 'Tan' },
  { name: 'PORCELAIN DINNER PLATE', price: '$49.00', priceValue: 49, desc: 'Lorem ipsum dolor sit amet conse bolli tetur.', image: '/img/products/product-8.jpg', category: 'Dinnerware', tags: ['Dinnerware'], color: 'All' },
  { name: 'WARRICK WHITE VASE 20', price: '$68.00', priceValue: 68, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.', image: '/img/products/product-9.jpg', category: 'Decor Art', tags: ['Decor Art'], color: 'All' },
  { name: 'MARIN WHITE DINNER PLATE', price: '$49.00', priceValue: 49, desc: 'Lorem ipsum dolor sit amet conse.', image: '/img/products/product-11.jpg', category: 'Dinnerware', tags: ['Dinnerware', 'Gifts sets'], color: 'All' },
  { name: 'TALL CREAM CERAMIC VASE', price: '$79.00', priceValue: 79, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.', image: '/img/products/product-12.jpg', category: 'Ceramic', tags: ['Ceramic', 'Decor Art'], color: 'Tan' },
  { name: 'LUANA BOWL', price: '$49.00', priceValue: 49, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.', image: '/img/products/product-13.jpg', category: 'Dinnerware', tags: ['Dinnerware'], color: 'Sage' },
  { name: 'OPHELIA MATTE NATURAL VASE', price: '$149.00', priceValue: 149, desc: 'Lorem ipsum dolor sit amet conse bolli tetur.', image: '/img/products/product-14.jpg', category: 'Decor Art', tags: ['Decor Art', 'Gifts sets'], color: 'Tan' },
  { name: 'LUANA BOWL', price: '$49.00', priceValue: 49, desc: 'Lorem ipsum dolor sit amet conse.', image: '/img/products/product-16.jpg', category: 'Dinnerware', tags: ['Dinnerware'], color: 'Purple' },
  { name: 'PORCELAIN DINNER PLATE', price: '$49.00', priceValue: 49, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.', image: '/img/products/product-1.jpg', category: 'Dinnerware', tags: ['Dinnerware', 'Gifts sets'], color: 'Red' }
]

export const priceRangeMatchers: Record<string, (price: number) => boolean> = {
  '$0 - $10': (price) => price <= 10,
  '$10 - $50': (price) => price > 10 && price <= 50,
  '$50 - $100': (price) => price > 50 && price <= 100,
  '$100 - $200': (price) => price > 100 && price <= 200,
  '> $200': (price) => price > 200
}

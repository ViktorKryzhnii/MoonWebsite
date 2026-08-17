export interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  author: string
  date: string
}

export interface FeaturedPost {
  title: string
  description: string
  image: string
}

export const featuredPost: FeaturedPost = {
  title: 'What\'s In A Garden Set?',
  description: 'Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing mollis sit aliquam sit',
  image: '/img/backgrounds/bg-3.jpg'
}

const postTemplates: Omit<BlogPost, 'id'>[] = [
  {
    title: 'How Can I Use Ceramic When I Decorate?',
    excerpt: 'Lorem dolor sit amet conse adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
    image: '/img/backgrounds/bg-6.jpg',
    author: 'Brian Clark',
    date: 'Jan 24, 2024'
  },
  {
    title: 'How to Style a Beautiful House',
    excerpt: 'Lorem dolor sit amet conse adipiscing eli mattis sit phasellus mollis sit aliquam. Vulputate aliquam nisi. dolor sit amet mattis sit phasellus',
    image: '/img/backgrounds/bg-8.jpg',
    author: 'Brian Clark',
    date: 'Jan 24, 2024'
  },
  {
    title: 'Chocolate Clementine Cake Recipe',
    excerpt: 'Vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus',
    image: '/img/backgrounds/bg-12.jpg',
    author: 'Brian Clark',
    date: 'Jan 24, 2024'
  },
  {
    title: 'The secrets to a Living Room set?',
    excerpt: 'Lorem dolor sit amet conse adipiscing eli mattis sit phasellus mollis',
    image: '/img/backgrounds/bg-15.jpg',
    author: 'Brian Clark',
    date: 'Jan 24, 2024'
  },
  {
    title: 'The secrets to a Living Room set?',
    excerpt: 'Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.',
    image: '/img/backgrounds/bg-16.jpg',
    author: 'Brian Clark',
    date: 'Jan 24, 2024'
  },
  {
    title: 'Holiday Food Traditions With Moon Family',
    excerpt: 'Lorem dolor sit amet conse adipiscing eli mattis sit phasellus mollis sit aliquam.',
    image: '/img/backgrounds/bg-17.jpg',
    author: 'Brian Clark',
    date: 'Jan 24, 2024'
  }
]

const PAGES = 4

export const blogPosts: BlogPost[] = Array.from({ length: PAGES }, (_, page) => page).flatMap((page) =>
  postTemplates.map((template, index) => ({
    ...template,
    id: `post-${page}-${index}`
  }))
)

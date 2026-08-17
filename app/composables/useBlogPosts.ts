const PAGE_SIZE = 6

export function useBlogPosts() {
  const currentPage = useState<number>('blog-current-page', () => 1)

  const totalPages = computed(() => Math.max(1, Math.ceil(blogPosts.length / PAGE_SIZE)))

  const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * PAGE_SIZE
    return blogPosts.slice(start, start + PAGE_SIZE)
  })

  return {
    currentPage,
    totalPages,
    paginatedPosts
  }
}

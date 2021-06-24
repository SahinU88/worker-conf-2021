import { ref, computed } from 'vue'

export default function useProductGridSearch(products) {
  const searchQuery = ref('')

  const productsMatchingSearchQuery = computed(() => {
    return products.value.filter(product => {
      return product.name
        .toLowerCase()
        .indexOf(searchQuery.value.toLowerCase()) != -1
    })
  })

  return {
    searchQuery,
    productsMatchingSearchQuery
  }
}

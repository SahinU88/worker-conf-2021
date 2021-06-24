<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="mb-4">
      <product-grid-search />
    </div>
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li
        v-for="product in products"
        :key="product.id"
        class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
      >
        <product-grid-item :product="product" />
      </li>
    </ul>
  </div>
</template>

<script>
import { provide, toRefs } from 'vue'
import ProductGridItem from '../ProductGridItem/ProductGridItem.vue'
import ProductGridSearch from '../ProductGridSearch/ProductGridSearch.vue'
import useProductGridSearch from './../../composables/useProductGridSearch'

export default {
  components: {
    ProductGridItem,
    ProductGridSearch
  },
  props: {
    products: {
      type: Array,
      required: false,
      default: () => {
        return []
      }
    }
  },
  setup(props) {
    const { products } = toRefs(props)
    const { searchQuery, productsMatchingSearchQuery } = useProductGridSearch(products)

    provide('searchQuery', searchQuery)

    return {
      products: productsMatchingSearchQuery,
      searchQuery,
    }
  },
}
</script>

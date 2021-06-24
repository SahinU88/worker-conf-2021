<template>
  <div class="flex flex-col space-y-8">
    <page-header />
    <product-grid :products="products" />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from './../components/PageHeader/PageHeader'
import PageFooter from './../components/PageFooter/PageFooter'
import ProductGrid from '../components/ProductGrid/ProductGrid.vue'

export default {
  name: 'Frontpage',
  components: {
    PageHeader,
    PageFooter,
    ProductGrid
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
}
</script>

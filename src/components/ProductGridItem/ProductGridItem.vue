<template>
  <div class="flex-1 flex flex-col p-8">
    <img
      class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
      :src="product.imageUrl"
      alt=""
    >
    <h3 class="mt-6 text-gray-900 text-sm font-medium">
      {{ product.name }}
    </h3>
    <dl class="mt-1 flex-grow flex flex-col justify-between">
      <dd class="text-gray-500 text-sm">
        {{ product.shortDescription }}
      </dd>
      <dd class="mt-3">
        <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">{{ product.price }}</span>
      </dd>
    </dl>
  </div>
  <div>
    <div class="-mt-px flex divide-x divide-gray-200">
      <div class="w-0 flex-1 flex">
        <a
          href="#"
          class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
        >
          <ShoppingCartIcon
            class="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
          <span class="ml-3">Buy</span>
        </a>
      </div>
      <div class="-ml-px w-0 flex-1 flex">
        <a
          href="#"
          class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
        >
          <HeartIcon
            class="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
          <span class="ml-3">Like</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ShoppingCartIcon, HeartIcon } from '@heroicons/vue/solid'

export default {
  components: {
    ShoppingCartIcon,
    HeartIcon,
  },
  props: {
    /**
     * Product object
     */
    product: {
      type: Object,
      required: true
    }
  },
}
</script>

<template>
  <div class="relative z-0 flex-1 px-2 flex items-center justify-center">
    <div class="w-full sm:max-w-xs">
      <div class="relative">
        <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <SearchIcon
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          id="search" 
          v-model="model"
          class="block w-full border border-gray rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-black focus:ring-black focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
          placeholder="Search"
          type="search"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
import { SearchIcon } from '@heroicons/vue/solid'

export default {
  components: {
    SearchIcon
  },
  setup() {
    const model = inject('searchQuery')

    return {
      model,
    }
  },
}
</script>

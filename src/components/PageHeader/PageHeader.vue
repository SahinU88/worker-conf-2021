<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="relative bg-white"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <img
              class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            >
          </a>
        </div>
        <div
          class="hidden md:flex space-x-10"
        >
          <a
            href="#"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Solutions
          </a>
          <a
            href="#"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Pricing
          </a>
          <a
            href="#"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Docs
          </a>
          <a
            href="#"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            More
          </a>
        </div>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <headless-dropdown />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadlessDropdown from '../HeadlessDropdown/HeadlessDropdown.vue'

export default {
  components: {
    HeadlessDropdown
  },
}
</script>

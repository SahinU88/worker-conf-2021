<template>
  <Menu
    as="div"
    class="relative inline-block text-left"
  >
    <MenuButton class="inline-flex justify-center ">
      A Dropdown
      <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" />
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems class="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
            >Account settings</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
            >Support</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
            >License</a>
          </MenuItem>
          <MenuItem
            v-slot="{ active }"
            disabled
          >
            <span class="text-gray-700 block px-4 py-2 text-sm">Invite a friend (coming soon!)</span>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'

export default {
  components: {
    ChevronDownIcon,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  setup() {
    return {
    }
  },
}
</script>

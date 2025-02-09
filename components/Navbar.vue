<template>
  <nav :class="['fixed top-0 w-full z-50', isScrolled ? 'bg-gray-800' : 'bg-transparent']">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="onToggleMenu"
          >
            <span class="sr-only">Open main menu</span>

            <!-- Icon when menu is closed. -->
            <svg
              class="block h-6 w-6"
              :class="[
                'h-6 w-6',
                {
                  block: !isOpenMenu,
                  hidden: isOpenMenu,
                },
              ]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <!-- Icon when menu is open. -->
            <svg
              :class="[
                'h-6 w-6',
                {
                  block: isOpenMenu,
                  hidden: !isOpenMenu,
                },
              ]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-end
          "
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <span
                class="
                  text-gray-300
                  hover:bg-gray-700 hover:text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                  cursor-pointer
                "
                @click="() => goTo('contact')"
                >Contact</span
              >

              <span
                class="
                  text-gray-300
                  hover:bg-gray-700 hover:text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                  cursor-pointer
                "
                @click="() => goTo('project')"
                >Projects</span
              >

              <span
                href="#"
                class="
                  text-gray-300
                  hover:bg-gray-700 hover:text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                  cursor-pointer
                "
                @click="() => goTo('timeline')"
                >Timeline</span
              >

              <span
                href="#"
                class="
                  text-gray-300
                  hover:bg-gray-700 hover:text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                  cursor-pointer
                "
                @click="() => goTo('skill')"
                >Skills</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="isOpenMenu" id="mobile-menu" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <span
          class="
            text-gray-300
            hover:bg-gray-700 hover:text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            cursor-pointer
          "
          @click="() => goTo('contact')"
          >Contact</span
        >

        <span
          class="
            text-gray-300
            hover:bg-gray-700 hover:text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            cursor-pointer
          "
          @click="() => goTo('project')"
          >Project</span
        >

        <span
          class="
            text-gray-300
            hover:bg-gray-700 hover:text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            cursor-pointer
          "
          @click="() => goTo('timeline')"
          >Timeline</span
        >

        <span
          class="
            text-gray-300
            hover:bg-gray-700 hover:text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            cursor-pointer
          "
          @click="() => goTo('skill')"
          >Skill</span
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpenMenu: false,
      isScrolled: false,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 200;
    },
    onToggleMenu() {
      this.isOpenMenu = !this.isOpenMenu
    },
    goTo(id) {
      this.isOpenMenu = false
      const element = document.getElementById(id)
      const offset = 64
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    },
  },
}
</script>

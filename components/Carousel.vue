<template>
  <div
    id="carousel"
    class="relative"
    data-twe-carousel-init
    data-twe-ride="carousel"
  >
    <!--Carousel indicators-->
    <div
      class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] flex list-none justify-center p-0"
      data-twe-carousel-indicators
    >
      <button
        v-for="(item, i) in list"
        :key="i"
        type="button"
        data-twe-target="#carousel"
        :data-twe-slide-to="i"
        :data-twe-carousel-active="i === 0"
        :class="['mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none', `bg-${color}` ]"
        :aria-current="i === 0"
        :aria-label="`Slide ${i}`"
      ></button>
    </div>

    <!--Carousel items-->
    <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
      <div
        v-for="(item, i) in list"
        :key="i"
        :class="['relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none', { 'hidden': i !== 0 }]"
        :data-twe-carousel-active="i === 0"
        data-twe-carousel-item
        style="backface-visibility: hidden">
        <img
          :src="item.image"
          class="block w-full"
        />
      </div>
    </div>

    <!--Carousel controls - prev item-->
    <button
      :class="['absolute bottom-0 left-0 top-0 z-[1] flex w-[5%] items-center justify-center border-0 bg-none p-0 text-center opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none', `text-${color} hover:text-${color} focus:text-${color}`]"
      type="button"
      data-twe-target="#carousel"
      data-twe-slide="prev">
      <span class="inline-block h-8 w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </span>
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Previous</span
      >
    </button>
    <!-- Carousel controls - next item-->
    <button
      :class="['absolute bottom-0 right-0 top-0 z-[1] flex w-[5%] items-center justify-center border-0 bg-none p-0 text-center opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none', `text-${color} hover:text-${color} focus:text-${color}`]"
      type="button"
      data-twe-target="#carousel"
      data-twe-slide="next">
      <span class="inline-block h-8 w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </span>
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Next</span
      >
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    color: {
      type: String,
      default: () => {
        return 'white'
      },
    },
    list: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {}
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.carousel {
}
</style>

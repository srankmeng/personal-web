<template>
  <div
    id="carousel"
    class="carousel slide relative carousel-dark"
    data-bs-ride="carousel"
  >
    <div
      class="
        carousel-indicators
        absolute
        right-0
        bottom-0
        left-0
        flex
        justify-center
        p-0
        mb-4
      "
    >
      <button
        v-for="(item, i) in list"
        :key="i"
        type="button"
        data-bs-target="#carousel"
        :data-bs-slide-to="`${i}`"
        :class="i === 0 ? 'active' : ''"
        :aria-current="i === 0 ? 'active' : ''"
      ></button>
    </div>
    <div class="carousel-inner relative w-full overflow-hidden">
      <div
        v-for="(item, i) in list"
        :key="i"
        :class="[
          'carousel-item relative float-left w-full',
          {
            active: i === 0,
          },
        ]"
      >
        <img :src="item.image" class="block w-full" />
      </div>
    </div>
    <button
      class="
        carousel-control-prev
        absolute
        top-0
        bottom-0
        flex
        items-center
        justify-center
        p-0
        text-center
        border-0
        hover:outline-none hover:no-underline
        focus:outline-none focus:no-underline
        left-0
      "
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="
        carousel-control-next
        absolute
        top-0
        bottom-0
        flex
        items-center
        justify-center
        p-0
        text-center
        border-0
        hover:outline-none hover:no-underline
        focus:outline-none focus:no-underline
        right-0
      "
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
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

<template>
  <svg
    :class="['more-icon', className]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
</template>

<script>
export default {
  name: 'More',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
}
</script>

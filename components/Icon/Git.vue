<template>
  <svg
    :class="['git-icon', className]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
    <line x1="6" y1="9" x2="6" y2="21" />
  </svg>
</template>

<script>
export default {
  name: 'Git',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <svg
    :class="['download-icon', className]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="8 17 12 21 16 17" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
  </svg>
</template>

<script>
export default {
  name: 'Download',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
}
</script>

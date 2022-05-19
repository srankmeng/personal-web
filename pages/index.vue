<template>
  <div class="bg-gray-100 text-gray-600 relative">
    <Navbar />
    <HeadLine />
    <Greeting />
    <Portfolio />
    <Timeline />
    <Skill />
    <Footer />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'IndexPage',

  data() {
    return {}
  },

  mounted() {
    AOS.init()
  },

  methods: {},
}
</script>

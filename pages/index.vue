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
import { initTWE, Modal, Ripple } from "tw-elements";

import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'IndexPage',

  data() {
    return {}
  },

  mounted() {
    AOS.init()
    initTWE({ Modal, Ripple }, { allowReinits: true });
  },

  methods: {},
}
</script>

<template>
  <header
    id="contact"
    class="header h-screen bg-gray-800 relative overflow-hidden"
  >
    <vue-particles
      color="#ccc"
      :particleOpacity="0.4"
      :particlesNumber="100"
      linesColor="#dedede"
      :lineLinked="false"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="absolute inset-0"
    />
    <BatteryCharge
      :className="'h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 text-gray-600 absolute left-8 sm:left-24 -bottom-10 transform -rotate-12'"
    />
    <Chrome
      :className="'h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 text-gray-600 absolute -left-16 -top-8'"
    />
    <Wifi
      :className="'h-16 w-16 sm:h-24 sm:w-24 md:h-40 md:w-40 text-gray-600 absolute -right-2 sm:-right-8 bottom-1 transform  -rotate-12'"
    />
    <Git
      :className="'h-10 w-10 sm:h-16 sm:w-16 md:h-24 md:w-24 text-gray-600 absolute top-16 right-16 transform  -rotate-45'"
    />
    <Computer
      :className="'h-20 w-20 sm:h-24 sm:w-24 md:h-40 md:w-40 text-gray-600 absolute inset-y-1/3 inset-x-2/3 transform  rotate-45'"
    />
    <Disc
      :className="'h-16 w-16 sm:h-20 sm:w-20 md:h-32 md:w-32 text-gray-600 absolute inset-x-1/4 sm:inset-x-1/3 inset-y-1/3 transform  -rotate-12 -translate-y-1/2'"
    />

    <!-- information -->
    <div
      class="
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
        text-white text-center
      "
    >
      <div class="relative w-20 h-20 mx-auto">
        <img
          class="rounded"
          src="~/assets/avatar.png"
          alt="Jaturong Duangchaiyusuk"
        />
        <span
          class="
            absolute
            top-0
            right-0
            transform
            -translate-y-1/2
            translate-x-1/2
            w-8
            h-8
            bg-green-400
            border-4 border-gray-800
            rounded-full
          "
        >
          <Smile :className="'h-6 w-6 text-white'" />
        </span>
      </div>
      <div class="text-xl sm:text-3xl font-semibold m-6">
        Jaturong Duangchaiyusuk
      </div>
      <div class="text-sm sm:text-xl">Web Developer, Thailand</div>
      <div class="m-4 flex justify-center">
        <a href="mailto:jaturong.duang@gmail.com" target="_blank"
          ><Mail :className="'h-5 w-5 sm:h-6 sm:w-6 text-white m-2'"
        /></a>
        <a
          href="https://www.linkedin.com/in/jaturong-duangchaiyusuk-7a83b6133/"
          target="_blank"
        >
          <Linkedin :className="'h-5 w-5 sm:h-6 sm:w-6 text-white m-2'"
        /></a>
        <a href="https://github.com/srankmeng" target="_blank">
          <Github :className="'h-5 w-5 sm:h-6 sm:w-6 text-white m-2'"
        /></a>
        <a href="https://www.instagram.com/srank" target="_blank">
          <Instagram :className="'h-5 w-5 sm:h-6 sm:w-6 text-white m-2'"
        /></a>
        <a
          href="/personal-web/Jaturong_Duangchaiyusuk_CV.pdf"
          download="Jaturong_Duangchaiyusuk_CV.pdf"
        >
          <Download :className="'h-5 w-5 sm:h-6 sm:w-6 text-white m-2'" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import BatteryCharge from '@/components/Icon/BatteryCharge'
import Chrome from '@/components/Icon/Chrome'
import Computer from '@/components/Icon/Computer'
import Disc from '@/components/Icon/Disc'
import Download from '@/components/Icon/Download'
import Git from '@/components/Icon/Git'
import Github from '@/components/Icon/Github'
import Instagram from '@/components/Icon/Instagram'
import Linkedin from '@/components/Icon/Linkedin'
import Mail from '@/components/Icon/Mail'
import Smile from '@/components/Icon/Smile'
import Wifi from '@/components/Icon/Wifi'

export default {
  name: 'HeadLine',
  components: {
    BatteryCharge,
    Chrome,
    Computer,
    Download,
    Disc,
    Git,
    Github,
    Instagram,
    Linkedin,
    Mail,
    Smile,
    Wifi,
  },
  data() {
    return {}
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.header {
}
</style>

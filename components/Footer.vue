<template>
  <div class="footer bg-gray-900">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
      <div
        class="
          flex-1 flex
          items-center
          justify-between
          flex-col
          sm:flex-row
          gap-4
        "
      >
        <div class="text-xs">© 2022-2024 Jaturong Duangchaiyusuk</div>
        <div class="flex">
          <a href="mailto:jaturong.duang@gmail.com" target="_blank"
            ><Mail :className="'h-4 w-4 m-2'"
          /></a>
          <a
            href="https://www.linkedin.com/in/jaturong-duangchaiyusuk-7a83b6133/"
            target="_blank"
          >
            <Linkedin :className="'h-4 w-4 m-2'"
          /></a>
          <a href="https://github.com/srankmeng" target="_blank">
            <Github :className="'h-4 w-4 m-2'"
          /></a>
          <a href="https://www.instagram.com/srank" target="_blank">
            <Instagram :className="'h-4 w-4 m-2'"
          /></a>
          <a
            href="/personal-web/Jaturong_Duangchaiyusuk_CV.pdf"
            download="Jaturong_Duangchaiyusuk_CV.pdf"
          >
            <Download :className="'h-4 w-4 m-2'" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Download from '@/components/Icon/Download'
import Github from '@/components/Icon/Github'
import Instagram from '@/components/Icon/Instagram'
import Linkedin from '@/components/Icon/Linkedin'
import Mail from '@/components/Icon/Mail'
export default {
  name: 'Footer',
  components: {
    Download,
    Github,
    Instagram,
    Linkedin,
    Mail,
  },
  data() {
    return {}
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.footer {
}
</style>

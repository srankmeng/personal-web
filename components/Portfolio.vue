<template>
  <div id="portfolio" class="portfolio relative bg-gray-800 py-8 px-4">
    <div class="container mx-auto">
      <p class="font-bold text-xl sm:text-3xl text-center text-white mb-4">
        Portfolio
      </p>

      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4">
          <div
            class="sm:flex items-center sm:space-x-8 my-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              class="
                w-12
                h-12
                sm:w-16 sm:h-16
                rounded-full
                my-4
                mx-auto
                sm:mx-auto
                bg-white
              "
              src="~/assets/portfolio/scgid.png"
              alt="jaturong portfolio, scgid"
            />
            <div class="text-sm sm:text-base space-y-1 font-medium">
              <div class="text-white">
                <a href="https://www.scg-id.com" target="_blank"
                  >SCG ID
                  <ExternalLink
                    :className="'h-4 w-4 sm:h-4 sm:w-4 text-blue-400 inline-block mb-1'"
                /></a>
              </div>
              <div class="text-sm sm:text-base text-gray-400">
                The website of SCG company for centralizes customer of their
                affiliates. I contributed to frontend web, backend api and cloud
                infrastructure include back-office site also.
              </div>
            </div>
          </div>

          <hr class="border-transparent" />

          <div
            class="sm:flex items-center sm:space-x-8 my-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              class="
                w-12
                h-12
                sm:w-16 sm:h-16
                rounded-full
                my-4
                mx-auto
                sm:mx-auto
                bg-white
              "
              src="~/assets/portfolio/aday.png"
              alt="jaturong portfolio, aday"
            />
            <div class="text-sm sm:text-base space-y-1 font-medium">
              <div class="text-white">
                <a href="https://app.aday.works/" target="_blank"
                  >ADAY
                  <ExternalLink
                    :className="'h-4 w-4 sm:h-4 sm:w-4 text-blue-400 inline-block mb-1'"
                /></a>
              </div>
              <div class="text-sm sm:text-base text-gray-400">
                The project management website include time-booking and daily
                logging features, Able to generate report for visualize estime
                and actual remain man-days. I contributed to frontend web,
                backend api and cloud infrastructure. The website require
                username so you can see the web on preview modal.
              </div>
              <div
                class="text-sm sm:text-base text-blue-400 cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#preview-modal"
              >
                Preview
              </div>
            </div>
          </div>

          <hr class="border-transparent" />

          <div
            class="sm:flex items-center sm:space-x-8 my-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              class="
                w-12
                h-12
                sm:w-16 sm:h-16
                rounded-full
                my-4
                mx-auto
                sm:mx-auto
                bg-white
              "
              src="~/assets/portfolio/ktj.jpeg"
              alt="jaturong portfolio, ktj"
            />
            <div class="text-sm sm:text-base space-y-1 font-medium">
              <div class="text-white">
                <a href="http://kasettunjai.com/" target="_blank"
                  >KASETTUNJAI
                  <ExternalLink
                    :className="'h-4 w-4 sm:h-4 sm:w-4 text-blue-400 inline-block mb-1'"
                /></a>
              </div>
              <div class="text-sm sm:text-base text-gray-400">
                Mobile agriculture application. The platform have client app,
                seller app and back-office website. I contributed to the
                back-office website and backend api and cloud infrastructure.
                For mobile application, I lead and manage the team to launch on
                the store.
              </div>
            </div>
          </div>

          <hr class="border-transparent" />

          <div
            class="sm:flex items-center sm:space-x-8 my-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div
              class="
                w-12
                h-12
                sm:w-16 sm:h-16
                rounded-full
                my-4
                mx-auto
                sm:mx-auto
                bg-white
              "
            >
              <More :className="'w-12 h-12 sm:w-16 sm:h-16 text-gray-600'" />
            </div>
            <div class="text-sm sm:text-base space-y-1 font-medium">
              <div class="text-white">
                <a href="http://kasettunjai.com/" target="_blank"
                  >Internal & Back-office web application
                </a>
              </div>
              <div class="text-sm sm:text-base text-gray-400">
                Most of the projects that I contributed were the back-office web
                application to use with internal companies. My responsibility
                was maintenance exist system and develop new features on
                frontend and backend api.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      id="preview-modal"
      class="
        modal
        fade
        fixed
        top-0
        left-0
        hidden
        w-full
        h-full
        outline-none
        overflow-x-hidden overflow-y-auto
      "
      tabindex="-1"
      aria-modal="true"
      role="dialog"
    >
      <div
        class="
          modal-dialog modal-lg modal-dialog-centered
          relative
          w-auto
          pointer-events-none
        "
      >
        <div
          class="
            modal-content
            border-none
            shadow-lg
            relative
            flex flex-col
            w-full
            pointer-events-auto
            bg-white bg-clip-padding
            rounded-md
            outline-none
            text-current
          "
        >
          <div class="modal-body relative">
            <Carousel :list="previewList.aday" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExternalLink from '@/components/Icon/ExternalLink'
import More from '@/components/Icon/More'
import Carousel from '@/components/Carousel'
export default {
  name: 'Portfolio',
  components: {
    Carousel,
    ExternalLink,
    More,
  },
  data() {
    return {
      previewList: {
        aday: [
          {
            image: require(`~/assets/portfolio/aday-preview-1.png`),
          },
          {
            image: require(`~/assets/portfolio/aday-preview-2.png`),
          },
          {
            image: require(`~/assets/portfolio/aday-preview-3.png`),
          },
          {
            image: require(`~/assets/portfolio/aday-preview-4.png`),
          },
          {
            image: require(`~/assets/portfolio/aday-preview-5.png`),
          },
          {
            image: require(`~/assets/portfolio/aday-preview-6.png`),
          },
        ],
      },
    }
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.greeting {
}
</style>

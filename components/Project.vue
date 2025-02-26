<template>
  <div id="project" class="project relative bg-gray-800 py-8 px-4">
    <div class="container mx-auto">
      <p class="font-bold text-xl sm:text-3xl text-center text-white mb-4">
        Projects
      </p>

      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-7 sm:col-start-2 sm:col-end-6">
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
              src="~/assets/project/sawasdeepass.svg"
              alt="jaturong project, sawasdeepass"
            />
            <div class="text-sm sm:text-base space-y-1 font-medium">
              <div class="text-white">
                <a href="https://www.sawasdeepass.com/" target="_blank"
                  >Sawasdee pass
                  <ExternalLink
                    :className="'h-4 w-4 sm:h-4 sm:w-4 text-blue-400 inline-block mb-1'"
                /></a>
              </div>
              <div class="text-sm sm:text-base text-gray-400">
                The Sawasdee Pass website facilitates booking services at airports, including butler and buggy services. It handles both client bookings and back-office operations, such as service availability, scheduling, and pricing.
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
              <Chart :className="'w-12 h-12 sm:w-16 sm:h-16 text-gray-600 p-2'" />
            </div>

            <div class="text-sm sm:text-base space-y-1 font-medium">
              <div class="text-white">
                Logs & profiler dashboard
              </div>
              <div class="text-sm sm:text-base text-gray-400">
                Ministry of Interior project, the dashboard is used for monitor internal system. Using Prometheus for metrics, Loki for logging, Opentelemetry for collector the data and Grafana for visualization. Setup with kubernetes and helm chart.
              </div>
              <div
                class="text-sm sm:text-base text-blue-400 cursor-pointer"
                data-twe-toggle="modal"
                data-twe-target="#preview-modal"
                @click="setCurrentPreviewList('moi', 'white')"
              >
                Preview Screen
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
              src="~/assets/project/scgid.png"
              alt="jaturong project, scgid"
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
                The website of SCG company centralizes customer interactions for their affiliates. I contributed to frontend development, backend API integration, cloud infrastructure, and back-office site management.
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
              src="~/assets/project/aday.png"
              alt="jaturong project, aday"
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
                logging features, Able to generate report for visualize estimated
                and actual remain man-days. I contributed to frontend web,
                backend api and cloud infrastructure. The website require
                username so you can see the web on preview modal.
              </div>
              <div
                class="text-sm sm:text-base text-blue-400 cursor-pointer"
                data-twe-toggle="modal"
                data-twe-target="#preview-modal"
                @click="setCurrentPreviewList('aday', 'black')"
              >
                Preview Screen
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
              src="~/assets/project/ktj.jpeg"
              alt="jaturong project, ktj"
            />
            <div class="text-sm sm:text-base space-y-1 font-medium">
              <div class="text-white">
                KASETTUNJAI
                <div class="inline-block my-1">
                  <a
                    href="https://apps.apple.com/th/app/%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%95%E0%B8%A3%E0%B8%97-%E0%B8%99%E0%B9%83%E0%B8%88-%E0%B8%99-%E0%B8%81%E0%B8%9A-%E0%B8%99/id1623517440"
                    target="_blank"
                  >
                    <img
                      class="inline-block mr-1"
                      style="width: 70px"
                      src="~/assets/apple_store.png"
                      alt="apple store"
                  /></a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.kasettunjai.pilot"
                    target="_blank"
                  >
                    <img
                      class="inline-block"
                      style="width: 70px"
                      src="~/assets/play_store.png"
                      alt="apple store"
                  /></a>
                </div>
              </div>
              <div class="text-sm sm:text-base text-gray-400">
                Mobile agriculture application. The platform have client app,
                seller app and back-office website. I contributed to the
                back-office website and backend api and cloud infrastructure.
                For mobile application, I led and manage the team to launch on
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
              src="~/assets/project/kube.png"
              alt="jaturong project, knowledge sharing"
            />
            <div class="text-sm sm:text-base space-y-1 font-medium">
              <div class="text-white">
                Knowledge sharing
              </div>
              <div class="text-sm sm:text-base text-gray-400">
                Sharing container base technology with docker & kubernetes, including containerize the application, setup the kubernetes cluster, helm chart, observablity and CI/CD pipeline.
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
      class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      data-twe-modal-init
      tabindex="-1"
      aria-hidden="true"
      role="dialog"
    >
      <div
        data-twe-modal-dialog-ref
        class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[1000px] p-4"
      >
        <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
          <div class="relative flex-auto p-1" data-twe-modal-body-ref>
            <Carousel :list="currentPreviewList.length ? currentPreviewList : previewList.moi" :color="currentPreviewColor" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import Chart from '@/components/Icon/Chart'
import ExternalLink from '@/components/Icon/ExternalLink'
import More from '@/components/Icon/More'

export default {
  name: 'Project',
  components: {
    Carousel,
    Chart,
    ExternalLink,
    More,
  },
  data() {
    return {
      currentPreviewList: [],
      currentPreviewColor: 'white',
      previewList: {
        moi: [
          {
            image: require(`~/assets/project/moi-preview-1.png`),
          },
          {
            image: require(`~/assets/project/moi-preview-2.png`),
          },
          {
            image: require(`~/assets/project/moi-preview-3.png`),
          },
        ],
        aday: [
          {
            image: require(`~/assets/project/aday-preview-1.png`),
          },
          {
            image: require(`~/assets/project/aday-preview-2.png`),
          },
          {
            image: require(`~/assets/project/aday-preview-3.png`),
          },
        ],
      },
    }
  },

  methods: {
    setCurrentPreviewList(subject, color) {
      this.currentPreviewList = this.previewList[subject]
      this.currentPreviewColor = color
    },
  },
}
</script>

<style lang="scss" scoped>

</style>

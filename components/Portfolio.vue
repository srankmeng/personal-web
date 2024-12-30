<template>
  <div id="project" class="portfolio relative bg-gray-800 py-8 px-4">
    <div class="container mx-auto">
      <p class="font-bold text-xl sm:text-3xl text-center text-white mb-4">
        Projects
      </p>

      <!-- Button trigger modal -->
<button
  type="button"
  class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
  data-twe-toggle="modal"
  data-twe-target="#exampleModal"
  data-twe-ripple-init
  data-twe-ripple-color="light">
  Launch demo modal
</button>

<!-- Modal -->
<div
  data-twe-modal-init
  class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div
    data-twe-modal-dialog-ref
    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
    <div
      class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
      <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
        <h5
          class="text-xl font-medium leading-normal text-surface dark:text-white"
          id="exampleModalLabel">
          Modal title
        </h5>
        <button
          type="button"
          class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
          data-twe-modal-dismiss
          aria-label="Close">
          <span class="[&>svg]:h-6 [&>svg]:w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
      </div>

      <!-- Modal body -->
      <div class="relative flex-auto p-4" data-twe-modal-body-ref>
        Modal body text goes here.
      </div>

      <!-- Modal footer -->
      <div
        class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
        <button
          type="button"
          class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
          data-twe-modal-dismiss
          data-twe-ripple-init
          data-twe-ripple-color="light">
          Close
        </button>
        <button
          type="button"
          class="ms-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          data-twe-ripple-init
          data-twe-ripple-color="light">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
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
                data-twe-toggle="modal"
                data-twe-target="#preview-modal"
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
      data-twe-modal-init
      data-twe-backdrop="static"
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
      aria-hidden="true"
      role="dialog"
    >
      <div data-twe-modal-dialog-ref>
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

</style>

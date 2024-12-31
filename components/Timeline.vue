<template>
  <div id="timeline" class="timeline py-8 px-4">
    <div class="container mx-auto">
      <p class="font-bold text-xl sm:text-3xl text-center text-gray-900 mb-4">
        Experience Timeline
      </p>

      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-7 sm:col-start-2 sm:col-end-6">
          <ol class="relative border-l-0 sm:border-l border-gray-200">
            <li class="mb-10 ml-0 sm:ml-10 timeline-item">
              <span
                class="
                  flex
                  absolute
                  -left-3
                  justify-center
                  items-center
                  w-6
                  h-6
                  bg-blue-200
                  rounded-full
                  ring-4 ring-white
                  transition-all
                  duration-300
                  hidden sm:flex
                  icon-wrapper
                "
              >
                <svg
                  class="w-3 h-3 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              <h3
                class="
                  flex
                  items-center
                  mb-1
                  text-sm
                  sm:text-lg
                  font-semibold
                  text-gray-900
                "
              >
                Full Stack Developer, Devops, Consultant:
                <span class="text-gray-500"> Siam Chamnankit</span>
                <span
                  class="
                    bg-gray-200
                    text-gray-500 text-xs
                    sm:text-sm
                    font-medium
                    mr-2
                    px-2.5
                    py-0.5
                    rounded
                    ml-3
                  "
                  >Bangkok, Thailand</span
                >
              </h3>
              <time
                class="
                  block
                  mb-2
                  text-xs
                  sm:text-sm
                  font-normal
                  leading-none
                  text-gray-400
                "
                >Feb 2023 - Present
              </time>
              <ul
                class="list-disc ml-4 mb-4 text-sm sm:text-base text-gray-500"
              >
                <li>Collaborated with clients to understand business requirements, and conducted needs assessments
                </li>
                <li>
                  Creating a pipeline for automated testing and delivery projects
                </li>
                <li>
                  Sharing knowledge & training workshops with the internal team or public and providing technical. For example: git strategy, containerization application, automated testing and CI/CD pipeline.
                </li>
                <li>
                  Creating the dashboard for monitoring system. For example: CPU, Memory, Disk, Network, and etc. Using tool like prometheus, opentelemetry, jaeger, tempo, loki and grafana.
                </li>
                <li>
                  Provided ongoing technical support, troubleshooting, and enhancements for existing applications
                </li>
              </ul>
            </li>

            <li class="mb-10 ml-0 sm:ml-10 timeline-item">
              <span
                class="
                  flex
                  absolute
                  -left-3
                  justify-center
                  items-center
                  w-6
                  h-6
                  bg-blue-200
                  rounded-full
                  ring-4 ring-white
                  transition-all
                  duration-300
                  hidden sm:flex
                  icon-wrapper
                "
              >
                <svg
                  class="w-3 h-3 hover:w-12 hover:h-12 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              <h3
                class="
                  flex
                  items-center
                  mb-1
                  text-sm
                  sm:text-lg
                  font-semibold
                  text-gray-900
                "
              >
                Team Lead Developer:
                <span class="text-gray-500">Redlamp Co., Ltd.</span>
                <span
                  class="
                    bg-gray-200
                    text-gray-500 text-xs
                    sm:text-sm
                    font-medium
                    mr-2
                    px-2.5
                    py-0.5
                    rounded
                    ml-3
                  "
                  >Bangkok, Thailand</span
                >
              </h3>
              <time
                class="
                  block
                  mb-2
                  text-xs
                  sm:text-sm
                  font-normal
                  leading-none
                  text-gray-400
                "
                >May 2021 - Jul 2022
                <!-- <span
                  class="
                    bg-blue-100
                    text-blue-800 text-xs
                    sm:text-sm
                    font-medium
                    px-2.5
                    py-0.5
                    rounded
                  "
                  >Present</span
                > -->
              </time>
              <ul
                class="list-disc ml-4 mb-4 text-sm sm:text-base text-gray-500"
              >
                <li>Communicate with any team for clarified the requirement</li>
                <li>
                  Planning & clear issue block for delivering the project on
                  time.
                </li>
                <li>Manage source code & versioning</li>
                <li>Review code & coaching team member</li>
                <li>Use Nuxt js, Nest js for web development</li>
                <li>
                  Use Docker and AWS for deployment including setup Github
                  action for CI/CD part
                </li>
                <li>Use Cypress for E2E to automate part</li>
                <li>
                  Delivery website
                  <a
                    class="text-blue-400"
                    href="https://app.aday.works"
                    target="_blank"
                    >https://app.aday.works</a
                  >
                  that including a back-office site
                </li>
                <li>
                  Implement API of the mobile application both of
                  <a
                    class="text-blue-400"
                    href="https://apps.apple.com/th/app/%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%95%E0%B8%A3%E0%B8%97-%E0%B8%99%E0%B9%83%E0%B8%88-%E0%B8%99-%E0%B8%81%E0%B8%9A-%E0%B8%99/id1623517440"
                    target="_blank"
                    >IOS</a
                  >
                  and
                  <a
                    class="text-blue-400"
                    href="https://play.google.com/store/apps/details?id=com.kasettunjai.pilot"
                    target="_blank"
                    >Android</a
                  >
                </li>
              </ul>
            </li>

            <li class="mb-10 ml-0 sm:ml-10 timeline-item">
              <span
                class="
                  flex
                  absolute
                  -left-3
                  justify-center
                  items-center
                  w-6
                  h-6
                  bg-blue-200
                  rounded-full
                  ring-4 ring-white
                  transition-all
                  duration-300
                  hidden sm:flex
                  icon-wrapper
                "
              >
                <svg
                  class="w-3 h-3 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              <h3
                class="
                  flex
                  items-center
                  mb-1
                  text-sm
                  sm:text-lg
                  font-semibold
                  text-gray-900
                "
              >
                Team Lead Developer:
                <span class="text-gray-500">SCG</span>
                <span
                  class="
                    bg-gray-200
                    text-gray-500 text-xs
                    sm:text-sm
                    font-medium
                    mr-2
                    px-2.5
                    py-0.5
                    rounded
                    ml-3
                  "
                  >Bangkok, Thailand</span
                >
              </h3>
              <time
                class="
                  block
                  mb-2
                  text-xs
                  sm:text-sm
                  font-normal
                  leading-none
                  text-gray-400
                "
                >Feb 2020 - Apr 2021
              </time>
              <ul
                class="list-disc ml-4 mb-4 text-sm sm:text-base text-gray-500"
              >
                <li>Communicate with any team for clarified the requirement</li>
                <li>
                  Planning & clear issue block for delivering the project on
                  time.
                </li>
                <li>Manage source code & versioning</li>
                <li>Review code & coaching team member</li>
                <li>Use Nuxt js, Flask for web development</li>
                <li>
                  Use Docker and AWS for deployment including setup Github
                  action for CI/CD part
                </li>
                <li>
                  Delivery website
                  <a
                    class="text-blue-400"
                    href="https://www.scg-id.com"
                    target="_blank"
                    >https://www.scg-id.com</a
                  >
                  that including a back-office site
                </li>
              </ul>
            </li>

            <li class="mb-10 ml-0 sm:ml-10 timeline-item">
              <span
                class="
                  flex
                  absolute
                  -left-3
                  justify-center
                  items-center
                  w-6
                  h-6
                  bg-blue-200
                  rounded-full
                  ring-4 ring-white
                  transition-all
                  duration-300
                  hidden sm:flex
                  icon-wrapper
                "
              >
                <svg
                  class="w-3 h-3 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              <h3
                class="
                  flex
                  items-center
                  mb-1
                  text-sm
                  sm:text-lg
                  font-semibold
                  text-gray-900
                "
              >
                Frontend Team Lead & Senior Developer:
                <span class="text-gray-500">Lqid 360</span>
                <span
                  class="
                    bg-gray-200
                    text-gray-500 text-xs
                    sm:text-sm
                    font-medium
                    mr-2
                    px-2.5
                    py-0.5
                    rounded
                    ml-3
                  "
                  >Bangkok, Thailand</span
                >
              </h3>
              <time
                class="
                  block
                  mb-2
                  text-xs
                  sm:text-sm
                  font-normal
                  leading-none
                  text-gray-400
                "
                >Jan 2017 - Dec 2019
              </time>
              <ul
                class="list-disc ml-4 mb-4 text-sm sm:text-base text-gray-500"
              >
                <li>Communicate with any team for clarified the requirement</li>
                <li>
                  Planning & resource management for the delivery projects on
                  time
                </li>
                <li>Manage source code & versioning</li>
                <li>Review code & coaching team member</li>
                <li>Use React, Redux for frontend web development</li>
                <li>Motivation team members and made teamwork</li>
                <li>Use jest for unit test</li>
                <li>Discussing with backend team for design response api</li>
                <li>Delivery KYC's back-office</li>
                <li>
                  Delivery chat system use in back-office with WebRTC technology
                </li>
                <li>Delivery monitoring system display with chart</li>
              </ul>
            </li>

            <li class="mb-10 ml-0 sm:ml-10 timeline-item">
              <span
                class="
                  flex
                  absolute
                  -left-3
                  justify-center
                  items-center
                  w-6
                  h-6
                  bg-blue-200
                  rounded-full
                  ring-4 ring-white
                  transition-all
                  duration-300
                  hidden sm:flex
                  icon-wrapper
                "
              >
                <svg
                  class="w-3 h-3 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              <h3
                class="
                  flex
                  items-center
                  mb-1
                  text-sm
                  sm:text-lg
                  font-semibold
                  text-gray-900
                "
              >
                Frontend Developer
                <span
                  class="
                    bg-gray-200
                    text-gray-500 text-xs
                    sm:text-sm
                    font-medium
                    mr-2
                    px-2.5
                    py-0.5
                    rounded
                    ml-3
                  "
                  >Bangkok, Thailand</span
                >
              </h3>
              <time
                class="
                  block
                  mb-2
                  text-xs
                  sm:text-sm
                  font-normal
                  leading-none
                  text-gray-400
                "
                >May 2012 - Dec 2016
              </time>
              <ul
                class="list-disc ml-4 mb-4 text-sm sm:text-base text-gray-500"
              >
                <li>Created HTML & CSS related to designs</li>
                <li>Use Angularjs v1 to manage data on the frontend side</li>
                <li>Integrate API and display data</li>
                <li>Delivery BigC check QC back-office</li>
                <li>Delivery E-commerce web</li>
                <li>Support team & issues</li>
              </ul>
            </li>

            <li class="mb-10 ml-0 sm:ml-10 timeline-item">
              <span
                class="
                  flex
                  absolute
                  -left-3
                  justify-center
                  items-center
                  w-6
                  h-6
                  bg-blue-200
                  rounded-full
                  ring-4 ring-white
                  transition-all
                  duration-300
                  hidden sm:flex
                  icon-wrapper
                "
              >
                <svg
                  class="w-3 h-3 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </span>
              <h3
                class="
                  flex
                  items-center
                  mb-1
                  text-sm
                  sm:text-lg
                  font-semibold
                  text-gray-900
                "
              >
                King Mongkut's Institute of Technology Ladkrabang (KMITL)
                <span
                  class="
                    bg-gray-200
                    text-gray-500 text-xs
                    sm:text-sm
                    font-medium
                    mr-2
                    px-2.5
                    py-0.5
                    rounded
                    ml-3
                  "
                  >Bangkok, Thailand</span
                >
              </h3>
              <time
                class="
                  block
                  mb-2
                  text-xs
                  sm:text-sm
                  font-normal
                  leading-none
                  text-gray-400
                "
                >May 2008 - Apr 2012
              </time>
              <ul
                class="list-disc ml-4 mb-4 text-sm sm:text-base text-gray-500"
              >
                <li>Computer Engineering Bachelor's Degree</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {}
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.timeline {
  .timeline-item {
    &:hover {
      .icon-wrapper {
        transform: scale(1.75);
      }
    }
  }
}
</style>

<template>
  <div class="greeting my-8 px-4 z-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-7 sm:col-start-2 sm:col-end-6">
          <p class="font-bold text-xl sm:text-3xl text-gray-900">Overview</p>
          <p class="text-sm sm:text-base my-4">
            I am a fullstack software developer with over 10 years of experience. My expertise spans frontend and backend development, automated testing, DevOps, and observability.
          </p>
          <p class="text-sm sm:text-base my-4">
            Throughout my career, I have led teams and provided consulting services. I am adept at using various tools to enhance productivity and ensure the timely delivery of projects. I have also supported my team by reviewing code, coaching team members, and finding solutions.
          </p>
          <p class="text-sm sm:text-base my-4">
            My goal is to drive team success and deliver high-quality software solutions. I am passionate about learning new technologies and sharing my knowledge with others. I am always looking for opportunities to grow and improve my skills.
          </p>
          <p class="text-sm sm:text-base my-4">
            I love soccer, manga and beer. Please feel free to contact me, Thank you.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Greeting',
  data() {
    return {}
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.greeting {
}
</style>

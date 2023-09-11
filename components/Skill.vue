<template>
  <div id="skill" class="portfolio relative bg-gray-800 py-8 px-4">
    <div class="container mx-auto">
      <p class="font-bold text-xl sm:text-3xl text-center text-white mb-4">
        Skill
      </p>

      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4">
          <span
            v-for="(skill, i) in skillList"
            :key="skill"
            class="
              bg-gray-200
              text-gray-500 text-xs
              sm:text-sm
              font-medium
              m-1.5
              px-2.5
              py-0.5
              rounded
              inline-block
            "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            >{{ skill }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return {
      skillList: [
        'Javascript',
        'Vue, Nuxt',
        'React, Redux',
        'Angular',
        'React Native',
        'Html & CSS',
        'Jquery',
        'Bootstrap',
        'Tailwind',
        'Nest js, Node js',
        'Typescript',
        'Jest',
        'Flutter',
        'Docker / Docker compose',
        'AWS',
        'Azure devops/pipeline',
        'Github Action',
        'Agile',
        'Odoo',
        'MongoDB',
        'PostgresSQL & MySQL',
        'Cypress',
        'Cucumber',
        'Python',
        'Liff',
        'Git',
        'Firebase',
        'C#',
        'Elastic search',
        'Terraform',
      ],
    }
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.skill {
}
</style>

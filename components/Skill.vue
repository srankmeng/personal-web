<template>
  <div id="skill" class="relative bg-gray-800 py-8 px-4">
    <div class="container mx-auto">
      <p class="font-bold text-xl sm:text-3xl text-center text-white mb-4">
        Skill
      </p>

      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-7 sm:col-start-2 sm:col-end-6">
          <span
            v-for="(skill) in skillList"
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
        'React, Redux, Next',
        'Angular',
        'React Native',
        'Html & CSS',
        'Jquery',
        'Bootstrap',
        'Tailwind',
        'Nest js, Node js',
        'Typescript',
        'Python',
        'Jest',
        'Flutter',
        'Agile',
        'Odoo',
        'MongoDB',
        'PostgresSQL & MySQL',
        'Cypress',
        'Playwright',
        'Python',
        'Liff',
        'Git',
        'Firebase',
        'C#',
        'Elastic search',
        'Terraform',
        'Docker / Docker compose',
        'Kubernetes',
        'Helm chart',
        'AWS',
        'Jenkins',
        'Azure devops/pipeline',
        'Github Action',
        'Observabiliy stack',
        'Ollama',
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

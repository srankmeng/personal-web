<template>
  <div id="training" class="relative bg-white py-8 px-4">
    <div class="container mx-auto">
      <p class="font-bold text-xl sm:text-3xl text-center text-gray-900 mb-4">
        Training
      </p>

      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-7 sm:col-start-2 sm:col-end-6">
          <img src="~/assets/training/cloudskillsboost.png" class="w-100 my-2" alt="cloudskillsboost">

          <div class="text-center text-sm sm:text-base my-2">
            <a class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" href="https://www.cloudskillsboost.google/public_profiles/78ed81a3-e2cc-42a8-b947-4b0c11a92329" target="_blank">More training</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Training',

  methods: {},
}
</script>

<style lang="scss" scoped>
.training {
}
</style>

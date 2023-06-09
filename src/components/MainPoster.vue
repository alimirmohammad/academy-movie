<template>
  <div class="suggestion-box relative h-96 w-full">
    <div class="background-image rounded-3xl absolute left-0 top-0 w-full h-full z-10"></div>
    <div class="content z-20 absolute left-0 flex bottom-0 h-full w-full flex-col justify-end p-10">
      <div class="movie-title-container">
        <h3 class="movie-title text-white text-5xl">
          {{ title }}
        </h3>
        <h4 class="mb-7 text-gray-300">
          {{ subtitle }}
        </h4>
        <div class="flex items-center gap-6">
          <a
            href="#"
            class="bg-primary rounded-xl py-3 px-4 inline-block text-white shadow-lg shadow-primary-dark text-sm"
            >More Detail</a
          >
          <a href="#" class="text-white text-lg bg-[#ffffff5e] rounded-2xl py-[10px] px-3">
            <img src="../assets/plus.png" alt="#" class="inline-block w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  }
})

const background = computed(() => `url(${props.src})`)
</script>

<style scoped>
.suggestion-box .background-image {
  background-image: v-bind(background);
  background-position: center;
  background-size: cover;
  overflow: hidden;
}
</style>

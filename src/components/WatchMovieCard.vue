<template>
  <div class="cover h-60 w-[23%] min-w-[14rem] bg-center bg-cover rounded-2xl overflow-hidden">
    <div
      class="overlay bg-slate-800 bg-opacity-60 w-full h-full p-4 text-white flex flex-col justify-between"
    >
      <div>
        <div class="imdb rounded-2xl bg-slate-400 inline-block px-1 py-0">
          <img src="../assets/imdb.png" alt="imdb icon" class="w-6 inline-block rounded-md mr-1" />
          <span>{{ score }}</span>
        </div>
      </div>
      <div class="movie-info">
        <h2>{{ title }}</h2>
        <span class="text-[#CCCCCC]">{{ year }}</span>
        <div class="flex justify-between items-center">
          <a href="#" class="py-[5px] px-[7px] bg-primary rounded-xl shadow-lg shadow-primary-dark"
            >More Detail</a
          >
          <a href="#" class="text-white text-lg bg-[#ffffff5e] rounded-2xl py-[5px] px-[7px]">
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
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  isInWatchList: {
    type: Boolean,
    default: false
  }
})

const background = computed(() => `url(${props.src})`)
</script>

<style scoped>
.cover {
  background-image: v-bind(background);
}
.imdb {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>

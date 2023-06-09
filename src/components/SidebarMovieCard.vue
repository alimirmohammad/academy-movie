<template>
  <div class="movie-container flex justify-start gap-2 my-2">
    <div class="movie-poster-container">
      <img :src="src" :alt="title" class="w-16 rounded-2xl" />
    </div>
    <div class="movie-info-container flex flex-col justify-between">
      <div class="movie-name-container">
        <h2 class="text-white">{{ title }}</h2>
        <h3 class="text-secondary">{{ genreText }}</h3>
      </div>
      <div class="movie-imdb-container text-white">
        <div class="imdb rounded-2xl bg-slate-400 inline-block px-1 py-0">
          <img src="../assets/imdb.png" alt="imdb icon" class="w-6 inline-block rounded-md mr-1" />
          <span>{{ score }}</span>
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
  genre: {
    type: Array,
    default() {
      return []
    }
  }
})

const genreText = computed(() => props.genre.join(', '))
</script>

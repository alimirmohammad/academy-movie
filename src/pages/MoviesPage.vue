<template>
  <MainLayout>
    <div class="flex justify-between flex-wrap">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${movie.poster_path}`"
        :rating="movie.vote_average"
        :release-date="movie.release_date"
        :title="movie.title"
      />
    </div>
  </MainLayout>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import MainLayout from '../layout/MainLayout.vue'
import MovieCard from '../components/MovieCard.vue'
import {
  API_BASE_URL,
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE,
  API_VERSION
} from '../constants/api-constants'
import { POPULAR_MOVIES_URL } from '../constants/endpoints'
import { client } from '../utils/client'
const movies = ref([])

onMounted(() => {
  client(`${API_BASE_URL}${API_VERSION}${POPULAR_MOVIES_URL}?language=en-US&page=1`)
    .then((response) => {
      movies.value = response.results
    })
    .catch((err) => console.error(err))
})
</script>

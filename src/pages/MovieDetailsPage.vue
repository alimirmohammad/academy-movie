<template>
  <div>
    <h1>Movie Details</h1>
    <h2>{{ $route.params.id }}</h2>
    <RouterLink to="/movies/123">New</RouterLink>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { client } from '../utils/client'
import { API_BASE_URL, API_VERSION } from '../constants/api-constants';
import { MOVIE_DETAILS_URL } from '../constants/endpoints';

function getMovieDetails(movieId) {
  client(`${API_BASE_URL}${API_VERSION}${MOVIE_DETAILS_URL(movieId)}?language=en-US`)
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
}

const route = useRoute()
watch(
  () => route.params.id,
  (newId) => {
    getMovieDetails(newId)
  },
  { immediate: true }
)
</script>

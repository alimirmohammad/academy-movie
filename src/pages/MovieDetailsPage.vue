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

function getMovieDetails(movie_id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGQ5MzZhNzQyZTdlYzM4YmEzMTZkMTkxNDcyZDgwOCIsInN1YiI6IjY0OWJlMjhhOTYzODY0MDEwMDQxNDQzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v4e267R8_nYbUNXNgdHx8IfYj2rCSycE633nMMSmBCo'
    }
  }

  fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
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

<template>
  <main class="w-2/3 flex flex-col gap-2 p-4">
    <MainPoster title="Asghar" subtitle="naive girl in Paris" :src="amelie" />
    <MovieTrailer title="Outlander" :src="outlander" />
  </main>
</template>

<script setup>
import MainPoster from './components/MainPoster.vue'
import amelie from './assets/amelie.jpg'
import outlander from './assets/1.jpg'
import MovieTrailer from './components/MovieTrailer.vue'
</script>

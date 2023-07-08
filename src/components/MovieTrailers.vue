<template>
  <section class="mb-14" ref="element">
    <!-- section title and see all container -->
    <div class="flex justify-start items-center mb-3">
      <h2 class="text-white text-lg">New trailers</h2>
    </div>
    <div class="selector-container mb-3 text-secondary flex justify-start gap-4 text-md">
      <span v-for="tab in tabs" :key="tab" :class="{'text-red-500': activeTab === tab}" @click="activeTab = tab">{{tab}}</span>
    </div>
    <div class="flex flex-wrap justify-center sm:justify-around gap-[15px]">
      <MovieTrailer v-for="movie in movies" :key="movie.id" :title="movie.title" :src="movie.poster_path" />
    </div>

  </section>
</template>
<script setup>
import { ref, watch } from 'vue';
import { API_BASE_URL, API_VERSION } from '../constants/api-constants';
import MovieTrailer from '@/components/MovieTrailer.vue'
import { client } from '../utils/client';
const element = ref()
const tabs = [
'upcoming',
'popular',
'top_rated',
'now_playing'
]
const activeTab = ref('upcoming')
const movies = ref([])
watch(activeTab, (tab) => {
  client(`${API_BASE_URL}${API_VERSION}/movie/${tab}?language=en-US&page=1`)
    .then((response) => {
      movies.value = response.results
    })
    .catch((err) => console.error(err))

}, {immediate: true})
</script>

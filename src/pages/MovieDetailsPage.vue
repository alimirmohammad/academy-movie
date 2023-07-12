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
import { useFetch } from '../composables/useFetch'
import { API_BASE_URL, API_VERSION } from '@/constants/api-constants'
import { MOVIE_DETAILS_URL } from '@/constants/endpoints'

const route = useRoute()
const { doFetch, data, loading, error } = useFetch()

watch(
  () => route.params.id,
  (newId) => {
    doFetch(`${API_BASE_URL}${API_VERSION}${MOVIE_DETAILS_URL(newId)}?language=en-US`)
  },
  { immediate: true }
)
</script>

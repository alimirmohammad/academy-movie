<template>
  <MainLayout>
    <MainPoster title="Asghar" subtitle="naive girl in Paris" :src="amelie" />
    <MovieTrailers />
    <!-- <MovieTrailer title="Outlander" :src="outlander" />
    <WatchMovieCard title="The blade runner" :year="2021" :score="8.3" :src="bladeRunner" /> -->
  </MainLayout>
</template>

<script setup>
import MainPoster from '@/components/MainPoster.vue'
import amelie from '@/assets/amelie.jpg'
import outlander from '@/assets/1.jpg'
import bladeRunner from '@/assets/blade-runner.jpg'
import MovieTrailer from '@/components/MovieTrailer.vue'
import WatchMovieCard from '@/components/WatchMovieCard.vue'
import MainLayout from '@/layout/MainLayout.vue'
import MovieTrailers from '../components/MovieTrailers.vue'
</script>
<style scoped>
main {
  background: rgb(26, 28, 32);
  background: -moz-linear-gradient(
    180deg,
    rgba(26, 28, 32, 1) 0%,
    rgba(27, 26, 31, 1) 23%,
    rgba(23, 24, 28, 1) 50%,
    rgba(22, 21, 26, 1) 75%,
    rgba(21, 22, 26, 1) 90%,
    rgba(20, 19, 24, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(26, 28, 32, 1) 0%,
    rgba(27, 26, 31, 1) 23%,
    rgba(23, 24, 28, 1) 50%,
    rgba(22, 21, 26, 1) 75%,
    rgba(21, 22, 26, 1) 90%,
    rgba(20, 19, 24, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(26, 28, 32, 1) 0%,
    rgba(27, 26, 31, 1) 23%,
    rgba(23, 24, 28, 1) 50%,
    rgba(22, 21, 26, 1) 75%,
    rgba(21, 22, 26, 1) 90%,
    rgba(20, 19, 24, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1a1c20",endColorstr="#141318",GradientType=1);
  @apply min-h-screen;
}
</style>

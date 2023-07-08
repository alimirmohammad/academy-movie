<template>
  <div @mouseenter="toggleOverlay" @mouseleave="toggleOverlay" class="overflow-hidden">
    <RouterLink class="thumbnail-image relative" :to="{ name: 'movie-detail', params: { id } }">
      <img :src="src" alt="movie poster" class="movie-poster" />
      <div
        v-if="showOverlay"
        class="overlay-desc absolute top-0 left-0 rounded-2xl w-full h-full p-3 flex justify-end flex-col gap-1 transition-all opacity-0"
      >
        <div class="scores">
          <div class="imdb rounded-2xl bg-slate-400 inline-block px-1 py-0">
            <img :src="imdb" alt="imdb icon" class="w-6 inline-block rounded-md" />
            <span>{{ rating }}</span>
          </div>
        </div>
        <!-- <div class="genre">{{ categories }}</div> -->
        <div class="more-infos">{{ year }}</div>
      </div>
    </RouterLink>
    <h3 class="text-white ml-1 w-full whitespace-break-spaces truncate">{{ title }}</h3>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import imdb from '@/assets/imdb.png'
const props = defineProps({
  src: String,
  rating: Number,
  releaseDate: String,
  title: String,
  id: String
})
const year = computed(() => new Date(props.releaseDate).getFullYear())
const showOverlay = ref(false)
function toggleOverlay() {
  showOverlay.value = !showOverlay.value
}
</script>
<style scoped>
.overlay-desc {
  background-color: rgba(41, 41, 41, 0.7);
  color: white;
}
.imdb {
  background-color: rgba(255, 255, 255, 0.1);
}
.thumbnail-image:hover .overlay-desc {
  opacity: 1;
}
.movie-poster {
  @apply bg-slate-50  w-[150px] h-[220px]  rounded-2xl border-transparent transition-all mb-2;
}
</style>

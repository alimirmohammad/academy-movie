<template>
            <div @mouseenter="toggleOverlay" @mouseleave="toggleOverlay">
              <a class="thumbnail-image relative">
                <img
                  :src="amelie"
                  alt="movie poster"
                  class="movie-poster"
                />
                <div
                v-if="showOverlay"
                  class="overlay-desc absolute top-0 left-0 rounded-2xl w-full h-full p-3 flex justify-end flex-col gap-1 transition-all opacity-0"
                >
                  <div class="scores">
                    <div
                      class="imdb rounded-2xl bg-slate-400 inline-block px-1 py-0"
                    >
                      <img
                        :src="imdb"
                        alt="imdb icon"
                        class="w-6 inline-block rounded-md"
                      />
                      <span>{{rating}}</span>
                    </div>
                  </div>
                  <div class="genre">{{categories}}</div>
                  <div class="more-infos">{{movieFooter}}</div>
                </div>
              </a>
              <h3 class="text-white ml-1">{{props.title}}</h3>
            </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import imdb from '.././assets/imdb.png'
import amelie from '.././assets/amelie.jpg'
const props = defineProps('item', 'loading')
const rating = computed(() => props.review/10)
const year = computed(() => new Date(props.date).getFullYear())
const categories = computed(() => props.categories.map(({title}) => title).join(','))
const movieFooter = computed(() => `${props.counrty} - ${year.value}`)
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
</style>
<template>
  <div class="trailer-container">
    <div class="h-40 w-[23%] min-w-[14rem] bg-center bg-cover rounded-2xl overflow-hidden trailer">
      <div
        class="overlay bg-slate-800 bg-opacity-60 w-full h-full p-4 text-white flex flex-col justify-center"
      >
        <div class="flex justify-center">
          <div class="bg-slate-200 bg-opacity-20 inline-block p-3 rounded-full">
            <img src="../assets/play-btn.png" alt="play btn" class="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
    <div class="pt-2 text-white">{{ title }}</div>
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
  }
})

const background = computed(() => `url(https://image.tmdb.org/t/p/original${props.src})`)
</script>

<style scoped>
.trailer {
  background-image: v-bind(background);
}
</style>

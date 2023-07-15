<template>
  <MainLayout>
    <div class="flex sm:flex-row flex-col gap-3">
        <!-- profile statics  -->
        <div class="profile-data-container w-full sm:w-[300px] rounded-2xl overflow-hidden bg-[#202228]">
          <img src="/images/tahmasious.jpg" alt="user profile image" class="h-[150px] w-full object-cover">
          <h1 class="username text-center text-white mt-4 mb-0 text-lg">
            Tahmasious
          </h1>
          <h2 class="text-sm text-secondary text-center">@tahmasious</h2>
          <div class="statics-container flex justify-around items-center text-white my-4">
            Member since May 2023
          </div>
          <hr class="w-[90%] m-auto bg-secondary h-px border-0">
          <a href="./edit-profile.html" class="m-auto my-4 table text-primary">
            Change info
          </a>
        </div>
        <div class="w-full flex flex-col gap-3">
          <div class="level-statics rounded-2xl bg-[#202228] w-full p-6">
            <div class="flex justify-between">
              <h2 class="text-2xl text-white mb-2">Most Watched Genres</h2>
            </div>
            <div class="bg-secondary rounded-2xl h-2 w-full mb-3 flex justify-start">
              <!-- a genre bar  -->
              <div class="movie-genre-bar bg-primary rounded-l-2xl h-2 w-[40%]">
                <div class="bg-slate-500 text-white justify-center p-3 rounded-xl hidden relative top-3">
                  Adventure
                </div>
              </div>
              <!-- a genre bar  -->
              <div class="movie-genre-bar bg-[#A70000] h-2 w-[20%]">
                <div class="bg-slate-500 text-white justify-center p-3 rounded-xl hidden relative top-3">
                  action
                </div>
              </div>
              <!-- a genre bar  -->
              <div class="movie-genre-bar bg-[#FF5252] h-2 w-[25%]">
                <div class="bg-slate-500 text-white justify-center p-3 rounded-xl hidden relative top-3">
                  horror
                </div>
              </div>
              <!-- a genre bar  -->
              <div class="movie-genre-bar bg-[#FF7B7B] h-2 w-[10%]">
                <div class="bg-slate-500 text-white justify-center p-3 rounded-xl hidden relative top-3">
                  comedy
                </div>
              </div>
              <!-- a genre bar  -->
              <div class="movie-genre-bar bg-[#FFBABA] rounded-r-xl h-2 w-[5%]">
                <div class="bg-slate-500 text-white justify-center p-3 rounded-xl hidden relative top-3">
                  Others
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-3 h-full">
            <div class="rounded-2xl overflow-hidden bg-[#202228] w-full flex flex-col gap-3 justify-center p-2">
              <h2 class="text-white font-bold text-center sm:text-4xl text-xl">
                130
              </h2>
              <h3 class="text-secondary text-center">total rating</h3>
            </div>
            <div class="rounded-2xl overflow-hidden bg-[#202228] w-full flex flex-col gap-3 justify-center p-2">
              <h2 class="text-white font-bold text-center sm:text-4xl text-xl">
                80%
              </h2>
              <h3 class="text-secondary text-center">average movie score</h3>
            </div>
            <div class="rounded-2xl overflow-hidden bg-[#202228] w-full flex flex-col gap-3 justify-center p-2">
              <h2 class="text-white font-bold text-center sm:text-4xl text-xl">
                0%
              </h2>
              <h3 class="text-secondary text-center">average TV score</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-col-2">
        <div>
          <TextField v-model="model" v-bind="attrs" ref="child"  />
        </div>
      </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layout/MainLayout.vue'
import TextField from '@/components/dls/TextField.vue'
import { reactive, ref, watch } from 'vue';
const model = ref('')
const attrs = reactive({
  label:'mu input',
  asghar: {key: 1, value: 1}

})
const child = ref()
watch(child, next => {
  if(next) {
    next.focus()
  }

}, {immediate: true})
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

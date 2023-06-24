<template>
  <MainLayout>
    <section class="rounded-2xl bg-[#1E1F26] p-7 max-w-2xl m-auto">
      <h2 class="text-2xl text-white">Profile</h2>
      <div class="flex justify-start items-center gap-4 py-6">
        <img src="/images/tahmasious.jpg" alt="profile pic" class="w-28 h-28 rounded-full" />
        <a href="#" class="p-3 bg-primary rounded-3xl text-white">change</a>
        <a href="#" class="p-3 text-primary">remove</a>
      </div>
      <h2 class="text-2xl text-white">General</h2>
      <form action="#" class="mb-4">
        <TextField v-model="model" v-bind="attr" disabled />
      </form>
    </section>
  </MainLayout>
</template>
<script setup>
import MainLayout from '@/layout/MainLayout.vue'
import { reactive, ref } from 'vue'
import TextField from '../components/dls/TextField.vue'
const model = ref('')
const attr = reactive({
  name: 'username',
  type: 'text',
  label: 'user name',
  placeholder: 'user name'
})
</script>

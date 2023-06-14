<template>
      <div> 
      <div class="flex justify-between flex-wrap">
        <div v-if="loading">
          loading
        </div>
        <template v-else-if="result && result.length">
          <MovieCard  v-for="(item) in result" :key="item.id" />
        </template>
        <div v-else>no data ...</div>
          </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const result = ref(null)
const loading = ref(true)
function getData() {
  loading.value = true;
  setTimeout(() => {
    result.value = [
    {
      id: 1,
  title: 'Joker',
  date: '2023-06-10T12:11:48Z',
  review: 92,
  categories: [
    {    name: 'family', id: 1  },
  {name: 'bussiness', id: 2}
  ],
  img: import('./assets/amelie.jpg'),
  counrty: 'America',
  counrtyId: 1,
},
{
      id: 2,
  title: 'Joker',
  date: '2023-06-10T12:11:48Z',
  review: 92,
  categories: [
    {    name: 'family', id: 1  },
  {name: 'bussiness', id: 2}
  ],
  img: import('./assets/amelie.jpg'),
  counrty: 'America',
  counrtyId: 1,
},
{
      id: 3,
  title: 'Joker',
  date: '2023-06-10T12:11:48Z',
  review: 92,
  categories: [
    {    name: 'family', id: 1  },
  {name: 'bussiness', id: 2}
  ],
  img: import('./assets/amelie.jpg'),
  counrty: 'America',
  counrtyId: 1,
},
{
      id: 4,
  title: 'Joker',
  date: '2023-06-10T12:11:48Z',
  review: 92,
  categories: [
    {    name: 'family', id: 1  },
  {name: 'bussiness', id: 2}
  ],
  img: import('./assets/amelie.jpg'),
  counrty: 'America',
  counrtyId: 1,
}
    ]
    loading.value = false
  }, 3000);
}
getData()
</script>

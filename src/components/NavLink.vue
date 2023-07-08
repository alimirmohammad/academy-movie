<template>
  <RouterLink class="nav-link" active-class="active" :to="to" v-slot="{ isActive }">
    <img :src="isActive ? activeIcon : icon" :alt="text" class="w-4 h-4 inline mr-3" />
    <span>{{ text }}</span>
  </RouterLink>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  activeIcon: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.nav-link {
  @apply pl-9 flex items-center text-secondary mt-3 mb-3;
}
.active span {
  color: white;
}
.active {
  border-left: solid #d91f27 3px;
}
.nav-link:not(.active) {
  margin-left: 3px;
}
</style>

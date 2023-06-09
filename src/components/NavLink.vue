<template>
  <a class="nav-link" :class="{ active }" href="#">
    <img :src="active ? activeIcon : icon" :alt="text" class="w-4 h-4 inline mr-3" />
    <span>{{ text }}</span>
  </a>
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
  active: {
    type: Boolean,
    default: false
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

<template>
  <main class="w-2/3 flex flex-col gap-2 p-4">
    <slot />
  </main>
</template>

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

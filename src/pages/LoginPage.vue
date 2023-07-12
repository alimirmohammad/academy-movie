<template>
  <main class="flex justify-center">
    <section class="inline-flex flex-col justify-center h-[100vh] m-auto items-center w-[300px]">
      <div class="logo-container mb-4 flex items-center gap-2 justify-center content-center">
        <img
          src="/images/logo.png"
          alt="mymovie logo"
          class="logo inline-block"
          width="80px"
          height="80px"
        />
        <div class="divider bg-slate-700 w-px h-[40px]"></div>
        <h1 class="text-white text-[24px]">
          My movie<strong class="text-[35px] text-primary">.</strong>
        </h1>
      </div>

      <form
        @submit.prevent="signin"
        class="flex flex-col items-center gap-2 justify-center content-center text-secondary w-full"
      >
        <label for="username" class="hidden"></label>
        <input
          type="text"
          name="username"
          v-model="username"
          placeholder="Username"
          class="text-white border-[3px] border-primary rounded-3xl block bg-transparent p-3 outline-none w-full"
        />
        <p class="error" id="username"></p>
        <label for="password" class="hidden"></label>
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="Password"
          class="text-white border-[3px] border-primary rounded-3xl block bg-transparent p-3 outline-none w-full"
        />
        <p class="error" id="password"></p>
        <input type="submit" class="bg-primary text-white p-2 rounded-3xl" />
      </form>
      <a
        href="https://www.themoviedb.org/signup"
        class="text-primary text-sm text-center p-5 inline-block"
        >Sign Up</a
      >
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '../utils/login-utils'

const username = ref('')
const password = ref('')

function signin() {
  login(username.value, password.value)
}
</script>

<style scoped>
.divider {
  display: none;
}
.logo {
  width: 80px;
  height: 80px;
  display: table;
  margin: auto;
}
main {
  @apply min-h-screen;
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
}
</style>

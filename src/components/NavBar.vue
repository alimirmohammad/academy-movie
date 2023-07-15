<template>
  <nav class="navbar w-[20%] h-auto pb-4 hidden sm:block">
    <div class="flex justify-end p-8 sm:hidden">
      <img id="close-menu-btn" src="/images/plus.png" class="w-7 h-7 rotate-45" alt="close-btn" />
    </div>
    <div class="sticky top-0">
      <!-- logo -->
      <div class="logo-container mb-4">
        <img src="/images/logo.png" alt="mymovie logo" class="logo" />
        <h1>My movie<strong class="text-[35px] text-primary">.</strong></h1>
      </div>
      <!-- main links -->
      <section class="text-sm pb-3 pt-3">
        <h2 class="nav-section-header">Personal</h2>
        <NavLink icon="/images/home.png" active-icon="/images/home-active.png" text="Home" to="/" />
        <a class="nav-link" href="#">
          <img src="/images/compass.png" alt="browse icon" class="w-4 h-4 inline mr-3" />
          <span>Browse</span>
        </a>
        <a class="nav-link" href="./watchlist.html">
          <img src="/images/heart.png" alt="heart icon" class="w-4 h-4 inline mr-3" />
          <span>Watchlist</span>
        </a>
      </section>
      <section class="text-sm pb-3 pt-3">
        <h2 class="nav-section-header">Menu</h2>
        <NavLink
          icon="/images/movie.png"
          active-icon="/images/movie-active.png"
          text="Movies"
          to="/movies"
        />
        <a class="nav-link" href="./tv.html">
          <img
            src="/images/TVshow.png  "
            alt="friend icon"
            class="w-4 h-4 inline mr-[14px] ml-[1px]"
          />
          <span>TV shows</span>
        </a>
        <a class="nav-link" href="./people.html">
          <img src="/images/people.png" alt="party icon" class="w-4 h-4 inline mr-3" />
          <span>People</span>
        </a>
      </section>
      <section class="text-sm pb-3 pt-3">
        <h2 class="nav-section-header">general</h2>
        <NavLink icon="/images/setting.png" active-icon="/images/setting-active.png" text="setting" to="/settings" />
        <a class="nav-link" href="./logout.html">
          <img src="/images/logout.png" alt="logout icon" class="w-4 h-4 inline mr-3" />
          <span>Log out</span>
        </a>
      </section>
      <!-- notification container -->
      <div class="notification-container">
        <br />
        <br />
      </div>
      <!-- tahmasious github -->
      <div class="github-link-container bg-[#131519] w-[80%] rounded-2xl table m-auto mt-10">
        <img
          src="/images/tahmasious.jpg"
          alt="owner profile image"
          width="50px"
          height="50px"
          class="rounded-2xl table m-auto relative top-[-20px]"
        />
        <h3 class="m-auto text-slate-500 text-center mt-[-15px]">Tahmasious</h3>
        <h4 class="m-auto text-slate-700 text-center">Owner and dev</h4>
        <a
          target="_blank"
          class="bg-slate-700 table m-auto text-white pl-4 pr-4 pt-2 pb-2 rounded-2xl mb-2 mt-2"
          href="https://github.com/tahmasious"
          >Visit github</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import NavLink from './NavLink.vue'
</script>

<style scoped>
.logo {
  width: 80px;
  height: 80px;
  display: table;
  margin: auto;
}
.logo-container h1 {
  color: white;
  display: table;
  margin: auto;
  margin-top: -20px;
  font-size: 24px;
}
.navbar {
  background: rgb(33, 35, 41);
  background: -moz-linear-gradient(
    180deg,
    rgba(33, 35, 41, 1) 0%,
    rgba(31, 32, 39, 1) 23%,
    rgba(29, 30, 36, 1) 50%,
    rgba(26, 28, 32, 1) 75%,
    rgba(25, 27, 31, 1) 90%,
    rgba(24, 26, 30, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(33, 35, 41, 1) 0%,
    rgba(31, 32, 39, 1) 23%,
    rgba(29, 30, 36, 1) 50%,
    rgba(26, 28, 32, 1) 75%,
    rgba(25, 27, 31, 1) 90%,
    rgba(24, 26, 30, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(33, 35, 41, 1) 0%,
    rgba(31, 32, 39, 1) 23%,
    rgba(29, 30, 36, 1) 50%,
    rgba(26, 28, 32, 1) 75%,
    rgba(25, 27, 31, 1) 90%,
    rgba(24, 26, 30, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#212329",endColorstr="#181a1e",GradientType=1);
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
.nav-link {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  padding-left: 2.25rem;
  --tw-text-opacity: 1;
  color: rgb(73 75 87 / var(--tw-text-opacity));
}

.nav-section-header {
  margin-bottom: 1.25rem;
  margin-left: 3px;
  padding-left: 2.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgb(73 75 87 / var(--tw-text-opacity));
}
</style>

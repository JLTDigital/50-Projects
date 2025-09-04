<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <header>
      <div>
        <h1 class="title">50 PROJECTS</h1>
      </div>
    </header>
    <div class="nav-wrapper">
      <nav>
        <RouterLink class="navPill" to="/">Home</RouterLink>
        <RouterLink class="navPill" to="/about">About</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 2rem 1rem 1rem;
  font-weight: 400;
  font-size: 3rem;
}

.navPill {
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 20px;
  background-color: #fff;
  text-decoration: none;
  transition:
    color 0.3s ease,
    background-color 0.3s ease;
}

.wrapper {
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
  background-size: 100% 100%;
  background-position:
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px;
  background-image:
    radial-gradient(18% 28% at 24% 50%, #cefaffff 7%, #073aff00 100%),
    radial-gradient(18% 28% at 18% 71%, #ffffff59 6%, #073aff00 100%),
    radial-gradient(70% 53% at 36% 76%, #73f2ffff 0%, #073aff00 100%),
    radial-gradient(42% 53% at 15% 94%, #ffffffff 7%, #073aff00 100%),
    radial-gradient(42% 53% at 34% 72%, #ffffffff 7%, #073aff00 100%),
    radial-gradient(18% 28% at 35% 87%, #ffffffff 7%, #073aff00 100%),
    radial-gradient(31% 43% at 7% 98%, #ffffffff 24%, #073aff00 100%),
    radial-gradient(21% 37% at 72% 23%, #d3ff6d9c 24%, #073aff00 100%),
    radial-gradient(35% 56% at 91% 74%, #8a4ffff5 9%, #073aff00 100%),
    radial-gradient(74% 86% at 67% 38%, #6dffaef5 24%, #073aff00 100%),
    linear-gradient(125deg, #4eb5ffff 1%, #4c00fcff 100%);
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.nav-wrapper {
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<script setup lang="ts">
import NavPills from './NavPills.vue'
</script>

<template>
  <div class="wrapper">
    <header>
      <div class="header-content">
        <h1 class="title">50 PROJECTS</h1>
        <p>A collection of small vanilla HTML, CSS & JS projects adapted to Vue JS</p>
        <p>
          All code can be found on Github at
          <a href="https://github.com/JLTDigital/50-Projects" target="_blank">
            <i class="fa-brands fa-github" style="color: #000"></i>
          </a>
        </p>
      </div>
    </header>
    <div class="nav-wrapper">
      <NavPills />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 2rem 1rem 1rem;
  font-weight: 400;
  font-size: 2.5rem;
}

.header-content {
  text-align: center;
}

.header-content p {
  font-size: 1.5rem;
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
}
</style>

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
  padding: 2rem;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 1.25px;
}

header h1 {
  font-family: 'Silkscreen', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #000;
  line-height: 1;
  margin-bottom: 1.5rem;
}

.header-content {
  text-align: center;
}

.header-content p {
  font-size: 1.2rem;
  color: #fff;
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
    0px 0px;
  background-image:
    repeating-linear-gradient(315deg, #00ffff2e 92%, #073aff00 100%),
    repeating-radial-gradient(75% 75% at 238% 218%, #00ffff12 30%, #073aff14 39%),
    radial-gradient(99% 99% at 109% 2%, #00c9ffff 0%, #073aff00 100%),
    radial-gradient(99% 99% at 21% 78%, #7b00ffff 0%, #073aff00 100%),
    radial-gradient(160% 154% at 711px -303px, #2000ffff 0%, #073affff 100%);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 2rem 1rem 1rem;
    letter-spacing: 2.25px;
    font-size: 2.5rem;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

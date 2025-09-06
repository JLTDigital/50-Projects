<script setup lang="ts">
import { links } from '../api/links/links'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="pills-wrapper">
    <ul>
      <RouterLink v-for="link in links" :key="link.id" :to="link.path">
        <li :style="{ backgroundColor: link.backgroundColour }" class="navPill">
          {{ link.title }}
        </li>
      </RouterLink>
    </ul>
  </div>
</template>

<style scoped>
.pills-wrapper {
  padding: 1rem;
}

ul {
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  padding: 1rem;
  margin: 0;
  overflow-x: auto;
}

.navPill {
  color: #000;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border-radius: 20px;
  text-decoration: none;
  transition:
    color 0.3s ease,
    background-color 0.3s ease;
  width: fit-content;
  position: relative;
}

li {
  display: inline-block;
  padding: 0 1rem;
  font-size: 1rem;
  border-left: 1px solid var(--color-border);
}

li.router-link-exact-active {
  color: var(--color-text);
}

li.router-link-exact-active:hover {
  background-color: transparent;
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <header>
    <RouterLink to="/">
      <button><i class="fas fa-arrow-left"></i></button
    ></RouterLink>
    <h1>{{ props.title }}</h1>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 1rem 1rem 1rem;
  font-weight: 400;
  font-size: 2.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
}

header p {
  font-size: 1.5rem;
}

h1 {
  color: #000;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

button {
  position: absolute;
  top: 1.5rem;
  left: 20%;
  background: #000;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
}

@media screen and (max-width: 768px) {
  header {
    flex-direction: column-reverse;
  }

  button {
    position: initial;
  }
}
</style>

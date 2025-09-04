<script setup lang="ts">
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <header>
    <h1>{{ props.title }}</h1>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 2rem 1rem 1rem;
  font-weight: 400;
  font-size: 2.5rem;
  text-align: center;
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
</style>

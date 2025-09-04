<script setup lang="ts"></script>

<template>
  <section>
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>

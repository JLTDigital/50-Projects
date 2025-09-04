<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <Header title="Expanding Cards" />
  <MainLayout>
    <div class="about">
      <p>This is the expanding cards page.</p>
    </div>
  </MainLayout>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    color: #000;
  }
}
</style>

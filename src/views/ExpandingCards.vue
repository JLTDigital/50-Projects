<script setup lang="ts">
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import Header from '@/components/Header.vue'

const panels = ref([
  {
    title: 'Explore The World',
    img: 'https://picsum.photos/seed/1/800/600',
  },
  {
    title: 'Desk',
    img: 'https://picsum.photos/seed/2/800/600',
  },
  {
    title: 'Waterfall',
    img: 'https://picsum.photos/seed/3/800/600',
  },
  {
    title: 'Strawberry',
    img: 'https://picsum.photos/seed/4/800/600',
  },
  {
    title: 'Ocean',
    img: 'https://picsum.photos/seed/5/800/600',
  },
])

const activeIndex = ref(0)

function setActive(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <Header title="Expanding Cards" />
  <MainLayout>
    <div class="expanding-cards-wrapper">
      <div class="expanding-cards-container">
        <div
          v-for="(panel, index) in panels"
          :key="index"
          class="panel"
          :class="{ active: activeIndex === index }"
          :style="{ backgroundImage: `url(${panel.img})` }"
          @click="setActive(index)"
        >
          <h3>{{ panel.title }}</h3>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
.expanding-cards-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
}

.expanding-cards-container {
  display: flex;
  width: 90vw;
}

.panel {
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  flex: 0.5;
  position: relative;
  margin: 10px;
  transition: flex 0.7s ease-in;
}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex: 5;
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}

@media (max-width: 480px) {
  .expanding-cards-container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
</style>

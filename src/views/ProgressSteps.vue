<script setup lang="ts">
import { ref, computed } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import Header from '@/components/Header.vue'

const totalSteps = 4
const currentActive = ref(1)

function nextStep() {
  if (currentActive.value < totalSteps) {
    currentActive.value++
  }
}

function prevStep() {
  if (currentActive.value > 1) {
    currentActive.value--
  }
}

const progressWidth = computed(() => {
  return ((currentActive.value - 1) / (totalSteps - 1)) * 100 + '%'
})

function isActive(index: number) {
  return index < currentActive.value
}
</script>

<template>
  <Header title="Progress Steps" />
  <MainLayout>
    <div class="progress-steps-wrapper">
      <div class="progress-container">
        <div class="progress" :style="{ width: progressWidth }"></div>

        <div v-for="n in totalSteps" :key="n" class="circle" :class="{ active: isActive(n) }">
          {{ n }}
        </div>
      </div>
      <div class="btn-wrapper">
        <button class="btn" @click="prevStep" :disabled="currentActive === 1">Prev</button>
        <button class="btn" @click="nextStep" :disabled="currentActive === totalSteps">Next</button>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
.progress-steps-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
  text-align: center;
}

.progress-container::before {
  content: '';
  background-color: var(--line-border-empty);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  z-index: -1;
}

.progress {
  background-color: var(--line-border-fill);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0%;
  z-index: -1;
  transition: 0.4s ease;
}

.circle {
  background-color: #f1f1f1;
  color: #000;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--line-border-empty);
  transition: 0.4s ease;
}

.circle.active {
  border-color: var(--line-border-fill);
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.btn {
  background-color: var(--line-border-fill);
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
}

.btn:active {
  transform: scale(0.98);
}

.btn:focus {
  outline: 0;
}

.btn:disabled {
  background-color: var(--line-border-empty);
  cursor: not-allowed;
}
</style>

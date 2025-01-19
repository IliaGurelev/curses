<template>
  <section class="difficulty">
    <button @click="setActive(true)" class="current-filter">
      <p>По сложности:</p>
      <Difficulty :icon="currentDifficulty.icon" :text="currentDifficulty.text" />
    </button>
    <ul v-if="isActive" class="list glass-effect">
      <li
        v-for="difficulty of difficultys"
        :key="difficulty.value"
        class="item"
        @click="setDifficulty(difficulty)"
      >
        <Difficulty :icon="difficulty.icon" :text="difficulty.text" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { difficultys } from '@/config/courseDifficulty'
import Difficulty from '@/components/Difficulty.vue'

const emit = defineEmits(['set-difficulty'])

const isActive = ref(false)
const currentDifficulty = ref({ value: 0, text: 'Все' })

const setActive = (state) => {
  isActive.value = state
}

const setDifficulty = (difficulty) => {
  currentDifficulty.value = difficulty
  emit('set-difficulty', difficulty.value)
  setActive(false)
}
</script>

<style lang="scss" scoped>
.difficulty {
  position: relative;
  display: inline-block;
}

.current-filter {
  display: flex;
  width: 100%;
  color: var(--color-purple-2);
  font-weight: 700;
  column-gap: 0.5em;
}

.list {
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  width: max-content;
  flex-direction: column;
  border-radius: 10px;
  z-index: 1;
}

.item {
  display: flex;
  column-gap: 0.5em;
  padding: 0.45em;
  font-weight: 700;
  color: var(--color-purple-2);
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: var(--color-purple-2);
  }
}
</style>

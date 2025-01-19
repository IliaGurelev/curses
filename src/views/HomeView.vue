<template>
  <Header />
  <main class="main">
    <div class="preview">
      <CatParallax class="preview__img" />
      <h2 class="preview__title">
        Совершенствуй мастерство вместе с <span class="purple">CatCurses</span>
      </h2>
    </div>
    <div class="filters">
      <TopicsList :topics="topicsMock" @topic-selected="setTopic" />
      <LevelFilter class="difficulty" @set-difficulty="setDfficulty" />
    </div>
    <CardCourseList :courses="courses" />
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCoursesStore } from '@/stores/coursesStore'
import { filterByDifficulty, filterByTopic } from '@/utils/filtersCourses.js'

import Header from '@/components/Header.vue'
import CardCourseList from '@/components/CardCourseList.vue'
import TopicsList from '@/components/TopicsList.vue'
import LevelFilter from '@/components/LevelFilter.vue'
import CatParallax from '@/components/CatParallax.vue'

import topicsMock from '@/mock/topics'

const coursesStore = useCoursesStore()

const activeTopic = ref('')
const currentDifficulty = ref(0)

const courses = computed(() => {
  let courses = coursesStore.courses

  courses = filterByTopic(courses, activeTopic.value)
  courses = filterByDifficulty(courses, currentDifficulty.value)

  return courses
})

const setTopic = (topic) => {
  if (topic === activeTopic.value) {
    activeTopic.value = ''
  } else {
    activeTopic.value = topic
  }
}

const setDfficulty = (difficulty) => {
  currentDifficulty.value = difficulty
}
</script>

<style lang="scss" scoped>
.preview {
  display: flex;
  align-items: center;

  &__img {
    width: 50%;
  }

  &__title {
    font-size: 3em;
    font-weight: 900;
    color: var(--color-purple-1);
    text-align: center;
  }
}

.purple {
  color: var(--color-purple-2);
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filters {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 50px;
}

.difficulty {
  align-self: flex-end;
}
</style>

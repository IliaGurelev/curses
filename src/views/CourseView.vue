<template>
  <Header />
  <main v-if="course" class="main">
    <CourseInfo class="course" :course="course" />
    <section class="other-courses">
      <h2 class="title">Похожие курсы</h2>
      <CardCourseList :courses="otherCourses" />
    </section>
  </main>
  <p v-else>Курс не найден</p>
</template>

<script setup>
import { useCoursesStore } from '@/stores/coursesStore'
import Header from '@/components/Header.vue'
import CourseInfo from '@/components/CourseInfo.vue'
import CardCourseList from '@/components/CardCourseList.vue'
import { watch, ref, computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const coursesStore = useCoursesStore()
const course = ref(coursesStore.getCourseById(Number(props.id)))
const otherCourses = computed(() => coursesStore.getCoursesExceptId(course.value.id))

watch(
  () => props.id,
  (newId) => {
    console.log(newId)
    course.value = coursesStore.getCourseById(Number(newId))
  },
)
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}

.course {
  width: 100%;
}

.other-courses {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.title {
  text-align: center;
  font-size: 3em;
  font-weight: 700;
  color: var(--color-purple-2);
}
</style>

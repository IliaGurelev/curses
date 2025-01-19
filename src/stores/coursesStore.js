import { defineStore } from 'pinia';
import { ref, computed } from 'vue'

import coursesMock from '@/mock/courses';

export const useCoursesStore = defineStore('courses', () => {
  const courses = ref(coursesMock || [])

  function getCourseById(id) {
    return courses.value.find(course => course.id === id)
  }

  function getCoursesExceptId(id) {
    return courses.value.filter(course => course.id !== id)
  }

  return {
    courses,
    getCourseById,
    getCoursesExceptId
  }
})

<template>
  <ul class="list">
    <li class="item" v-for="course of courses" :key="course.id">
      <MouseTracking>
        <CardCourse
          class="card"
          :id="course.id"
          :name="course.name"
          :cover="course.img"
          :description="course.description"
          :price="course.price"
          :topic="course.topics_ru"
        />
      </MouseTracking>
    </li>
  </ul>
</template>

<script setup>
import CardCourse from '@/components/CardCourse.vue'
import MouseTracking from '@/components/MouseTracking.vue'

defineProps({
  courses: {
    required: true,
    type: Array,
  },
})
</script>

<style lang="scss" scoped>
.list {
  --count-card: 5;
  --gap-card: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-card);
  width: 90vw;
}

.item {
  width: calc((90vw - var(--gap-card) * (var(--count-card) - 1)) / var(--count-card));
  height: 100%;
}

@media screen and (max-width: 1728px) {
  .list {
    --count-card: 4;
  }
}
</style>

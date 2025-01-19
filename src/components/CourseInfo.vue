<template>
  <section class="course">
    <section class="info">
      <div class="info-description">
        <h2 class="name">{{ course.name }}</h2>
        <p class="description">{{ course.description }}</p>
        <div class="info-tags">
          <Difficulty
            class="difficulty glass-effect"
            :icon="difficulty.icon"
            :text="difficulty.text"
          />
          <p class="topic">{{ course.topics_ru }}</p>
        </div>
      </div>
      <img
        class="img"
        :src="course.img ? course.img : deathFishImage"
        alt="Обложка курса"
        loading="lazy"
      />
    </section>
    <div class="buy">
      <p class="price">{{ course.price }} ₽</p>
      <a class="buy-link" :href="course.link" target="_blank" @click="handleClickBuy">
        Перейти на страницу курса для покупки
      </a>
    </div>
  </section>
</template>

<script setup>
import { difficultys } from '@/config/courseDifficulty'
import useUserStore from '@/stores/usersStore'
import Difficulty from '@/components/Difficulty.vue'
import deathFishImage from '@/assets/death-fish.jpg'

const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
})

const userStore = useUserStore()
const difficulty = difficultys.find((item) => item.value === props.course.difficulty)

function handleClickBuy() {
  userStore.addCourse(props.course)
}
</script>

<style lang="scss" scoped>
.course {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 60px;
  background-color: var(--color-purple-4);
}

.info {
  display: flex;
  column-gap: 1em;
  width: 100%;

  &-description {
    display: flex;
    flex-direction: column;
    row-gap: 2em;
  }

  &-tags {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
}

.img {
  align-self: flex-start;
  width: 20em;
  margin-left: auto;
  object-fit: cover;
  border-radius: 0.5em;
}

.name {
  font-size: 2em;
  font-weight: 700;
  color: #fff;
}

.difficulty {
  width: max-content;
  padding: 0.25em 0.75em;
  color: #fff;
  font-size: 1.5em;
  border-radius: 5px;
}

.description {
  font-size: 1.5em;
  color: #fff;
}

.topic {
  color: #fff;
  font-size: 1.5em;
  text-decoration: underline;
}

.buy {
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.price {
  align-self: flex-end;
  font-size: 2.5em;
  font-weight: 500;
  text-decoration: underline;
  color: #fff;
}

.buy-link {
  color: #fff;
  background-color: var(--color-green-1);
  padding: 1em 1.5em;
  font-size: 1.5em;
  border-radius: 10px;
}
</style>

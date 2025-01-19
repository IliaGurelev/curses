<template>
  <RouterLink class="card glass-effect" :to="{ name: 'course', params: { id: props.id } }">
    <img class="cover" :src="cover" alt="" loading="lazy" />
    <h3 class="name">{{ props.name }}</h3>
    <p class="description">{{ props.description }}</p>
    <div class="price-wrap">
      <p class="price">{{ props.price }} ₽</p>
      <p class="topic">{{ props.topic }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
import deathFish from '@/assets/death-fish.jpg'
import { RouterLink } from 'vue-router'

const props = defineProps({
  id: {
    required: true,
    type: Number,
  },
  cover: {
    required: false,
    type: String,
    default: '',
  },
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  topic: {
    required: true,
    type: String,
  },
})

const cover = props.cover || deathFish
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 13px;
  width: 100%;
  height: auto;
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0px 0px 10px var(--color-purple-1);
  }
}

.cover {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 13px;
}

.name {
  font-size: 1.5em;
  font-weight: 700;
  color: var(--color-purple-3);
  height: 3.625rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.description {
  font-size: 1em;
  height: 3.625rem;
  color: black;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.price-wrap {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.price {
  align-self: flex-start;
  margin-top: auto;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  background-color: var(--color-purple-1);
  border-radius: 10px;
  white-space: nowrap;
}

.topic {
  color: var(--color-purple-2);
}
</style>

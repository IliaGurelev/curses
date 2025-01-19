<template>
  <ul class="list">
    <li
      :class="{ active: activeTopic === topic.name, item: true }"
      @click="($emit('topic-selected', topic.name), setTopic(topic.name))"
      v-for="topic of props.topics"
      :key="topic.id"
    >
      <button class="topic">
        {{ topic.name_ru }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  topics: {
    required: true,
    type: Array,
  },
})

const activeTopic = ref('')

const setTopic = (topic) => {
  if (topic === activeTopic.value) {
    activeTopic.value = ''
  } else {
    activeTopic.value = topic
  }
}
</script>

<style lang="scss" scoped>
$border-radius: 50px;

.list {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 10px;
}

.item {
  padding: 0.5em;
  border: 2px solid var(--color-purple-1);
  border-right: 0px;
  background-color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:first-child {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
  }

  &:last-child {
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    border-right: 2px solid var(--color-purple-1);
  }

  &:hover {
    background-color: #f3f3f3;
  }
}

.active {
  background-color: var(--color-purple-1);

  .topic {
    color: #fff;
  }

  &:hover {
    background-color: var(--color-purple-1);
  }
}

.topic {
  color: var(--color-purple-2);
  font-size: 1.25em;
  font-weight: 700;
}
</style>

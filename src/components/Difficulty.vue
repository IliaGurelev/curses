<template>
  <div class="wrap">
    <component :is="icon" v-if="icon" class="icon" />
    <p class="text">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: Object,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
})
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  align-items: self-start;
  column-gap: 0.35rem;
}

.icon {
  width: 1em;
}
</style>

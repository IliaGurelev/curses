<template>
  <div class="card" ref="card" @mousemove="handleMouseMove" @mouseleave="resetTransform">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const card = ref(null)
const parallax = ref(null)

const handleMouseMove = (event) => {
  const cardElement = card.value
  if (!cardElement) return

  // Убедимся, что событие обрабатывается только на самой карточке
  const { left, top, width, height } = cardElement.getBoundingClientRect()

  const x = ((event.clientX - left) / width) * 2 - 1
  const y = ((event.clientY - top) / height) * 2 - 1

  const rotateX = y * 15 // Угол вращения по X
  const rotateY = -x * 15 // Угол вращения по Y
  cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

const resetTransform = () => {
  const cardElement = card.value

  if (cardElement) {
    cardElement.style.transform = 'rotateX(0deg) rotateY(0deg)'
  }
}
</script>

<style lang="scss" scoped>
.card {
  transition:
    transform 0.2s ease-out,
    box-shadow 0.2s ease-out;
  transform-origin: center;
}

.parallax-element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  pointer-events: none;
  transition: transform 0.1s ease-out;
  z-index: 10;
  box-shadow: 0px 0px 10px #000;
}
</style>

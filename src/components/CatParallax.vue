<template>
  <div class="container">
    <img class="cat" src="../assets/samurai-cat.png" alt="" />
    <img
      class="fish"
      :style="{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      }"
      src="../assets/samurai-cat-fish.png"
      alt="Samurai Cat Fish"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const offsetX = ref(0) // Горизонтальное смещение
const offsetY = ref(0) // Вертикальное смещение

let lastScrollTop = 0 // Предыдущее положение прокрутки
let lastTimestamp = performance.now() // Предыдущее время события прокрутки

const handleScroll = () => {
  const currentScrollTop = window.scrollY
  const currentTimestamp = performance.now()

  // Расчёт разницы в положении скролла
  const scrollDelta = currentScrollTop - lastScrollTop

  // Расчёт времени между событиями прокрутки
  const timeDelta = currentTimestamp - lastTimestamp

  // Рассчитываем скорость скролла
  const scrollSpeed = Math.abs(scrollDelta / timeDelta)

  // Смещение fish зависит от скорости скролла
  const maxDisplacement = 2 // Максимальное смещение
  const displacement = Math.min(scrollSpeed * 5, maxDisplacement)

  // Смещение по оси X и Y
  offsetX.value += scrollDelta > 0 ? displacement : -displacement / 2
  offsetY.value += scrollDelta > 0 ? displacement : -displacement

  // Обновляем прошлые значения
  lastScrollTop = currentScrollTop
  lastTimestamp = currentTimestamp

  // Возвращение к начальному положению
  setTimeout(() => {
    offsetX.value = 0
    offsetY.value = 0
  }, 300) // Время до возврата
}

onMounted(() => {
  lastScrollTop = window.scrollY
  lastTimestamp = performance.now()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}

.fish {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.2s ease-out;
}
</style>

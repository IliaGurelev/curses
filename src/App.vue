<template>
  <keep-alive include="HomeView">
    <RouterView />
  </keep-alive>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped></style>

<template>
  <header class="header">
    <ul class="link-list">
      <li class="link">
        <RouterLink to="/"> Каталог </RouterLink>
      </li>
    </ul>
    <UserBlock :user="user" />
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import UserBlock from '@/components/UserBlock.vue'
import useUserStore from '@/stores/usersStore'

const userStore = useUserStore()
const user = userStore.currentUser
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
}

.link {
  color: var(--color-pink-1);
  font-size: 2em;
  font-weight: 600;
}
</style>

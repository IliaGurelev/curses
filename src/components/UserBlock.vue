<template>
  <div v-if="!isExistsUser" class="auth">
    <RouterLink class="login btn" :to="{ name: 'login' }">Войти</RouterLink>
    <RouterLink class="reg btn" :to="{ name: 'reg' }">Зарегистрироваться</RouterLink>
  </div>
  <RouterLink v-else :to="{ name: 'user' }" class="user">
    <UserIcon class="icon" />
    <p class="mail">{{ props.user.mail }}</p>
  </RouterLink>
</template>

<script setup>
import UserIcon from '@/components/icons/UserIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const isExistsUser = computed(() => {
  return Object.keys(props.user).length !== 0
})
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  column-gap: 0.3em;
}

.btn {
  padding: 0.5em;
  border-radius: 10px;
  background-color: #fff;
  color: var(--color-purple-2);
  font-weight: 700;
  font-size: 1.5em;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.login {
  background-color: var(--color-purple-2);
  color: #fff;
}

.user {
  display: flex;
  align-items: center;
  column-gap: 0.25em;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
}

.icon {
  width: 2em;
}

.mail {
  font-size: 1.2em;
  color: var(--color-purple-2);
}
</style>

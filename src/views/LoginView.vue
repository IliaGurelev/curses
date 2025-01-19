<template>
  <Header></Header>
  <main class="page">
    <h2 class="page__title">CatCurses</h2>
    <form class="form" @submit.prevent="handleSubmit">
      <h1 class="title">Войти</h1>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <div class="input-wrap">
        <label class="label" for="mail">Почта</label>
        <input class="input" type="text" name="mail" id="mail" v-model="mail" required />
      </div>
      <div class="input-wrap">
        <label class="label" for="password">Пароль</label>
        <input
          class="input"
          type="text"
          name="password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <button type="submit" class="btn">Войти</button>
    </form>
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue'
import useUserStore from '@/stores/usersStore'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const userStore = useUserStore()
const router = useRouter()

const mail = ref('')
const password = ref('')
const errorMessage = ref('')

const handleSubmit = () => {
  const user = userStore.getUserByEmail(mail.value)

  if (user && user.password === password.value) {
    userStore.loginUser(user)
    router.push('/')
  }

  setErrorMessage('Не правильный логин или пароль')
}

const setErrorMessage = async (message) => {
  errorMessage.value = message
  await new Promise((resolve) => setTimeout(resolve, 3000))
  errorMessage.value = ''
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  height: 90vh;

  &__title {
    font-size: 3em;
    color: var(--color-purple-1);
    font-weight: 700;
    text-align: center;
  }
}

.form {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
}

.title {
  font-size: 2em;
  color: var(--color-purple-2);
  font-weight: 700;
  text-align: center;
}

.error {
  text-align: center;
  color: red;
}

.label {
  font-size: 1.5em;
  font-weight: 500;
}

.input {
  font-size: 1.5em;
  padding: 0.25rem;
  background-color: #f1f1f1;
  box-shadow: 0px 0px 5px #63636346 inset;
  border-radius: 0.5rem;
}

.input-wrap {
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
}

.btn {
  font-size: 1.5em;
  background-color: var(--color-purple-1);
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
}
</style>

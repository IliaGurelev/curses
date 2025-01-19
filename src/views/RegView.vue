<template>
  <Header></Header>
  <main class="page">
    <h2 class="page__title">CatCurses</h2>
    <form class="form" @submit.prevent="handleSubmit">
      <h1 class="title">Регистрация</h1>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <div class="input-wrap">
        <label class="label" for="mail">Почта</label>
        <input class="input" type="mail" name="mail" id="mail" v-model="newUser.mail" required />
      </div>
      <div class="input-wrap">
        <label class="label" for="password">Пароль</label>
        <input
          class="input"
          type="password"
          name="password"
          id="password"
          v-model="newUser.password"
          required
        />
      </div>
      <div class="input-wrap">
        <label class="label" for="re-password"
          >Повторите пароль
          <span :style="{ visibility: !isSamenessPassword ? 'visible' : 'hidden' }" class="error">
            - пароли не сходятся</span
          ></label
        >
        <input
          class="input"
          type="password"
          name="re-password"
          id="re-password"
          v-model="rePassword"
          required
        />
      </div>
      <button type="submit" class="btn">Зарегистрироваться</button>
    </form>
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue'
import useUserStore from '@/stores/usersStore'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'

const userStore = useUserStore()
const router = useRouter()

const newUser = ref({
  mail: '',
  password: '',
  courses: [],
})

const rePassword = ref('')
const errorMessage = ref('')

const isSamenessPassword = computed(
  () => newUser.value.password === rePassword.value || newUser.value.password.length === 0,
)

const handleSubmit = () => {
  const user = userStore.getUserByEmail(newUser.value.mail)

  if (!user && isSamenessPassword.value) {
    userStore.registrationUser(newUser.value)
    router.push('/')
  } else {
    setErrorMessage('Пользователь с такой почтой уже существует')
  }
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

  .error {
    font-size: 0.5em;
  }
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

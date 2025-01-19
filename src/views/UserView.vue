<template>
  <Header />
  <main class="main">
    <div class="info">
      <UserIcon class="info__avatar" />
      <div class="info__wrap">
        <p class="info__mail">{{ currentUser.mail }}</p>
        <button class="info__exit" @click="exitUser">Выйти</button>
      </div>
    </div>
    <section class="courses">
      <h2 class="courses__title">Курсы которыми вы интерисовались:</h2>
      <CardCourseList class="courses__list" :courses="currentUser.courses" />
    </section>
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import CardCourseList from '@/components/CardCourseList.vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/stores/usersStore'

const userStore = useUserStore()
const currentUser = userStore.currentUser
const router = useRouter()

const exitUser = () => {
  userStore.exitUser()
  router.push('/')
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 20px;
}

.info {
  display: flex;
  align-items: center;
  column-gap: 20px;

  &__avatar {
    width: 12.5em;
  }

  &__mail {
    color: var(--color-purple-2);
    font-size: 3em;
  }

  &__exit {
    align-self: flex-end;
    width: max-content;
    padding: 0.5rem 1rem;
    font-size: 1.5em;
    color: #fff;
    background-color: #bd4646;
    border-radius: 5px;
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    row-gap: 1em;
  }
}

.courses {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  &__title {
    font-size: 2em;
    font-weight: 700;
    color: var(--color-purple-2);
  }
}
</style>

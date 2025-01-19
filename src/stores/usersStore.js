import { defineStore } from "pinia";
import { ref } from "vue";
import { existsCourse } from "@/utils/existsCourse";

import usersMock from "@/mock/users";

const useUserStore = defineStore('user', () => {
  const currentUser = ref({});

  function getUserByEmail(mail) {
    return usersMock.find((user) => user.mail === mail)
  }

  function loginUser(user) {
    currentUser.value = user
  }

  function registrationUser(newUser) {
    const existingUser = usersMock.find((user) => user.mail === newUser.mail)
    if (existingUser) {
      throw new Error('Пользователь с такой почтой уже существует')
    }
    usersMock.push(newUser);
    currentUser.value = newUser;
  }

  function exitUser(user) {
    currentUser.value = {}
  }

  function addCourse(course) {
    if (currentUser.value.length !== 0 && !existsCourse(currentUser.value.courses, course)) {
      currentUser.value.courses.push(course)
    }
  }

  return {
    currentUser,
    getUserByEmail,
    loginUser,
    exitUser,
    addCourse,
    registrationUser
  }
}, {
  persist: true,
})

export default useUserStore

import useUserStore from "@/stores/usersStore";
import { computed } from "vue";

export default function setupRouterGuard(router) {
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    const isAuthenticated = computed(() => Object.keys(userStore.currentUser).length !== 0);

    if (to.meta.requiresAuth && !isAuthenticated.value) {
      next('login');
    } else if (to.meta.requiresNoAuth && isAuthenticated.value) {
      next('user');
    } else {
      next();
    }
  })
}

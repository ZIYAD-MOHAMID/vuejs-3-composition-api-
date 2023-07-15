import { createRouter, createWebHistory } from 'vue-router' // @ts-ignore
import HomeView from "../views/HomeViwe.vue";// @ts-ignore
import services from '../views/servicesView.vue';// @ts-ignore
import GropViwe from '../views/GropViwe.vue';// @ts-ignore
import EmployeesViwe from '../views/EmployeesViwe.vue';// @ts-ignore
import ContactViwe from '../views/Contactviwe.vue';// @ts-ignore
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      redirect: { name: "home" },
    },
    {
      path: "/services",
      name: "services",
      component: services,
    },
    {
      path: "/grop",
      name: "grop",
      component: GropViwe,
    },
    {
      path: "/employees",
      name: "employees",
      component: EmployeesViwe,
    },
    {
      path: "/Contact",
      name: "Contact",
      component: ContactViwe,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ]
})

export default router

import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Sobre from "../pages/Sobre.vue";
import Reclamacao from "../pages/Reclamacao.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: Sobre,
  },
  {
    path: "/reclamacao",
    name: "Reclamacao",
    component: Reclamacao,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import MainLayout from "@/layouts/Main.layout.vue";

// Views
import HomeView from "@/views/Home.view.vue";

// Components
import OneFluffyComponent from "@/components/fluffy/OneFluffy.component.vue";
const routes = [
  {
    path: "/",
    name: 'MainLayout',
    component:  MainLayout,
    children: [
      { name: "Home", path: "/", component: HomeView },
      { name: "Fluffy", path: "/fluffy/:id", component:  OneFluffyComponent},
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

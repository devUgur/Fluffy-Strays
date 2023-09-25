import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import MainLayout from "@/layouts/Main.layout.vue";

// Views
import HomeView from "@/views/Home.view.vue";
import BlogView from "@/views/Blog.view.vue";
import OneBlogView from "@/views/OneBlog.view.vue";
import OurDonorsView from "@/views/OurDonors.view.vue";
import NewProjectsView from "@/views/NewProjects.view.vue";
import PageNotFoundView from "@/views/PageNotFound.view.vue";

// Components
import OneFluffyComponent from "@/components/fluffy/OneFluffy.component.vue";
const routes = [
  {
    path: "/",
    name: 'MainLayout',
    component:  MainLayout,
    children: [
      { name: "Home", path: "/", component: HomeView },
      { name: "Blog", path: "/blogs", component:  BlogView },
      { name: "OneBlog", path: "/blogs/:id", component:  OneBlogView },
      { name: "Fluffy", path: "/fluffys", component:  OneFluffyComponent },
      { name: "OneFluffy", path: "/fluffys/:id", component:  OneFluffyComponent },
      { name: "Supporters", path: '/supporters', component: OurDonorsView },
      { name: "Projects", path: '/projects', component: NewProjectsView },
      // Diese Route wird für ungültige Routen verwendet
      { path: '/:pathMatch(.*)*', name: 'PageNotFound', component: PageNotFoundView }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 } // always scroll to top
  },
  routes
})

export default router

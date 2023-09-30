import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store";



import MainLayout from "@/layouts/Main.layout.vue";

import DashboardAdminView from "@/views/Dashboard.admin.view.vue";
import UsersAdminView from "@/views/Users.admin.view.vue";
import UserProfileAdminView from "@/views/UserProfile.admin.view.vue";
import FluffysAdminView from "@/views/Fluffys.admin.view.vue";
import DonationAdminView from "@/views/Donation.admin.view.vue"
import SubscriptionAdminView from "@/views/Subscription.admin.view.vue";
import BlogsAdminView from "@/views/Blogs.admin.view.vue";

import SignInAdminView from "@/views/SignIn.admin.view.vue";
import SignUpAdminView from "@/views/SignUp.admin.view.vue";

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      { name: "DashboardAdminView", path: "", component: DashboardAdminView},
      { name: "UsersAdminView", path: "/users", component: UsersAdminView},
      { name: "UsersProfileAdminView", path: "/user/:id", component: UserProfileAdminView},
      { name: "FluffysAdminView", path: "/fluffys", component: FluffysAdminView},
      { name: "DonationAdminView", path: "/donation", component: DonationAdminView},
      { name: "SubscriptionAdminView", path: "/subscription", component: SubscriptionAdminView},
      { name: "BlogsAdminView", path: "/blogs", component: BlogsAdminView},
    ]
  },
  { name: "SignInAdminView", path: "/signin", component: SignInAdminView },
  { name: "SignUpAdminView", path: "/signup", component: SignUpAdminView },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  await store.dispatch('admin/auth', {}, {root: true});
  const isAuthenticated = store.getters['admin/isAuth'];

  if(requiresAuth && !isAuthenticated) {
    next('/signin')
  }
  else if((to.path === "/signin" || to.path === "/signup") && isAuthenticated){
    next('/')
  }
  else {
    next()
  }

})

export default router

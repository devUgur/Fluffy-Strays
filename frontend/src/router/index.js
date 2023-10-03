import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store"

// Layouts
import MainLayout from "@/layouts/Main.layout.vue";
import AdminLayout from "@/layouts/Admin.layout.vue";

// User Views
import HomeView from "@/views/user/Home.view.vue";
import BlogView from "@/views/user/Blog.view.vue";
import OneBlogView from "@/views/user/OneBlog.view.vue";
import OurDonorsView from "@/views/user/OurDonors.view.vue";
import NewProjectsView from "@/views/user/NewProjects.view.vue";
import PageNotFoundView from "@/views/PageNotFound.view.vue";

// User Components
import OneFluffyComponent from "@/components/fluffy/OneFluffy.component.vue";

// Admin Views
import DashboardAdminView from "@/views/admin/Dashboard.admin.view.vue";
import UsersAdminView from "@/views/admin/Users.admin.view.vue";
import UserProfileAdminView from "@/views/admin/UserProfile.admin.view.vue";
import FluffysAdminView from "@/views/admin/Fluffys.admin.view.vue";
import DonationAdminView from "@/views/admin/Donation.admin.view.vue";
import SubscriptionAdminView from "@/views/admin/Subscription.admin.view.vue";
import BlogsAdminView from "@/views/admin/Blogs.admin.view.vue";
import SignInAdminView from "@/views/admin/SignIn.admin.view.vue";
import SignUpAdminView from "@/views/admin/SignUp.admin.view.vue";

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
  {
    path: '/admin',
    name: 'Admin',
    component: AdminLayout,
    meta: {
      requiresAuth: true, // guards
    },
    children: [
      { name: "DashboardAdminView", path: "", component: DashboardAdminView},
      { name: "UsersAdminView", path: "users", component: UsersAdminView},
      { name: "UsersProfileAdminView", path: "user/:id", component: UserProfileAdminView},
      { name: "FluffysAdminView", path: "fluffys", component: FluffysAdminView},
      { name: "DonationAdminView", path: "donation", component: DonationAdminView},
      { name: "SubscriptionAdminView", path: "subscription", component: SubscriptionAdminView},
      { name: "BlogsAdminView", path: "blogs", component: BlogsAdminView},
    ]
  },
  { name: "SignInAdminView", path: "/admin/signin", component: SignInAdminView },
  { name: "SignUpAdminView", path: "/admin/signup", component: SignUpAdminView },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 } // always scroll to top
  },
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  await store.dispatch('adminUser/auth', {}, { root: true });
  const isAuthenticated = store.getters['adminUser/isAuth'];

  console.log("requiresAuth:", requiresAuth);
  console.log("isAuthenticated:", isAuthenticated);

  if (requiresAuth && !isAuthenticated) {
    console.log("Redirecting to /signin");
    next('/admin/signin');
  } else if ((to.path === "/admin/signin" || to.path === "/admin/signup") && isAuthenticated) {
    console.log("Redirecting to /");
    next('/');
  } else {
    console.log("Proceeding with navigation");
    next();
  }
});

export default router

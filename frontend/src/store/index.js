import { createStore } from 'vuex'

// Store imports
import AxiosStore from "@/store/modules/axios.store";

// User store imports
import AppStore from "@/store/modules/app.store";
import TopnavStore from "@/store/modules/topnav.store";
import SocialmediaStore from "@/store/modules/socialmedia.store";
import BlogStore from "@/store/modules/blog.store";
import LanguageStore from "@/store/modules/language.store";
import MenuStore from "@/store/modules/menu.store";
import FluffyStore from "@/store/modules/fluffy.store";

// Admin store imports
import AdminStore from "@/store/modules/admin/admin.store";
import AdminUserStore from "@/store/modules/admin/admin-user.store";
import AdminFluffyStore from "@/store/modules/admin/admin-fluffy.store";
import AdminFluffyCreateStore from "@/store/modules/admin/admin-fluffy-create.store";
import AdminDonationStore from "@/store/modules/admin/admin-donation.store";
import AdminBlogStore from "@/store/modules/admin/admin-blog.store";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {

    axios: AxiosStore,

    // user
    app: AppStore,
    blog: BlogStore,
    language: LanguageStore,
    menu: MenuStore,
    topnav: TopnavStore,
    socialmedia: SocialmediaStore,
    fluffy: FluffyStore,

    //admin
    admin: AdminStore,
    adminUser: AdminUserStore,
    adminFluffy: AdminFluffyStore,
    adminFluffyCreate: AdminFluffyCreateStore,
    adminDonation: AdminDonationStore,
    adminBlog: AdminBlogStore
  }
})

import { createStore } from 'vuex'
import AxiosStore from "@/store/modules/axios.store";
import AdminStore from "@/store/modules/admin.store";
import AdminUserStore from "@/store/modules/admin-user.store";
import AdminFluffyStore from "@/store/modules/admin-fluffy.store";
import AdminFluffyCreateStore from "@/store/modules/admin-fluffy-create.store";
import AdminDonationStore from "@/store/modules/admin-donation.store";
import AdminSubscriptionStore from "@/store/modules/admin-subscription.store";
import AdminBlogStore from "@/store/modules/admin-blog.store";

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
    admin: AdminStore,
    adminUser: AdminUserStore,
    adminFluffy: AdminFluffyStore,
    adminFluffyCreate: AdminFluffyCreateStore,
    adminDonation: AdminDonationStore,
    adminSubscription: AdminSubscriptionStore,
    adminBlog: AdminBlogStore,
  }
})

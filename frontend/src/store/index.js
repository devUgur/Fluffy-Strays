import { createStore } from 'vuex'

import BlogStore from "@/store/modules/blog.store";
import LanguageStore from "@/store/modules/language.store";
import MenuStore from "@/store/modules/menu.store";

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
    blog: BlogStore,
    language: LanguageStore,
    menu: MenuStore
  }
})

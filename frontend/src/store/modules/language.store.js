const state = {
    list: [
        { short: "DE", name: "German" },
        { short: "TR", name: "Turkish" },
        { short: "EN", name: "Englisch" },
    ],
    current: null,
}

// Getter functions
const getters = {
    list: state => {
      return state.list;
    },
    current: state => {
        return state.current;
    }
}

// Actions
const actions = {
    select({commit}, lang){
        commit('SET_CURRENT_LANGUAGE', lang);
        console.log(lang)
    },
}

// Mutations
const mutations = {
    SET_CURRENT_LANGUAGE(state, lang){
        state.current = lang
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
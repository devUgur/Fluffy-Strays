const state = {
    name: "Fluffy Strays",
    slogan: "Hilf uns zu helfen",
}

// Getter functions
const getters = {
    name: state => {
        return state.name;
    },
    slogan: state => {
        return state.slogan;
    },
}

// Actions
const actions = {

}

// Mutations
const mutations = {

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
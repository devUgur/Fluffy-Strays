
const state = {
    name: "",
    list: [],
}

// Getter functions
const getters = {
    name: state => {
        return state.name;
    },
    list: state => {
        return state.list;
    },


}

// Actions
const actions = {
    async load({dispatch, commit}){
        try {
            let response = await dispatch('axios/get', 'admin/fluffy', {root: true});
            if(response && response.status === 200){
                commit('SET_LIST', response.data);
            }
        }catch (e) {
            console.log(e);
        }
    }
}
// Mutations
const mutations = {
    SET_LIST(state, list){
        state.list = list;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
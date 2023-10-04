const state = {
    list: [],
}

// Getter functions
const getters = {
    list: state => {
        return state.list;
    }
}

// Actions
const actions = {
    async getList({dispatch, commit}){
        try {
            let request = { url: "fluffy" };
            console.log(request)
            let response = await dispatch('axios/get', request, {root:true});
            if(response && response.status === 200){
                commit('SET_LIST', response.data);
            }
            console.log(response);

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
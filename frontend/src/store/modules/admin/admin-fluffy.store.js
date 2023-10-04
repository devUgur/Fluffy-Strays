import axios from "axios";

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
            let response = await dispatch('axios/get', {url:'admin/fluffy'}, {root: true});
            if(response && response.status === 200){
                commit('SET_LIST', response.data);
            }
        }catch (e) {
            console.log(e);
        }
    },
    async delete({dispatch}, id){
        try{
            let request = { url: "admin/fluffy/" +id };
            let response = await dispatch('axios/delete', request, {root:true})
            if(response && response.status === 200){
                await dispatch('load');
            }
            console.log(response);
            return response;
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
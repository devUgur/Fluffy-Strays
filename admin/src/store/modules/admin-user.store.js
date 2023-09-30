import axios from "axios";

const state = {
    name: "",
    list: [],
    imageSrc: null,
    current: null,
}

// Getter functions
const getters = {
    name: state => {
        return state.name;
    },
    list: state => {
        return state.list;
    },
    imageSrc: state => {
        return state.imageSrc;
    },
    current: state => {
        return state.current;
    },
}

// Actions
const actions = {
    async update({dispatch, state}, user){
        try{
            let requestPayload = {
                url: 'admin/user/update',
                data: user
            }
            let response = await dispatch('axios/post', requestPayload, {root: true})
            if(state.current._id === user._id){
                await dispatch('getCurrent', user._id);
            }
            return response;
        }catch (e) {
            console.log(e);
        }
    },
    async getAll({commit, dispatch}){
        try {
            let response = await dispatch('axios/get', 'admin/user' , {root: true});

            if(response && response.status === 200){
                commit('SET_LIST', response.data);
            }
        }catch (e) {
            console.log(e);
        }
    },
    async getById({commit, dispatch}, id){
        try {
            return await dispatch('axios/get', 'admin/user/' + id, {root: true});
        }catch (e) {
            console.log(e);
        }
    },
    async getCurrent({commit, dispatch}, id){
      try {
          let response = await dispatch('getById', id);
          if(response && response.status === 200){
              commit('SET_CURRENT', response.data);
          }
      }  catch (e) {
          console.log(e);
      }
    },
    async updateCurrent({dispatch, state}){
        let requestPayload = {
            url: 'admin/user/update',
            data: state.current
        }
        let response = await dispatch('axios/post', requestPayload, {root: true})
        console.log(response)
    },
    async updateImage({commit, dispatch, rootState}, data){
        try{
            let currentUserId =  rootState.admin.userId

            let requestPayload = {
                url: "admin/user/upload-image",
                data: data
            }
            let response = await axios.post('http://localhost:3000/api/' + requestPayload.url, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if(response && response.status === 200 && data.get("user") === currentUserId){
                await dispatch('getCurrent', currentUserId);
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
    },
    SET_IMAGE_SRC(state, src){
        state.imageSrc = src;
    },
    SET_CURRENT(state, current){
        state.current = current;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
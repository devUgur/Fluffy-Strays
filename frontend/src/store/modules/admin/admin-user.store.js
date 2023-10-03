import axios from "axios";
import router from "@/router";

const state = {
    name: "",
    list: [],
    imageSrc: null,
    current: null,
    isAuth: false,
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
    isAuth: state => {
        return state.isAuth;
    }
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
    },
    async auth({commit, dispatch}){
        try{
            let token = localStorage.getItem('auth-token');
            if(token){
                // Check if is a valid token with request to backend
                let req = {
                    url: 'admin/user/auth',
                    data: {
                        token: token
                    }
                }
                let response = await dispatch('axios/post', req, {root: true});

                if(response.status === 200){
                    if(response.data && response.data.user){
                        commit('SET_USER_ID', response.data.user.id)
                        await dispatch('adminUser/getCurrent', response.data.user.id, {root: true});
                    }
                    commit('LOGIN', localStorage.getItem('auth-token'));

                }else{
                    commit('LOGOUT')
                }
            }else{
                commit('LOGOUT');
            }
        }catch (e) {
            console.log(e);
            commit('LOGOUT');
        }
    },
    async signup({commit, dispatch}, authData){

        try{

            let request = {
                url: 'admin/user/signup',
                data: authData
            }
            const [response] = await Promise.all([dispatch('axios/post', request, {root: true})]);
            return response;
        }catch (e){
            console.log(e);
        }
    },
    async signin({commit, dispatch}, authData){
        try{
            let request = {
                url: 'admin/user/signin',
                data: authData
            }
            const response = await dispatch('axios/post', request, {root:true});
            if(response.status === 200){
                let token = response.data.token;
                commit('LOGIN', token);
                await router.push('/admin');
            }
            return response;
        }catch (e){
            console.log(e);
        }
    },
    async signout({commit}){
        commit('LOGOUT');
        location.reload();
    },
    async findByEmail({commit, dispatch}, userEmail){
        try{
            let requestUrl ='admin/user/find-by-email/' + userEmail;
            return await dispatch('axios/get', requestUrl, {root: true});
        }catch (e){
            console.log(e);
            return e;
        }
    },
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
    },
    LOGIN(state, authToken){
        state.isAuth = true;
        localStorage.setItem('auth-token', authToken);
    },
    LOGOUT(state){
        state.isAuth = false;
        localStorage.removeItem('auth-token');
    },
    SET_USER_ID(state, id){
        state.userId = id;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
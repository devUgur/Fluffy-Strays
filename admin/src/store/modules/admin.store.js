import router from "@/router";

const state = {
    name: "Fluffy Strays Admin",
    pageName: "Dashboard",
    isAuth: false,
    userId: null,
}

// Getter functions
const getters = {
    name: state => {
        return state.name;
    },
    pageName: state => {
        return state.pageName;
    },
    isAuth: state => {
        return state.isAuth;
    },
    userId: state => {
        return state.userId;
    }

}

// Actions
const actions = {
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
                await router.push('/');
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
    SET_PAGE_NAME(state, name){
        state.pageName = name;
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
    SET_EMAIL(state, email){
        state.email = email;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

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
}

// Actions
const actions = {

}
// Mutations
const mutations = {
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
    SET_PAGE_NAME(state, pageName){
        state.pageName = pageName;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
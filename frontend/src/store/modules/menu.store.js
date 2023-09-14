
const state = {
    routes: [],
    open: false,
}

// Getter functions
const getters = {
    routes: state => {
        return state.routes;
    },
    open: state => {
        return state.open;
    }
}

// Actions
const actions = {
    toggle({commit, dispatch}){
        dispatch('nav/scrollToTopnav',{}, {root:true})
        commit('SET_MENU_OPEN', !state.open);
        console.log("toggle :)");

        if(!state.open){
            document.body.classList.remove("menu-open");
        }
    },
    close({commit}){
        commit('SET_MENU_OPEN', false);
        document.body.classList.remove("menu-open");
    },
    closeAllDropdowns({state}){
        let routes = state.routes;
        for(let i = 0; i < routes.length; i++){
            let route = routes[i];
            if(route.dropdown){
                route.dropdown = false;
            }
        }
    },
}

// Mutations
const mutations = {
    SET_MENU_OPEN(state, value){
        state.open = value;
    },

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
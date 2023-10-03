const state = {
    mode: 'light' // dark, light
}

const getters = {
    mode: state => {
        return state.mode;
    }
}

const actions = {
    init({commit, state}){

        let styleMode = window.localStorage.getItem('style-mode');

        if(styleMode){
            commit('SET_MODE', styleMode);
        }else{
            commit('SET_MODE', state.mode);
        }

    },
    toggleMode({state, commit}){
        if(state.mode === 'light'){
            commit('SET_MODE', 'dark');
        }else{
            commit('SET_MODE', 'light');
        }
    }
}

const mutations = {
    SET_MODE(state, mode){
        const wrapper = document.querySelector(":root");
        wrapper.setAttribute('data-theme', mode);

        state.mode = mode;
        window.localStorage.setItem('style-mode', mode);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
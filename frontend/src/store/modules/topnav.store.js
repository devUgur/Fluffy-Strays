const state = {
    sticky: false,
    collapsed: false,
    windowScrollY: 0,
    links: [
        { name: "Home", to: "/"},
        { name: "Fluffys", to: "/fluffys"},
        { name: "Blog", to: "/blogs"},
        { name: "Unsere Helden", to: "/supporters"},
        { name: "Neue Projekte", to: "/projects", tooltip: "coming soon..."},
    ],
}

// Getter functions
const getters = {
    links: state => {
        return state.links;
    },
    sticky: state => {
        return state.sticky;
    },
    collapsed: state => {
        return state.collapsed;
    }
}

// Actions
const actions = {
    handleScroll({ commit, state }) {
        const currentScrollY = window.scrollY;
        let topOffset = 100;
        commit('SET_STICKY', currentScrollY > topOffset);
        commit('SET_COLLAPSED', (window.scrollY > state.windowScrollY) && window.scrollY > 0);
        state.windowScrollY = currentScrollY;
    },
    initScrollHandler({ commit, dispatch }) {
        // Füge den Scroll-Listener hinzu
        window.addEventListener("scroll", () => {
            dispatch('handleScroll');
        });
    },
    destroyScrollHandler({ commit }) {
        // Entferne den Scroll-Listener
        window.removeEventListener("scroll", () => {
            commit('SET_STICKY', false);
            commit('SET_COLLAPSED', false);
        });
    },
}

// Mutations
const mutations = {
    SET_STICKY(state, bool) {
        state.sticky = bool;
    },
    SET_COLLAPSED(state, bool) {
        state.collapsed = bool;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

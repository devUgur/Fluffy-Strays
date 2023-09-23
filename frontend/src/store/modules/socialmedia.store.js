const state = {
    youtubeUrl: "https://www.youtube.com/@FluffyStrays",
    instagramUrl: "https://www.instagram.com/fluffy.strays/?hl=de",
    pinterestUrl: "",
    facebookUrl: "",
    tiktokUrl: "https://www.tiktok.com/@fluffystrays",
}

// Getter functions
const getters = {

}

// Actions
const actions = {
    openYoutube({state}){
        window.open(state.youtubeUrl, '_blank');
    },
    openInstagram(){
        window.open(state.instagramUrl, '_blank');
    },
    openPinterest(){},
    openFacebook(){},
    openTiktok(){
        window.open(state.tiktokUrl, '_blank');
    }
}

// Mutations
const mutations = {

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
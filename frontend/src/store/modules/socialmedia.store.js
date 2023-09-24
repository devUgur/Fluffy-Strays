const state = {
    youtubeUrl: "https://www.youtube.com/@FluffyStrays",
    instagramUrl: "https://www.instagram.com/fluffy.strays/?hl=de",
    pinterestUrl: "",
    facebookUrl: "",
    tiktokUrl: "https://www.tiktok.com/@fluffystrays",
    socialIcons: [
        {
            hovered: false,
            name: "Youtube",
            primary: "youtube-primary",
            color: "youtube-color-1-A",
            white: "youtube-white",
            url: "https://www.youtube.com/@FluffyStrays",
        },
        {
            hovered: false,
            name: "Instagram",
            primary: "instagram-primary",
            color: "instagram-color-1-A",
            white: "instagram-white",
            url: "https://www.instagram.com/fluffy.strays/?hl=de"
        },
        {
            hovered: false,
            name: "Pinterest",
            primary: "pinterest-primary",
            white: "pinterest-white",
            color: "pinterest-color-1-A",
        },
        {
            hovered: false,
            name: "Facebook",
            primary: "facebook-primary",
            white: "facebook-white",
            color: "facebook-color-1-A",
        },
        {
            hovered: false,
            name: "TikTok",
            primary: "tiktok-primary",
            color: "tiktok-color-1-A",
            white: "tiktok-white",
            url: "https://www.tiktok.com/@fluffystrays"
        },
    ]
}

// Getter functions
const getters = {
    socialIcons: state => {
        return state.socialIcons;
    }
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
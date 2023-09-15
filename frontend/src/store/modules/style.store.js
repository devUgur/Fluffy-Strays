
const state = {
    pageTransitionName: 'fade',
    windowHeight: null,
    windowWidth: null,
    scrollTop: 0,
    deviceModes: [
        { name: 'xs', maxWidth: 480, active: false },
        { name: 'sm', maxWidth: 768, active: false },
        { name: 'md', maxWidth: 1024, active: false },
        { name: 'lg', maxWidth: null, active: false },
    ]
}

// Getter functions
const getters = {
    getWindowHeight(state){
        return state.windowHeight;
    },
    getWindowWidth(state){
        return state.windowWidth;
    },
    getScrollTop(state){
        return state.scrollTop;
    },
    getDeviceMode(state){
        return state.deviceMode;
    },
    isXSDevice(state){
        return state.deviceMode && state.deviceMode.name === 'xs';
    },
    isSMDevice(state){
        return state.deviceMode && state.deviceMode.name === 'sm';
    },
    isMDDevice(state){
        return state.deviceMode && state.deviceMode.name === 'md';
    },
    isLGDevice(state){
        return state.deviceMode && state.deviceMode.name === 'lg';
    },
    getDeviceModeName(state){
        return state.deviceMode.name;
    },
    pageTransitionName: (state) => {
        return state.pageTransitionName;
    }
}

// Actions
const actions = {
    init({commit, dispatch}){
        // Aktiviere das Polyfill
        smoothscroll.polyfill();
        commit('SET_SCROLL_TOP', window.pageYOffset);
        commit('SET_WINDOW_HEIGHT', window.innerHeight);
        commit('SET_WINDOW_WIDTH', window.innerWidth);
        dispatch('handleDeviceMode', {});
        console.log("StyleModule initialized!");
    },
    handleDeviceMode({commit, state}){
        let deviceMode;
        for(let i = 0; i < state.deviceModes.length; i++){
            let _deviceMode = state.deviceModes[i];
            if( _deviceMode.maxWidth ){

                if( state.windowWidth <= _deviceMode.maxWidth ){
                    //console.log(state.windowWidth, _deviceMode.maxWidth);
                    deviceMode = _deviceMode;
                    //console.log(deviceMode);
                    break;
                }
            }else{
                deviceMode = _deviceMode;
                //console.log(deviceMode);
            }
        }

        if(deviceMode){
            commit('SET_DEVICE_MODE', deviceMode);
        }
    },

    handleScroll({commit}, value){
        commit('SET_SCROLL_TOP', value);
    },
    handleResize({commit, dispatch}){

        commit('SET_WINDOW_HEIGHT', window.innerHeight);
        commit('SET_WINDOW_WIDTH', window.innerWidth);
        dispatch('handleDeviceMode', {});
    },
}

// Mutations
const mutations = {
    SET_WINDOW_HEIGHT(state, height){
        state.windowHeight = height;
    },
    SET_WINDOW_WIDTH(state, width){
        state.windowWidth = width;
    },
    SET_SCROLL_TOP(state, scrollValue){
        state.scrollTop = scrollValue;
    },
    SET_DEVICE_MODE(state, deviceMode){
        state.deviceMode = deviceMode;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
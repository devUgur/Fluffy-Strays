const state = {
    list: [
        { _id:"0", title: '', filename:'blog01.png', descr: '', to: '' },
        { _id:"1", title: '', filename:'blog02.png', descr: '', to: '' },
        { _id:"2", title: '', filename:'blog04.png', descr: '', to: '' },
        { _id:"3", title: '', filename:'blog05.png', descr: '', to: '' },
        { _id:"4", title: '', filename:'blog06.png', descr: '', to: '' },
        { _id:"5", title: '', filename:'blog08.png', descr: '', to: '' },
    ]
}

// Getter functions
const getters = {
    list: state => {
        return state.list;
    }
}

// Actions
const actions = {

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
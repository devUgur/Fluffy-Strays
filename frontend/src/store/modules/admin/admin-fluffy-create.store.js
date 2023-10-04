
const state = {
    newFluffy: {
        name: "",
        gender: "",
        characteristics: [],
        description: "",
        images: [],
        receivedAt: null,
    },

    selectableCharacteristics: [
        { value: 'Verletzt2', label: 'Pfote verletzt' },
        { value: 'Adoption', label: 'Zur Adoption freigegeben' },
        { value: 'Verletzt', label: 'Braucht dringend eine OP' },
        { value: 'Adoption', label: 'Zur Adoption freigegeben' },
    ]

}

// Getter functions
const getters = {
    newFluffy: state => {
        return state.newFluffy;
    },
    images: state => {
        return state.newFluffy.images;
    },
    gender: state => {
        return state.newFluffy.gender;
    },
    characteristics: state => {
        return state.newFluffy.characteristics;
    },
    description: state => {
        return state.newFluffy.description;
    },
    receivedAt: state => {
        return state.newFluffy.receivedAt;
    },
    selectableCharacteristics: state => {
        return state.selectableCharacteristics;
    }

}

// Actions
const actions = {
    async create({dispatch, state}){
        try {
            const formData = new FormData();
            formData.append('name', state.newFluffy.name);
            formData.append('gender', state.newFluffy.gender);
            formData.append('characteristics', JSON.stringify(state.newFluffy.characteristics));
            formData.append('description', state.newFluffy.description);
            formData.append('receivedAt', state.newFluffy.receivedAt);

            // Füge Bilder zur FormData hinzu
            state.newFluffy.images.forEach((image, index) => {
                formData.append('images', image.file); // Verwende hier 'image' als Feldname
            });

            console.log(formData)

            let requestPayload = {
                url: 'admin/fluffy',
                axiosConfig: {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
                data: formData,
            }
            let response = await dispatch('axios/post', requestPayload, {root: true});

            if(response && response.status === 201){
                dispatch('clearInput');
                await dispatch('adminFluffy/load', {}, {root: true});
            }
            console.log(response);
        }catch (e) {
            console.log(e);
        }
    },
    clearInput({commit}){
        commit('SET_NEW_FLUFFY_NAME', "");
        commit('SET_NEW_FLUFFY_IMAGES', []);
        commit('SET_GENDER', "");
        commit('SET_CHARACTERISTICS', []);
        commit('SET_DESCRIPTION', "");
        commit('SET_RECEIVED_AT', null);
    }
}
// Mutations
const mutations = {
    SET_NEW_FLUFFY(state, newFluffy){
        state.newFluffy = newFluffy;
    },
    SET_NEW_FLUFFY_NAME(state, name){
        state.newFluffy.name = name;
    },
    SET_NEW_FLUFFY_IMAGES(state, images){
        state.newFluffy.images = images;
    },
    SET_GENDER(state, gender){
        state.newFluffy.gender = gender;
    },
    SET_CHARACTERISTICS(state, characteristics){
        state.newFluffy.characteristics = characteristics;
    },
    SET_DESCRIPTION(state, descr){
        state.newFluffy.description = descr;
    },
    SET_RECEIVED_AT(state, date){
        state.newFluffy.receivedAt = date;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
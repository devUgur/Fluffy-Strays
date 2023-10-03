import axios from 'axios'

function getBaseUrl (){
    if(window.location.hostname === "localhost"){
        return 'http://localhost:3000/api'
    }else{
        return 'https://website.com/api';
    }
}
axios.defaults.baseURL = getBaseUrl();


function setToken (){
    axios.defaults.headers.common['Authorization'] = /*'Bearer ' + */ localStorage.getItem('auth-token');
}

axios.defaults.headers.post['Content-Type'] = 'application/json';


const state = {
    baseUrl: getBaseUrl(),
}

// Getter functions
const getters = {

}

// Actions
const actions = {
    async get({dispatch}, reqPath){
        //setToken();
        try {
            let res;
            res = await axios.get('/' + reqPath);
            return res;

        } catch (err) {
            console.error(err);
            return err;
        }
    },
    async post({dispatch, state}, req){
        //setToken();
        try {
            let res;
            if(req.axiosConfig){
                console.log(req.axiosConfig)
            }
            res = await axios.post('/' + req.url, req.data, req.axiosConfig || null);
            return res;
        } catch (err) {
            console.log(err)
            return err;
        }
    },
    async delete({dispatch}, req){
        setToken();
        try {
            let res;
            res = await axios.delete('/' + req.url );
            return res;
        } catch (err) {
            console.error(err);
            return err;
        }
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
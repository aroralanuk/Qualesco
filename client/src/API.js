import axios from 'axios';

const server = 'http://localhost:5000'

const API = {
    loginUser: async function (credentials) {
        console.log(await axios.post(`${server}/api/login`, credentials));
        return axios.post(`${server}/api/login`, credentials);
    },
    // createPokemon: function (pokemon) {
    //     return axios.post(`${server}/api/pokemon`, pokemon);
    // }
}

export default API;
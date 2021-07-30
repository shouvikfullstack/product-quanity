import axios from 'axios';
const SERVER_URL = "http://localhost:3002"

export const updateProduct = (payload) => {
    return axios.post(`${SERVER_URL}/update-quantity`, payload).then(response => response).catch(e=> {
        console.log(`Error: ${e}`);
    })
}

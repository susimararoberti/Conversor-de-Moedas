import axios from "axios";

const API = axios.create({
    baseURL: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/'
});
export default API;
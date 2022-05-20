import axios from "axios";

export const apiBlog = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});
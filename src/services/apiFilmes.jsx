import axios from "axios";

export const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular'
})
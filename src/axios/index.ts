import axios from "axios";
import {setupCache} from "axios-cache-adapter";

const cache = setupCache({
    maxAge: 1000 * 60 * 60,
})

export const dogApi = axios.create({
    baseURL: "https://api.thedogapi.com/v1/",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.DOG_API_KEY,
    }
});

export const catApi = axios.create({
    baseURL: "https://api.thecatapi.com/v1/",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.CAT_API_KEY,
    }
})

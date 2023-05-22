import axios from "axios";

export const apiImg = axios.create({
    baseURL: "http://localhost:3333"
});
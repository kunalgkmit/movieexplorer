import { ACCESS_TOKEN, BASE_URL } from "@env";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
    }
})
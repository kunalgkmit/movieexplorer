import { axiosInstance } from "@network/axiosInstance";
import { ENDPOINTS } from "@network/URLs";

export default async function fetchMovies(){
    try {
        const response = await axiosInstance.get(ENDPOINTS.MOVIES.POPULARITY_DESC);
        // console.log("Popular Movies>>",response.data)
        return response.data
    } catch (error) {
        
    }
}
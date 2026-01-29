import { fetchMovieDetails } from "@services/movies.service";
import { useQuery } from "@tanstack/react-query";

export const useMovieDetails = (movieId?:number)=> useQuery({
    queryKey: ["MovieDetails", movieId],
    queryFn:()=> fetchMovieDetails(movieId),
})
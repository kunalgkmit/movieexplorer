import { useQuery } from "@tanstack/react-query";

import { fetchMovieDetails } from "@services/movies.service";

export const useMovieDetails = (movieId:number)=> useQuery({
    queryKey: ["MovieDetails", movieId],
    queryFn:()=> fetchMovieDetails(movieId),
})
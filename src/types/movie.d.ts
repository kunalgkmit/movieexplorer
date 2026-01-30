interface DefaultMovieParams {
  pageParam?: number;
  sortBy?: string;
  includeVideo?: boolean;
  language?: string;
  votesGreaterThan?: number;
  releaseYear?:number;
  withGenres?:string;
}

interface Movie {
  movieId: number;
  title: string;
  posterPath: string;
  releaseDate: string;
  rating: number;
  isFavourite: boolean;
}

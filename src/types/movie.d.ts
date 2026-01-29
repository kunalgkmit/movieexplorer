interface DefaultMovieParams {
  pageParam?: number;
  sortBy?: string;
  includeVideo?: boolean;
  language?: string;
}

interface Movie{
  movieId: number;
  title: string;
  posterPath: string;
  releaseDate: string;
  rating: number;
  isFavourite: boolean;
}
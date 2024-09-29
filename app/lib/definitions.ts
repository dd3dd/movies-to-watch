import { User } from "firebase/auth";
export type Movie = {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
};
export type SortOptions = {
  rating_desc: string;
  rating_asc: string;
  date_desc: string;
  date_asc: string;
  title_desc: string;
  title_asc: string;
};
export type SortKey = keyof SortOptions;

export type Actor = {
  id: number;
  name: string;
  profile_path: string;
  character: string;
};

export type UserContextType = {
  user: User | null;
  loading: boolean;
  favoriteMovies: Movie[];
  favoriteMoviesLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setFavoriteMoviesLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setFavoriteMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
};

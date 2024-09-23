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

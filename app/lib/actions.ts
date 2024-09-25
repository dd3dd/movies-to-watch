"use server";
import { fetchMoviesByQuery } from "./data";
export async function fetchMoviesAction(page: number, query: string) {
  return await fetchMoviesByQuery(page, query);
}

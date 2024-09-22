import { Movie, SortKey } from "./definitions";
import { sortMap } from "./constant";
export async function fetchTopRatedMovies(
  currentPage: number,
  sort_by: SortKey
) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_token}`,
    },
  };
  const sortOption = sortMap[sort_by];
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=${sortOption}&vote_count.gte=1000`,
      options
    );
    if (!response.ok) {
      throw new Error(`HTTP error Status: ${response.status}`);
    }

    const data = await response.json();
    const movies: Movie[] = data.results.map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      poster_path: "https://image.tmdb.org/t/p/w780" + movie.poster_path,
    }));

    return {
      movies,
      total_pages: data.total_pages,
    };
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("Failed to fetch movies.");
  }
}
export async function fetchDataByQuery(query: string) {}

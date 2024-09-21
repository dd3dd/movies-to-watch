import { Movie } from "./definitions";
export async function fetchDataByQuery(query: string) {}
export async function fetchPopularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_token}`,
    },
  };
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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
      poster_path: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
    }));

    return movies;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("Failed to fetch movies.");
  }
}

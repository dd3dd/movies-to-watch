import { Actor, Movie, SortKey } from "./definitions";
import { sortMap } from "./constant";
async function fetchData(url: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("Failed to fetch data.");
  }
}

export async function fetchTopRatedMovies(
  currentPage: number,
  sort_by: SortKey
) {
  const sortOption = sortMap[sort_by];
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=${sortOption}&vote_count.gte=1000`;

  const data = await fetchData(url);
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
}
export async function fetchMovieDetails(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const data = await fetchData(url);
  if (!data) return null;
  return {
    title: data.title || "-",
    vote_average: data.vote_average ?? "-",
    release_date: data.release_date || "-",
    overview: data.overview || "-",
    genres: data.genres,
    runtime: data.runtime ?? "-",
    tagline: data.tagline,
    budget: data.budget ? data.budget.toLocaleString() : "-",
    revenue: data.revenue ? data.revenue.toLocaleString() : "-",
    status: data.status || "-",
    poster_path: data.poster_path
      ? "https://image.tmdb.org/t/p/w780" + data.poster_path
      : null,
  };
}
export async function fetchMovieCredits(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const members = await fetchData(url);

  const director = members.crew.find(
    (member: { job: string }) => member.job === "Director"
  );
  const screenplay = members.crew
    .filter((member: { job: string }) => member.job === "Screenplay")
    .map((member: { name: string }) => member.name);

  const actors: Actor[] = members.cast
    .filter(
      (member: { known_for_department: string }) =>
        member.known_for_department === "Acting"
    )
    .slice(0, 6)
    .map((member: Actor) => ({
      id: member.id,
      name: member.name,
      profile_path: member.profile_path
        ? "https://image.tmdb.org/t/p/w300" + member.profile_path
        : null,
      character: member.character,
    }));

  return {
    director: director ? director.name : "-",
    screenplay: screenplay.length > 0 ? screenplay.join(", ") : null,
    actors: actors,
  };
}
export async function fetchMoviesByQuery(currentPage: number, query: string) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${currentPage}`;

  const data = await fetchData(url);
  const movies: Movie[] = data.results
    .filter((movie: Movie) => movie.release_date)
    .map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      vote_average: movie.vote_average ?? "-",
      poster_path: movie.poster_path
        ? "https://image.tmdb.org/t/p/w780" + movie.poster_path
        : null,
    }));

  return movies;
}

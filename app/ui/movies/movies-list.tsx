import { fetchTopRatedMovies } from "@/lib/data";
import MovieCard from "./movie-card";
import MoviePagination from "./movie-pagination";
import { SortKey } from "@/lib/definitions";
export default async function MoviesList({
  currentPage,
  sort_by,
}: {
  currentPage: number;
  sort_by: SortKey;
}) {
  const { movies, total_pages } = await fetchTopRatedMovies(
    currentPage,
    sort_by
  );

  return (
    <>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="my-5 flex w-full justify-center">
        <MoviePagination totalPages={total_pages} />
      </div>
    </>
  );
}

"use client";

import { Movie } from "@/app/lib/definitions";
import { useState, useEffect } from "react";
import MovieCard from "../movies/movie-card";
import { useInView } from "react-intersection-observer";
import { fetchMoviesAction } from "@/app/lib/actions";
import Spinner from "../spinner";
import MoviesNotFound from "./movies-not-found";
import { SortKey } from "@/app/lib/definitions";
import { sortMovies } from "@/app/lib/utils";

export default function InfiniteScrollMovies({
  query,
  sort_by,
}: {
  query: string;
  sort_by: SortKey;
}) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView();

  async function loadMoreMovies() {
    const next = page + 1;
    const fetchedMovies = await fetchMoviesAction(next, query);
    if (fetchedMovies.length > 0) {
      setMovies((prevMovies) => {
        const sortedMovies = sortMovies(
          [...prevMovies, ...fetchedMovies],
          sort_by
        );
        return sortedMovies;
      });
      setPage(next);
    } else {
      setHasMore(false);
    }
  }
  useEffect(() => {
    const fetchFirstPage = async () => {
      const results = await fetchMoviesAction(1, query);
      const sortedResults = sortMovies(results, sort_by);
      setMovies(sortedResults);
      setLoading(false);
      setHasMore(results.length > 0);
      setPage(1);
    };
    setLoading(true);
    fetchFirstPage();
  }, [query, sort_by]);

  useEffect(() => {
    if (inView && hasMore) {
      loadMoreMovies();
    }
  }, [inView, hasMore]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : movies.length === 0 ? (
        <MoviesNotFound />
      ) : (
        <>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {movies.map((movie, index) => (
              <MovieCard key={`${movie.id}-${index}`} movie={movie} />
            ))}
          </div>
          <div
            ref={ref}
            className="col-span-1 mt-16 flex items-center justify-center sm:col-span-2 md:col-span-3 lg:col-span-4"
          >
            {hasMore && <Spinner />}
          </div>
        </>
      )}
    </>
  );
}

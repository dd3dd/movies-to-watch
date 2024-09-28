"use client";

import SigninRequired from "../ui/auth/signin-required";
import AuthButton from "../ui/auth/auth-button";
import SortDropdown from "../ui/sort-dropdown";
import LinkOptions from "../ui/link-options";
import WatchList from "../ui/watch-list/watch-list";
import { useUserContext } from "../user-provider";
import { SortKey } from "../lib/definitions";
import Spinner from "../ui/spinner";
import MoviesNotFound from "../ui/search-results/movies-not-found";
export default function Page({
  searchParams,
}: {
  searchParams?: { sort?: SortKey };
}) {
  const { user, loading, favoriteMovies, favoriteMoviesLoading } =
    useUserContext();
  const sort_by = searchParams?.sort || "rating_desc";
  if (loading)
    return (
      <div className="flex justify-center mt-12">
        <Spinner />
      </div>
    );
  if (!user) return <SigninRequired />;
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Watch List</h1>
        <AuthButton />
      </div>
      <div className="z-10 py-2 sticky top-0 flex justify-between gap-2 mb-4 bg-white">
        <SortDropdown type="search" />
        <div className="flex space-x-2">
          <LinkOptions option="top-rated" />
          <LinkOptions option="search" />
        </div>
      </div>

      {favoriteMoviesLoading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : favoriteMovies.length === 0 ? (
        <MoviesNotFound />
      ) : (
        <WatchList favoriteMovies={favoriteMovies} sort_by={sort_by} />
      )}
    </div>
  );
}

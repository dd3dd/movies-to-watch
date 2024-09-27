import SortDropdown from "../ui/sort-dropdown";
import SearchBar from "../ui/search-bar";
import InfiniteScrollMovies from "../ui/search-results/infinite-scroll-movies";
import MoviesNotFound from "../ui/search-results/movies-not-found";
import { SortKey } from "../lib/definitions";
import AuthButton from "../ui/auth/auth-button";
import LinkOptions from "../ui/link-options";
export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; sort?: SortKey };
}) {
  const query = searchParams?.query || "";
  const sort_by = searchParams?.sort || "rating_desc";

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Search Movies</h1>
        <AuthButton />
      </div>
      <div className="z-10 py-2 sticky top-0 flex flex-col-reverse md:flex-row gap-2 mb-4 bg-white">
        <div className="w-full flex gap-2">
          <SearchBar />
          <SortDropdown type="search" />
        </div>

        <div className="flex space-x-2">
          <LinkOptions option="top-rated" />
          <LinkOptions option="watch-list" />
        </div>
      </div>
      {!query.trim() ? (
        <MoviesNotFound />
      ) : (
        <InfiniteScrollMovies query={query} sort_by={sort_by} />
      )}
    </div>
  );
}

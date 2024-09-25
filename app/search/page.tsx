import { Button } from "@/components/ui/button";
import { ChartBarIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import SortDropdown from "../ui/sort-dropdown";
import Link from "next/link";
import Search from "../ui/search";
import InfiniteScrollMovies from "../ui/search-results/infinite-scroll-movies";
import MoviesNotFound from "../ui/search-results/movies-not-found";
import { SortKey } from "../lib/definitions";
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
      </div>
      <div className="z-10 py-2 sticky top-0 flex flex-col-reverse md:flex-row gap-2 mb-4 bg-white">
        <div className="w-full flex gap-2">
          <Search />
          <SortDropdown type="search" />
        </div>

        <div className="flex space-x-2">
          <Button className="flex-grow" asChild>
            <Link href={"/top-rated"}>
              <ChartBarIcon className="w-5 mr-1" />
              Top Rated
            </Link>
          </Button>
          <Button className="flex-grow">
            <ListBulletIcon className="w-5 mr-1" />
            Watch List
          </Button>
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

import { Button } from "@/components/ui/button";
import MoviesList from "@/app/ui/movies/movies-list";
import SortDropdown from "../ui/sort-dropdown";
import { SortKey } from "@/lib/definitions";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    sort?: SortKey;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const sort_by = searchParams?.sort || "rating_desc";

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Top Rated Movies</h1>
      </div>
      <div className="z-10 py-2 sticky top-0 flex justify-between gap-2 mb-4 bg-white">
        <div className="flex space-x-2">
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            Search
          </Button>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            Watch List
          </Button>
        </div>
        <SortDropdown />
      </div>
      <MoviesList currentPage={currentPage} sort_by={sort_by} />
    </div>
  );
}

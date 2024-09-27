import MoviesList from "@/app/ui/movies/movies-list";
import SortDropdown from "../ui/sort-dropdown";
import { SortKey } from "@/app/lib/definitions";
import AuthButton from "../ui/auth/auth-button";
import LinkOptions from "../ui/link-options";

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
        <AuthButton />
      </div>
      <div className="z-10 py-2 sticky top-0 flex justify-between gap-2 mb-4 bg-white">
        <SortDropdown type="top-rated" />
        <div className="flex space-x-2">
          <LinkOptions option="search" />
          <LinkOptions option="watch-list" />
        </div>
      </div>
      <MoviesList currentPage={currentPage} sort_by={sort_by} />
    </div>
  );
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import Search from "@/app/ui/search";
import MoviesList from "@/app/ui/movies/movies-list";

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";

  // const [searchTerm, setSearchTerm] = useState("");
  // const [sortBy, setSortBy] = useState("title");
  // const [watchList, setWatchList] = useState<number[]>([]);
  // const [showWatchList, setShowWatchList] = useState(false);

  // const sortedMovies = [...movies].sort((a, b) => {
  //   if (sortBy === "year") return b.year - a.year;
  //   if (sortBy === "rating") return b.rating - a.rating;
  //   return a.title.localeCompare(b.title);
  // });

  // const filteredMovies = sortedMovies.filter((movie) =>
  //   movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const watchListMovies = movies.filter((movie) =>
  //   watchList.includes(movie.id)
  // );

  // const toggleWatchList = (id: number) => {
  //   setWatchList((prev) =>
  //     prev.includes(id)
  //       ? prev.filter((movieId) => movieId !== id)
  //       : [...prev, id]
  //   );
  // };
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Movie Search</h1>
      </div>

      {1 === 1 && (
        <div className="z-10 py-2 sticky top-0 flex flex-col sm:flex-row gap-2 mb-4 bg-white">
          <Search />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                {/* <ArrowUpDown className="mr-2 h-4 w-4" /> */}
                Sort
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>By Title</DropdownMenuItem>
              <DropdownMenuItem>By Year</DropdownMenuItem>
              <DropdownMenuItem>By Rating</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            // onClick={() => setShowWatchList(!showWatchList)}
            variant="outline"
          >
            <>
              {/* <List className="mr-2 h-4 w-4" /> */}
              Watch List
            </>
          </Button>
        </div>
      )}
      <MoviesList query={query} />

      {/* {showWatchList && watchListMovies.length === 0 && (
        <p className="text-center text-muted-foreground">
          Your watch list is empty.
        </p>
      )} */}
    </div>
  );
}

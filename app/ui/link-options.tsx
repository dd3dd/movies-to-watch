import {
  MagnifyingGlassIcon,
  ListBulletIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function LinkOptions({
  option,
}: {
  option: "search" | "top-rated" | "watch-list";
}) {
  switch (option) {
    case "search":
      return <Search />;
    case "top-rated":
      return <TopRated />;
    case "watch-list":
      return <WatchList />;
    default:
      return null;
  }
}
export function Search() {
  return (
    <Button asChild>
      <Link href={"/search"}>
        <MagnifyingGlassIcon className="w-5 mr-1" />
        Search
      </Link>
    </Button>
  );
}
export function TopRated() {
  return (
    <Button className="flex-grow" asChild>
      <Link href={"/top-rated"}>
        <ChartBarIcon className="w-5 mr-1" />
        Top Rated
      </Link>
    </Button>
  );
}
export function WatchList() {
  return (
    <Button className="flex-grow" asChild>
      <Link href={"/watch-list"}>
        <ListBulletIcon className="w-5 mr-1" />
        Watch List
      </Link>
    </Button>
  );
}

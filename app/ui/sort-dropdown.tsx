"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { sortOptions } from "@/lib/constant";
export default function SortDropdown() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort");

  const createSortByURL = (sort_by: string) => {
    const params = new URLSearchParams(searchParams);
    const page = params.get("page") || "1";
    params.set("page", page);
    params.set("sort", sort_by);
    return `${pathname}?${params.toString()}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
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
              d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
          排序
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {sortOptions.map(({ value, label }) => (
          <DropdownMenuItem
            key={value}
            className={`${
              currentSort === value || (!currentSort && value === "rating_desc")
                ? "bg-blue-600 text-white pointer-events-none"
                : ""
            }`}
            asChild
          >
            <Link href={createSortByURL(value)}>{label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

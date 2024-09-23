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
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
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
          <ArrowsUpDownIcon className="w-5 mr-1" />
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

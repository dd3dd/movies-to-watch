"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { generatePagination } from "@/app/lib/utils";
export default function MoviePagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`${
              currentPage <= 1 ? "pointer-events-none text-gray-300" : ""
            }`}
            href={createPageURL(currentPage - 1)}
          />
        </PaginationItem>

        <div className="flex">
          {allPages.map((page, index) => {
            return (
              <PaginationItem key={page + index.toString()}>
                {page === "..." ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    className={`${
                      page === currentPage
                        ? "bg-blue-600 text-white pointer-events-none"
                        : ""
                    }`}
                    href={createPageURL(page)}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            );
          })}
        </div>
        <PaginationItem>
          <PaginationNext
            className={`${
              currentPage >= totalPages
                ? "pointer-events-none text-gray-300"
                : ""
            }`}
            href={createPageURL(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

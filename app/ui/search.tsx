"use client";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    // console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 700);

  return (
    <Input
      type="text"
      placeholder="Search movies..."
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      className="flex-grow"
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
}

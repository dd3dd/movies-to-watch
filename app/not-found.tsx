import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2 ">
      <FaceFrownIcon className="w-10" />
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <Button asChild>
        <Link
          href="/top-rated"
          className="mt-4 rounded-lg px-5 py-2 text-sm font-bold active:scale-[0.98] "
        >
          Back
        </Link>
      </Button>
    </main>
  );
}

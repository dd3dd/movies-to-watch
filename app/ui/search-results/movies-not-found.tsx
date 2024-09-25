import { FaceFrownIcon } from "@heroicons/react/24/outline";
export default function MoviesNotFound() {
  return (
    <div className="flex flex-col items-center mt-8">
      <FaceFrownIcon className="w-10" />
      <h2 className="mt-4 text-xl font-semibold">No Movies Found.</h2>
    </div>
  );
}

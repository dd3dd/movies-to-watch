import { fetchMovieDetails } from "@/app/lib/data";
import Image from "next/image";
import Details from "@/app/ui/movie-details/details";
import Casts from "@/app/ui/movie-details/casts";
import defaultImage from "@/public/default.png";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const movies = await fetchMovieDetails(id);
  if (!movies) notFound();
  const { poster_path } = movies;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3">
          <Image
            className="rounded-xl"
            priority
            width={780}
            height={780}
            src={poster_path || defaultImage}
            alt="poster"
          />
        </div>
        <Details id={id} />
      </div>
      <Casts id={id} />
    </div>
  );
}

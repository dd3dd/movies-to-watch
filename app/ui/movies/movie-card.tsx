import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Movie } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";
import defaultImage from "@/public/default.png";
import LikeButton from "../like-button";
export default function MovieCard({
  movie,
  selectedCard = null,
  index,
}: {
  movie: Movie;
  selectedCard?: number | null; //  for draw a movie
  index?: number; //  for draw a movie
}) {
  const { id, title, release_date, vote_average, poster_path } = movie;
  return (
    <Card
      data-testid="movie-card"
      className={`relative cursor-pointer hover:bg-muted/50 transition-colors ${
        selectedCard !== null && selectedCard === index
          ? "border-4 border-yellow-400"
          : ""
      }`}
    >
      <Link href={`/movie/${id}`}>
        <CardContent className="px-0 pb-4">
          <Image
            className="rounded-xl"
            priority
            width={780}
            height={780}
            src={poster_path || defaultImage}
            alt="poster"
          />
        </CardContent>

        <CardContent className="text-xl font-bold pb-2">
          <p className="overflow-hidden">{title}</p>
        </CardContent>
        <CardContent className="flex justify-between pb-12">
          <div className="flex items-center pb-1">
            <StarIcon className="size-6 mr-1 text-[#FFDF00]" />
            <p>{vote_average}</p>
          </div>
          <p>{release_date}</p>
        </CardContent>
        <CardFooter className="absolute p-3 bottom-0 right-0">
          <LikeButton movie={movie} />
        </CardFooter>
      </Link>
    </Card>
  );
}

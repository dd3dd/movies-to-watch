"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Movie } from "@/lib/definitions";
import Image from "next/image";
export default function MovieCard({ movie }: { movie: Movie }) {
  const { id, title, release_date, vote_average, poster_path } = movie;
  return (
    <Card className="relative cursor-pointer hover:bg-muted/50 transition-colors">
      <CardContent className="px-0 pb-4">
        <Image
          className="rounded-xl"
          priority
          width={780}
          height={780}
          src={poster_path}
          alt="poster"
        />
      </CardContent>

      <CardContent className="text-xl font-bold pb-2">
        <p className="overflow-hidden">{title}</p>
      </CardContent>
      <CardContent className="flex justify-between pb-12">
        <div className="flex items-center pb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FFDF00"
            className="size-6 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>

          <p>{vote_average}</p>
        </div>
        <p>{release_date}</p>
      </CardContent>
      <CardFooter className="absolute p-3 bottom-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </CardFooter>
    </Card>
  );
}

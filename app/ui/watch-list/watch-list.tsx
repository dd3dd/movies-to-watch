import { Movie, SortKey } from "@/app/lib/definitions";
import { sortMovies } from "@/app/lib/utils";
import { Button } from "@/components/ui/button";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import MovieCard from "../movies/movie-card";
export default function WatchList({
  favoriteMovies,
  sort_by,
}: {
  favoriteMovies: Movie[];
  sort_by: SortKey;
}) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const sortedMovies = sortMovies(favoriteMovies, sort_by);
  useEffect(() => {
    let timer: NodeJS.Timeout | number;
    if (isDrawing) {
      timer = setInterval(() => {
        setSelectedCard(Math.floor(Math.random() * sortedMovies.length));
      }, 150);

      setTimeout(() => {
        clearInterval(timer);
        setIsDrawing(false);
        setSelectedCard(Math.floor(Math.random() * sortedMovies.length));
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isDrawing]);

  return (
    <>
      <Button
        disabled={isDrawing}
        onClick={() => setIsDrawing(true)}
        variant="outline"
        className="mb-4"
      >
        <FaceSmileIcon className="w-5 mr-1" />
        Choose One
      </Button>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {sortedMovies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            selectedCard={selectedCard}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

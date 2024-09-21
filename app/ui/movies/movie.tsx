"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Movie({
  movie,
}: {
  movie: {
    id: number;
    title: string;
    year: number;
    rating: number;
    director: string;
    description: string;
  };
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
          <CardHeader>
            <CardTitle className="line-clamp-1">{movie.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
          </CardContent>
          <CardFooter>
            <Button
              //   variant={
              //     watchList.includes(movie.id) ? "secondary" : "outline"
              //   }
              onClick={(e) => {
                e.stopPropagation();
                // toggleWatchList(movie.id);
              }}
              className="w-full"
            >
              {/* {watchList.includes(movie.id)
            ? "Remove from Watch List"
            : "Add to Watch List"} */}
            </Button>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mb-2">{movie.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <strong>Year:</strong> {movie.year}
        </DialogDescription>
        <DialogDescription>
          <strong>Director:</strong> {movie.director}
        </DialogDescription>
        <DialogDescription>
          <strong>Rating:</strong> {movie.rating}
        </DialogDescription>
        <DialogDescription>
          <strong>Description:</strong> {movie.description}
        </DialogDescription>
        <div className="mt-4">
          <Button
            // onClick={() => toggleWatchList(movie.id)}
            // variant={watchList.includes(movie.id) ? "secondary" : "default"}
            className="w-full"
          >
            {/* {watchList.includes(movie.id)
          ? "Remove from Watch List"
          : "Add to Watch List"} */}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

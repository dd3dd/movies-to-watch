"use client";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { addFavoriteMovie, deleteFavoriteMovie } from "../lib/db";
import { useUserContext } from "../user-provider";
import { Movie } from "../lib/definitions";
import { favoriteExist } from "../lib/utils";
import Spinner from "./spinner";

export default function LikeButton({ movie }: { movie: Movie }) {
  const { id } = movie;
  const { user, favoriteMovies, setFavoriteMovies, favoriteMoviesLoading } =
    useUserContext();

  const exists = favoriteExist(id, favoriteMovies);

  const onClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!user) return;
    if (exists) {
      const newArray = favoriteMovies.filter((movie) => movie.id !== id);
      setFavoriteMovies(newArray);
      await deleteFavoriteMovie(user.email ?? "", id);
    } else {
      setFavoriteMovies((prev) => [...prev, movie]);
      await addFavoriteMovie(user.email ?? "", movie);
    }
  };
  return (
    <button onClick={onClick} className="active:scale-[0.90] duration-200">
      {favoriteMoviesLoading ? (
        <Spinner />
      ) : exists ? (
        <SolidHeartIcon className="size-8 text-red-600 " />
      ) : (
        <OutlineHeartIcon className="size-8" />
      )}
    </button>
  );
}

"use client";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { addFavoriteMovie, deleteFavoriteMovie } from "../lib/db";
import { useUserContext } from "../user-provider";
import { Movie } from "../lib/definitions";
import { favoriteExist } from "../lib/utils";
import { fetchFavoriteMovies } from "../lib/db";

export default function LikeButton({ movie }: { movie: Movie }) {
  const { id } = movie;
  const { user, favoriteMovies, setFavoriteMovies } = useUserContext();
  const exists = favoriteExist(id, favoriteMovies);

  const fetchMovies = async () => {
    const movies = await fetchFavoriteMovies(user?.email ?? "");
    setFavoriteMovies(movies || []);
  };
  const onClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!user) return;
    if (exists) {
      await deleteFavoriteMovie(user.email ?? "", id);
    } else {
      await addFavoriteMovie(user.email ?? "", movie);
    }
    await fetchMovies();
  };
  return (
    <button onClick={onClick} className="active:scale-[0.90] duration-200">
      {exists ? (
        <SolidHeartIcon className="size-8 text-red-600 " />
      ) : (
        <OutlineHeartIcon className="size-8" />
      )}
    </button>
  );
}

"use client";
import { useAuth } from "../lib/useAuth";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { addFavoriteMovie } from "../lib/db";
export default function LikeButton({ movieId }: { movieId: number }) {
  const { user } = useAuth();

  const onClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!user) return;
    await addFavoriteMovie(user.email ?? "", movieId);
  };
  return (
    <button onClick={onClick} className="active:scale-[0.90] duration-200">
      {user ? (
        <SolidHeartIcon className="size-8 text-red-600 " />
      ) : (
        <OutlineHeartIcon className="size-8" />
      )}
    </button>
  );
}

"use client";
import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase";
import { fetchFavoriteMovies } from "./lib/db";
import { Movie, UserContextType } from "./lib/definitions";
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [favoriteMoviesLoading, setFavoriteMoviesLoading] = useState(true);

  const value = {
    user,
    setUser,
    loading,
    favoriteMovies,
    favoriteMoviesLoading,
    setFavoriteMoviesLoading,
    setFavoriteMovies,
  };
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false);
  //   });
  //   return () => unsubscribe();
  // }, []);
  // useEffect(() => {
  //   const fetch = async () => {
  //     if (!user && !loading) {
  //       setFavoriteMovies([]);
  //       setFavoriteMoviesLoading(false);
  //       return;
  //     }
  //     if (user) {
  //       const movies = await fetchFavoriteMovies(user.email || "");
  //       setFavoriteMovies(movies ?? []);
  //       setFavoriteMoviesLoading(false);
  //     }
  //   };
  //   fetch();
  // }, [user, loading]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("context undefined");
  }
  return context;
};

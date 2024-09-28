import { db } from "@/firebase";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { Movie } from "./definitions";
export async function addUser(email: string, name: string) {
  try {
    await addDoc(collection(db, "users"), {
      email,
      name,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function getUserDocByEmail(email: string) {
  const usersCollectionRef = collection(db, "users");
  const q = query(usersCollectionRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }
  return querySnapshot.docs[0].ref;
}
export async function userExist(email: string) {
  try {
    const userDocRef = await getUserDocByEmail(email);
    return userDocRef !== null;
  } catch (e) {
    console.error("Error checking user document: ", e);
  }
}
export async function addFavoriteMovie(email: string, movie: Movie) {
  try {
    const userDocRef = await getUserDocByEmail(email);
    if (!userDocRef) {
      return;
    }

    const favoriteMoviesCollectionRef = collection(
      userDocRef,
      "favoriteMovies"
    );
    const movieDocRef = doc(favoriteMoviesCollectionRef, `${movie.id}`);
    await setDoc(movieDocRef, movie);
  } catch (e) {
    console.error("Error adding favorite movie: ", e);
  }
}
export async function deleteFavoriteMovie(email: string, id: number) {
  try {
    const userDocRef = await getUserDocByEmail(email);
    if (!userDocRef) {
      return;
    }
    const favoriteMoviesCollectionRef = collection(
      userDocRef,
      "favoriteMovies"
    );
    const movieDocRef = doc(favoriteMoviesCollectionRef, `${id}`);
    await deleteDoc(movieDocRef);
  } catch (e) {
    console.error("Error deleting favorite movie: ", e);
  }
}
export async function fetchFavoriteMovies(email: string) {
  try {
    const userDocRef = await getUserDocByEmail(email);
    if (!userDocRef) {
      return;
    }

    const favoriteMoviesCollectionRef = collection(
      userDocRef,
      "favoriteMovies"
    );
    const favoriteMoviesSnapshot = await getDocs(favoriteMoviesCollectionRef);

    const favoriteMovies: Movie[] = favoriteMoviesSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: data.id,
        title: data.title,
        release_date: data.release_date,
        vote_average: data.vote_average,
        poster_path: data.poster_path,
      };
    });
    return favoriteMovies;
  } catch (e) {
    console.error("Error fecth favorite movies: ", e);
  }
}

import Movie from "./movie";

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    director: "Christopher Nolan",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    director: "Frank Darabont",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    director: "Christopher Nolan",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    director: "Quentin Tarantino",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    director: "Robert Zemeckis",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
  },
  {
    id: 6,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    director: "The Wachowskis",
    description:
      "A computer programmer discovers that reality as he knows it is a simulation created by machines to subjugate humanity, and joins a rebellion to overthrow them.",
  },
  {
    id: 7,
    title: "Goodfellas",
    year: 1990,
    rating: 8.7,
    director: "Martin Scorsese",
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
  },
  {
    id: 8,
    title: "The Silence of the Lambs",
    year: 1991,
    rating: 8.6,
    director: "Jonathan Demme",
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
  },
];
export default function MoviesList({ query }: { query: string }) {
  // console.log(query);
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

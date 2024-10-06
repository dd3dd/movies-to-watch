import { sortMovies } from "../app/lib/utils";
import { describe, it, expect } from "vitest";
import { Movie } from "../app/lib/definitions";
describe("sortMovies", () => {
  const mockMovies: Movie[] = [
    {
      id: 1,
      title: "Movie A",
      vote_average: 8,
      release_date: "2022-01-01",
      poster_path: "",
    },
    {
      id: 2,
      title: "Movie B",
      vote_average: 9,
      release_date: "2023-01-01",
      poster_path: "",
    },
    {
      id: 3,
      title: "Movie C",
      vote_average: 7,
      release_date: "2021-01-01",
      poster_path: "",
    },
  ];

  it("should sort by rating descending", () => {
    const sortedMovies = sortMovies(mockMovies, "rating_desc");
    expect(sortedMovies[0].vote_average).toBe(9);
    expect(sortedMovies[1].vote_average).toBe(8);
    expect(sortedMovies[2].vote_average).toBe(7);
  });

  it("should sort by rating ascending", () => {
    const sortedMovies = sortMovies(mockMovies, "rating_asc");
    expect(sortedMovies[0].vote_average).toBe(7);
    expect(sortedMovies[1].vote_average).toBe(8);
    expect(sortedMovies[2].vote_average).toBe(9);
  });

  it("should sort by release date descending", () => {
    const sortedMovies = sortMovies(mockMovies, "date_desc");
    expect(sortedMovies[0].release_date).toBe("2023-01-01");
    expect(sortedMovies[1].release_date).toBe("2022-01-01");
    expect(sortedMovies[2].release_date).toBe("2021-01-01");
  });

  it("should sort by release date ascending", () => {
    const sortedMovies = sortMovies(mockMovies, "date_asc");
    expect(sortedMovies[0].release_date).toBe("2021-01-01");
    expect(sortedMovies[1].release_date).toBe("2022-01-01");
    expect(sortedMovies[2].release_date).toBe("2023-01-01");
  });

  it("should sort by title descending", () => {
    const sortedMovies = sortMovies(mockMovies, "title_desc");
    expect(sortedMovies[0].title).toBe("Movie C");
    expect(sortedMovies[1].title).toBe("Movie B");
    expect(sortedMovies[2].title).toBe("Movie A");
  });

  it("should sort by title ascending", () => {
    const sortedMovies = sortMovies(mockMovies, "title_asc");
    expect(sortedMovies[0].title).toBe("Movie A");
    expect(sortedMovies[1].title).toBe("Movie B");
    expect(sortedMovies[2].title).toBe("Movie C");
  });
});

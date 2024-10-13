import { render, screen } from "@testing-library/react";
import MovieCard from "@/app/ui/movies/movie-card";
import { Movie } from "@/app/lib/definitions";
import { vi } from "vitest";

vi.mock("@/app/ui/like-button", () => ({
  default: vi.fn().mockReturnValue(() => <button>Like</button>),
}));

const mockMovies: Movie[] = [
  {
    id: 0,
    title: "Mock Movie",
    release_date: "2021-01-01",
    vote_average: 8.5,
    poster_path: "/mockmovie.jpg",
  },
];

describe("MovieCard", () => {
  it("renders movie main info correctly", () => {
    render(<MovieCard movie={mockMovies[0]} />);
    expect(screen.getByText("Mock Movie")).toBeInTheDocument();
    expect(screen.getByText("8.5")).toBeInTheDocument();
    expect(screen.getByText("2021-01-01")).toBeInTheDocument();

    const image = screen.getByAltText("poster");
    expect(image).toBeInTheDocument();
  });

  it("renders with selected card style", () => {
    render(<MovieCard movie={mockMovies[0]} selectedCard={1} index={1} />);

    const card = screen.getByTestId("movie-card");
    expect(card).toHaveClass("border-4 border-yellow-400");
  });
});

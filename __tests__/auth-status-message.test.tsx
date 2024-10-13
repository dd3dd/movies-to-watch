import { render, screen } from "@testing-library/react";
import AuthStatusMessage from "@/app/ui/auth/auth-status-message";
import { useUserContext } from "@/app/user-provider";
import { vi } from "vitest";
import { UserContextType } from "@/app/lib/definitions";

vi.mock("@/app/user-provider", () => ({
  useUserContext: vi.fn(),
}));
vi.mock("firebase/auth", () => ({
  getAuth: vi.fn(),
}));

describe("AuthStatusMessage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders Spinner when loading", () => {
    vi.mocked(useUserContext).mockReturnValue({
      user: null,
      loading: true,
    } as UserContextType);
    render(<AuthStatusMessage />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("renders username and routes when user is logged in", () => {
    const mockUser = { displayName: "dd3dd" };
    vi.mocked(useUserContext).mockReturnValue({
      user: mockUser,
      loading: false,
    } as UserContextType);
    render(<AuthStatusMessage />);

    expect(screen.getByText("dd3dd")).toBeInTheDocument();
    expect(screen.getByText("Top Rated")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Watch List")).toBeInTheDocument();
  });

  it("renders google login button and Continue as Guest button when user is not logged in", () => {
    vi.mocked(useUserContext).mockReturnValue({
      user: null,
      loading: false,
    } as UserContextType);
    render(<AuthStatusMessage />);

    expect(screen.getByText("Continue as Guest")).toBeInTheDocument();
    const button = screen.getByRole("button", {
      name: /Continue with Google Account/,
    });
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});

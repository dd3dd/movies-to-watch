// AuthStatusMessage.test.tsx
import { render, screen } from "@testing-library/react";
import AuthStatusMessage from "@/app/ui/auth/auth-status-message";
import { useUserContext } from "@/app/user-provider";
import { vi } from "vitest";


// 模擬 useUserContext
vi.mock("@/app/user-provider", () => ({
  useUserContext: vi.fn(),
}));

describe("AuthStatusMessage", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // 清除所有的 mock 狀態
  });

  it("renders Spinner when loading", () => {
    // 模擬 loading 狀態
    vi.mocked(useUserContext as any).mockReturnValue({ user: null,
        loading: true})
        
    // (useUserContext as any).mockReturnValue({
    //   user: null,
    //   loading: true,
    // });

    render(<AuthStatusMessage />);
    
    // 檢查是否渲染 Spinner
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

//   it("renders Loggedin when user is logged in", () => {
//     // 模擬已登錄的用戶
//     const mockUser = { displayName: "John Doe" }; // 這是用戶的模擬數據
//     (useUserContext as any).mockReturnValue({
//       user: mockUser,
//       loading: false,
//     });

//     render(<AuthStatusMessage />);

//     // 檢查是否渲染已登錄狀態
//     expect(screen.getByText("Hello!")).toBeInTheDocument();
//     expect(screen.getByText("John Doe")).toBeInTheDocument();
//     expect(screen.getByText("Continue as Guest")).toBeInTheDocument(); // 確認是否出現其他鏈接選項
//   });

//   it("renders NotLoggedin when user is not logged in", () => {
//     // 模擬未登錄的狀態
//     (useUserContext as any).mockReturnValue({
//       user: null,
//       loading: false,
//     });

//     render(<AuthStatusMessage />);

//     // 檢查是否渲染未登錄狀態
//     expect(screen.getByText("or")).toBeInTheDocument();
//     expect(screen.getByRole("button", { name: /continue as guest/i })).toBeInTheDocument(); // 確認“Continue as Guest”按鈕存在
//   });
});

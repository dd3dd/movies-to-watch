import type { Metadata } from "next";
import "./globals.css";
import UserProvider from "./user-provider";

export const metadata: Metadata = {
  title: "Movies to watch",
  description: "movies to watch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}

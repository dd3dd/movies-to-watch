"use client";

import { useAuth } from "../lib/useAuth";
import SigninRequired from "../ui/auth/signin-required";

export default function Page() {
  const { user } = useAuth();
  console.log(user);
  if (!user) return <SigninRequired />;
  return <div></div>;
}

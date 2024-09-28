"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/app/user-provider";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
export default function AuthButton() {
  const { user, loading } = useUserContext();
  if (loading) {
    return <p className="h-9">Loading...</p>;
  }
  return user ? <SignoutButton /> : <SigninButton />;
}

export function SigninButton() {
  return (
    <Button variant="outline" asChild>
      <Link href={"/"}>
        <ArrowRightEndOnRectangleIcon className="w-5 mr-1" />
        Sign In
      </Link>
    </Button>
  );
}
export function SignoutButton() {
  const { setUser } = useUserContext();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign out error", error);
    }
  };
  return (
    <Button onClick={handleSignOut} variant="outline">
      <ArrowRightStartOnRectangleIcon className="w-5 mr-1" />
      Sign Out
    </Button>
  );
}

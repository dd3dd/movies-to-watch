"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/lib/useAuth";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
export default function AuthButton() {
  const { user, loading } = useAuth();
  if (loading) {
    return <p>Loading...</p>;
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
  const handleSignOut = async () => {
    try {
      await signOut(auth);
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

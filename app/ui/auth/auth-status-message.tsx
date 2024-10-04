"use client";
import { useUserContext } from "@/app/user-provider";
import { CardContent } from "@/components/ui/card";
import GoogleSigninButton from "./google-signin-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LinkOptions from "../link-options";
import { User } from "firebase/auth";
import Spinner from "../spinner";

export default function AuthStatusMessage() {
  const { user, loading } = useUserContext();
  if (loading)
    return (
      <div className="p-4 flex justify-center">
        <Spinner />
      </div>
    );
  return user ? <Loggedin user={user} /> : <NotLoggedin />;
}

function Loggedin({ user }: { user: User }) {
  return (
    <>
      <CardContent className="text-center">
        Hello! <p className="font-semibold">{user.displayName}</p>
      </CardContent>
      <CardContent className="flex flex-col gap-4">
        <LinkOptions option="top-rated" />
        <LinkOptions option="search" />
        <LinkOptions option="watch-list" />
      </CardContent>
    </>
  );
}
function NotLoggedin() {
  return (
    <>
      <CardContent>
        <GoogleSigninButton />
      </CardContent>
      <CardContent className="text-center">or</CardContent>
      <CardContent className="text-center">
        <Button asChild className="w-full" variant="outline">
          <Link href={"/top-rated"}>Continue as Guest</Link>
        </Button>
      </CardContent>
    </>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import googleLogo from "@/public/google.png";
import { auth, GoogleAuthProvider, signInWithPopup } from "@/firebase";
import { addUser, userExist } from "@/app/lib/db";

export default function GoogleSigninButton() {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      if (result) {
        const { email, displayName } = result.user;
        if (!email) {
          console.error("Invalid email returned from Google authentication");
          return;
        }
        const exist = await userExist(email);
        if (!exist) {
          await addUser(email, displayName ?? "Unknown User");
        }
      }
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };
  return (
    <Button onClick={handleGoogleLogin} className="w-full" variant="outline">
      <Image
        className="mr-4"
        src={googleLogo}
        width={24}
        height={24}
        alt="google-logo"
      />
      Continue with Google Account
    </Button>
  );
}

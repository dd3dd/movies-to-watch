import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import GoogleSigninButton from "./ui/auth/google-signin-button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F7F7] ">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Movies To Watch
          </CardTitle>
        </CardHeader>
        <CardContent>
          <GoogleSigninButton />
        </CardContent>
        <CardContent className="text-center">或</CardContent>
        <CardContent className="text-center">
          <Button asChild className="w-full" variant="outline">
            <Link href={"/top-rated"}>以訪客身份繼續</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

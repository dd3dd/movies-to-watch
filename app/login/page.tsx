import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import google from "./google.png";
import Link from "next/link";

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
          <Button className="w-full" variant="outline">
            <Image
              className="mr-4"
              src={google}
              width={24}
              height={24}
              alt="google-logo"
            />
            使用 Google 帳號繼續
          </Button>
        </CardContent>
        <CardContent className="text-center">或</CardContent>
        <CardContent className="text-center">
          <Button asChild className="w-full" variant="outline">
            <Link href={"/"}>以訪客身份繼續</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

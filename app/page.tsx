import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import AuthStatusMessage from "./ui/auth/auth-status-message";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F7F7] ">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Movies To Watch
          </CardTitle>
        </CardHeader>
        <AuthStatusMessage />
      </Card>
    </div>
  );
}

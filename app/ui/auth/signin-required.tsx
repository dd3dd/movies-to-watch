import {
  FaceSmileIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/outline";
import LinkOptions from "../link-options";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function SigninRequired() {
  return (
    <main className="max-w-7xl mx-auto p-4 flex flex-col items-center mt-12 mb-4">
      <FaceSmileIcon className="w-10 mb-4" />
      <h2 className="mb-4 text-xl font-semibold">
        Please sign in to use the watch list feature!
      </h2>
      <div className="mb-4">
        <Button variant="outline" asChild>
          <Link href={"/"}>
            <ArrowRightEndOnRectangleIcon className="w-5 mr-1" />
            Sign In
          </Link>
        </Button>
      </div>
      <div className="flex gap-4">
        <LinkOptions option="top-rated" />
        <LinkOptions option="search" />
      </div>
    </main>
  );
}

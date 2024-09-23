import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { fetchMovieCredits } from "@/lib/data";

export default async function Casts({ id }: { id: string }) {
  const { actors } = await fetchMovieCredits(id);
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Cast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {actors.map((actor, index) => (
          <Card key={actor.id}>
            <CardContent className="flex items-center p-6">
              <Avatar className="w-28 h-28 mr-6">
                <AvatarImage asChild src={actor.profile_path}>
                  <Image
                    src={
                      actor.profile_path ||
                      "https://avatars.githubusercontent.com/u/85333339?v=4"
                    }
                    width={300}
                    height={300}
                    alt={actor.name}
                  />
                </AvatarImage>
                <AvatarFallback>{`Actor ${index + 1}`}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">{actor.name}</h3>
                <p className="text-gray-600">{actor.character}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

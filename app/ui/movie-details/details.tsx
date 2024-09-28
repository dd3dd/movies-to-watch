import { Badge } from "@/components/ui/badge";
import { StarIcon } from "@heroicons/react/24/solid";
import {
  ClockIcon,
  CalendarIcon,
  UserIcon,
  DocumentChartBarIcon,
  CurrencyDollarIcon,
  TagIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { fetchMovieDetails, fetchMovieCredits } from "@/app/lib/data";

export default async function Details({ id }: { id: string }) {
  const details = await fetchMovieDetails(id);
  if (!details) return;
  const {
    title,
    vote_average,
    release_date,
    overview,
    genres,
    runtime,
    tagline,
    budget,
    revenue,
    status,
  } = details;

  const { director, screenplay } = await fetchMovieCredits(id);
  const infoData = [
    {
      icon: InformationCircleIcon,
      label: "Status:",
      value: status,
    },
    {
      icon: CalendarIcon,
      label: "Release Date: ",
      value: release_date,
    },
    {
      icon: DocumentChartBarIcon,
      label: "Budget: ",
      value: budget,
    },
    {
      icon: CurrencyDollarIcon,
      label: "Revenue: ",
      value: revenue,
    },
  ];
  return (
    <div className="w-full lg:w-2/3 ">
      {/* title & tagline */}
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {tagline ? <p className="opacity-70 italic mb-4">{tagline}</p> : null}

      {/* runtime & rate */}
      <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center">
          <ClockIcon className="size-6 mr-1" />
          <span>{runtime} minutes</span>
        </div>
        <div className="flex items-center">
          <StarIcon className="size-6 mr-1 text-[#FFDF00]" />
          <span>{vote_average} / 10</span>
        </div>
      </div>

      {/* director & screenplay */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Director</h2>
        <div className="flex items-center">
          <UserIcon className="size-6 mr-2" />
          <span className="text-lg">{director}</span>
        </div>
      </div>
      {screenplay ? (
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Screenplay</h2>
          <div className="flex items-center">
            <UserIcon className="size-6 mr-2" />
            <span className="text-lg">{screenplay}</span>
          </div>
        </div>
      ) : null}

      {/* overview & genres */}
      <h2 className="text-2xl font-semibold mb-2">Overview</h2>
      <p className="mb-6">{overview}</p>

      <div className="flex items-center mb-6">
        <TagIcon className="w-5 mr-2" />
        <span className="font-semibold mr-2">Genres: </span>
        <div className="flex gap-2">
          {genres.map((genre: { id: number; name: string }) => (
            <Badge key={genre.id} variant="secondary">
              {genre.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Additional Movie Information */}
      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {infoData.map((item) => (
          <div key={item.label} className="flex items-center">
            <item.icon className="w-5 mr-2" />
            <span className="font-semibold mr-2">{item.label}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

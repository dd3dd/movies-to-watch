export const sortMap = {
  rating_desc: "vote_average.desc",
  rating_asc: "vote_average.asc",
  date_desc: "primary_release_date.desc",
  date_asc: "primary_release_date.asc",
  title_desc: "title.desc",
  title_asc: "title.asc",
};
export const sortOptions = [
  { value: "rating_desc", label: "Rating Descending" },
  { value: "rating_asc", label: "Rating Ascending" },
  { value: "date_desc", label: "Release Date Descending" },
  { value: "date_asc", label: "Release Date Ascending" },
  { value: "title_desc", label: "Title (Z-A)" },
  { value: "title_asc", label: "Title (A-Z)" },
];

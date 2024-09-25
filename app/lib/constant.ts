export const sortMap = {
  rating_desc: "vote_average.desc",
  rating_asc: "vote_average.asc",
  date_desc: "primary_release_date.desc",
  date_asc: "primary_release_date.asc",
  title_desc: "title.desc",
  title_asc: "title.asc",
};
export const sortOptions = [
  { value: "rating_desc", label: "評分(降序)" },
  { value: "rating_asc", label: "評分(升序)" },
  { value: "date_desc", label: "發行日期(降序)" },
  { value: "date_asc", label: "發行日期(升序)" },
  { value: "title_desc", label: "標題(Z-A)" },
  { value: "title_asc", label: "標題(A-Z)" },
];

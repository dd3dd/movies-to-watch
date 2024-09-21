export async function fetchDataByQuery(query: string) {}
export async function fetchPopularMovies() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_token}`,
      },
    };
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("Failed to fetch movies.");
  }
}

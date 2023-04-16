import axios from "axios";
import { API_KEY } from "../../config";

export async function FetchMovies(movieSearch: string) {
  try {
    const { data } = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: movieSearch,
        type: "movie",
        apikey: API_KEY,
      },
    });
    return data;
  } catch (err) {
    console.error("Failed to fetch data from OMDB");
  }
}

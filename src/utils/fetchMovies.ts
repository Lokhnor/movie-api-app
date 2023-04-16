import axios from "axios";
import { API_KEY } from "../../config";

export async function FetchMovies(movieSearch: string, getDetails: boolean) {
  try {
    const { data } = await axios.get("http://www.omdbapi.com/", {
      params: {
        [getDetails ? "t" : "s"]: movieSearch,
        type: "movie",
        apikey: API_KEY,
      },
    });
    console.log("fetched");
    return data;
  } catch (err) {
    console.error("Failed to fetch data from OMDB");
  }
}

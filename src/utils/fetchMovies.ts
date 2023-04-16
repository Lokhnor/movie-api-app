import axios from "axios";
import { API_KEY } from "../../config";

export async function FetchMovies() {
  try {
    const res = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: "godzilla",
        type: "movie",
        apikey: API_KEY,
      },
    });
    // console.log("You have fetched data from API", res.data);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch data from OMDB");
  }
}

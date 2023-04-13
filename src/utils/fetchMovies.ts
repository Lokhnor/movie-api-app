import axios from "axios";

export async function FetchMovies() {
  try {
    const res = await axios.get("http://www.omdbapi.com/", {
      params: {
        i: "tt0109040",
        type: "movie",
        apikey: "dac1d2ea",
      },
    });
    console.log("You have fetched data from API", res.data);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch data from OMDB");
  }
}

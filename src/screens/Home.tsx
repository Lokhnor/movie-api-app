import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { FetchMovies } from "../utils/fetchMovies";
import { Movie } from "../components/movie/Movie";

export function HomeScreen() {
  const [movieData, setMovieData] = useState<any>(null);

  async function handlePress() {
    const result = await FetchMovies();
    setMovieData(result);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Movies</Text>
      </View>
      {movieData && (
        <View style={styles.movieList}>
          <Movie movieData={movieData} />
        </View>
      )}
      <Button title="Fetch Movies" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    width: "100%",
    height: "92%",
    alignItems: "center",
  },
  movieList: {
    width: 180,
    height: 280,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DFE0E2",
  },
  header: {
    backgroundColor: "#224099",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "black",
    fontSize: 40,
  },
});

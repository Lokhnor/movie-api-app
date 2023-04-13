import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MoviePoster } from "../components/MoviePoster";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Movies</Text>
      </View>
      <View style={styles.movieList}>
        <View>
          <MoviePoster />
        </View>
        <View>
          <MoviePoster />
        </View>
      </View>
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
    display: "flex",
    flexWrap: "wrap",
    width: 360,
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

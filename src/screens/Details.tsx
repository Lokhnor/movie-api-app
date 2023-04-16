import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../types/types";
import { MoviePoster } from "../components/MoviePoster";
import { Container } from "../styles";
import { useEffect, useState } from "react";
import { FetchMovies } from "../utils/fetchMovies";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

export function Details(props: DetailsScreenProps) {
  const [movieDetails, setMovieDetails] = useState<any>(null);

  useEffect(() => {
    const runOnLoad = async () => {
      const cachedMovie = await AsyncStorage.getItem(
        (props.route.params as any).Title
      );
      if (cachedMovie) {
        setMovieDetails(JSON.parse(cachedMovie));
        console.log("using cache");
      } else {
        console.log("not using cache");
        const result = await FetchMovies(
          (props.route.params as any).Title,
          true
        );
        setMovieDetails(result);
        await AsyncStorage.setItem(result.Title, JSON.stringify(result));
      }
    };
    runOnLoad();
  }, []);

  return (
    <Container>
      <Spacer />
      <MoviePoster movieData={props.route.params} />
      {movieDetails && (
        <>
          <TextContent>Year: {movieDetails.Year}</TextContent>
          <TextContent>Director: {movieDetails.Director}</TextContent>
          <TextContent>Plot: {movieDetails.Plot}</TextContent>
          <TextContent>Imdb: {movieDetails.imdbRating}</TextContent>
        </>
      )}
    </Container>
  );
}

const TextContent = styled.Text`
  color: white;
`;

const Spacer = styled.View`
  margin-top: 10px;
`;

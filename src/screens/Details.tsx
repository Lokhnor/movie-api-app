import { Button, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import { MoviePoster } from "../components/movie-poster/MoviePoster";
import { Container } from "../styles";
import { useEffect, useState } from "react";
import { FetchMovieDetails } from "../utils/fetchMovieDetails";
import styled from "styled-components/native";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

export function Details(props: DetailsScreenProps) {
  const [movieDetails, setMovieDetails] = useState<any>(null);

  useEffect(() => {
    const runOnLoad = async () => {
      const result = await FetchMovieDetails((props.route.params as any).Title);
      setMovieDetails(result);
      console.log("inside Details screen: ", result);
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

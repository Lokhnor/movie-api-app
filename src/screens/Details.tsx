import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import { MoviePoster } from "../components/MoviePoster";
import { Container } from "../styles";
import { useEffect, useState } from "react";
import { FetchMovies } from "../utils/fetchMovies";
import styled from "styled-components/native";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

export function Details(props: DetailsScreenProps) {
  const [movieDetails, setMovieDetails] = useState<any>(null);

  useEffect(() => {
    const runOnLoad = async () => {
      const result = await FetchMovies((props.route.params as any).Title, true);
      setMovieDetails(result);
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

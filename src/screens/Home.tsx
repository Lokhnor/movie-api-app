import React, { useState } from "react";
import { Button } from "react-native";
import { FetchMovies } from "../utils/fetchMovies";
import { Movie } from "../components/movie/Movie";
import styled from "styled-components/native";

export function HomeScreen() {
  const [movieData, setMovieData] = useState<any>(null);

  async function handlePress() {
    const result = await FetchMovies();
    setMovieData(result);
  }

  return (
    <Container>
      <Header>
        <HeaderText>Movies</HeaderText>
      </Header>
      {movieData && (
        <>
          <MovieList>
            <Movie movieData={movieData} />
            <Movie movieData={movieData} />
            <Movie movieData={movieData} />
          </MovieList>
        </>
      )}
      <Button title="Fetch Movies" onPress={handlePress} />
    </Container>
  );
}

const Container = styled.View`
  background-color: grey;
  width: 100%;
  height: 92%;
  align-items: center;
`;

const Header = styled.View`
  background-color: #224099;
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text`
  color: black;
  font-size: 40px;
`;

const MovieList = styled.View`
  flex-wrap: wrap;
  width: 360px;
  height: 600px;
  justify-content: center;
  align-items: center;
  background-color: #dfe0e2;
`;

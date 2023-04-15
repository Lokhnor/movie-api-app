import React, { useState, useEffect } from "react";
import { Button, FlatList } from "react-native";
import { FetchMovies } from "../utils/fetchMovies";
import { Movie } from "../components/movie/Movie";
import styled from "styled-components/native";
import { mockData } from "../../mocks";

export function HomeScreen() {
  const [moviesDisplayed, setMoviesDisplayed] = useState<number>(2);
  const [movieData, setMovieData] = useState<object[]>([]);

  useEffect(() => {
    const fetchOnFirstLoad = async () => {
      // const result = await FetchMovies();
      // setMovieData(result);
      setMovieData(mockData.slice(0, moviesDisplayed));
    };
    fetchOnFirstLoad();
  }, []);

  function handleLoadMore() {
    setMoviesDisplayed(moviesDisplayed + 2);
    // fetch more movies from api
    setMovieData(mockData.slice(0, moviesDisplayed + 2));
  }

  const renderItem = ({ item }: { item: any }) => (
    <MovieList>
      <Movie key={item.imdbID} movieData={item} />
    </MovieList>
  );

  return (
    <Container>
      <Header>
        <HeaderText>Movies</HeaderText>
      </Header>
      <FlatList
        data={movieData}
        renderItem={renderItem}
        keyExtractor={(item) => (item as any).imdbID}
        numColumns={2}
      />
      <Button title="Load More" onPress={handleLoadMore} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: grey;
  align-items: center;
  width: 100%;
  height: 100%;
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
  flex: 0 0 50%;
  width: 100%;
  padding: 8px;
`;

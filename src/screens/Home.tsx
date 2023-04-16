import React, { useState, useEffect } from "react";
import { Button, FlatList, StatusBar } from "react-native";
import { FetchMovies } from "../utils/fetchMovies";
import { Movie } from "../components/movie/Movie";
import styled from "styled-components/native";

export function HomeScreen() {
  const [apiResults, setApiResults] = useState<object[]>([]);
  const [movieData, setMovieData] = useState<object[]>([]);
  const [moviesDisplayed, setMoviesDisplayed] = useState<number>(2);

  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const fetchOnFirstLoad = async () => {
      const result = await FetchMovies("godzilla");
      setApiResults(result.Search);
      setMovieData(result.Search.slice(0, moviesDisplayed));
    };
    fetchOnFirstLoad();
  }, []);

  async function handleLoadMore() {
    setMovieData(apiResults.slice(0, moviesDisplayed + 2));
    setMoviesDisplayed(moviesDisplayed + 2);
  }

  async function movieSearch() {
    const result = await FetchMovies(searchInput);
    console.log(result.Search[0]);
    setApiResults(result.Search);
    setMovieData(result.Search.slice(0, 2));
    setMoviesDisplayed(2);
  }

  const renderItem = ({ item }: { item: any }) => (
    <MovieList>
      <Movie key={item.imdbID} movieData={item} />
    </MovieList>
  );

  return (
    <Container>
      <StatusBar backgroundColor="#224099" barStyle="light-content" />
      <Header>
        <HeaderText>Movies</HeaderText>
      </Header>
      <MovieSearch
        onChangeText={setSearchInput}
        value={searchInput}
        placeholder="Search Movie"
        onSubmitEditing={movieSearch}
      ></MovieSearch>
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
  background-color: white;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Header = styled.View`
  background-color: #24295c;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${StatusBar.currentHeight}px;
`;

const HeaderText = styled.Text`
  color: #fffefe;
  font-size: 40px;
`;

const MovieSearch = styled.TextInput`
  background-color: white;
  border-radius: 10px;
  border-color: grey;
  border-width: 1px;
  padding: 4px;
  width: 98%;
  margin-top: 10px;
`;

const MovieList = styled.View`
  flex: 0 0 50%;
  width: 100%;
  padding: 4px;
`;

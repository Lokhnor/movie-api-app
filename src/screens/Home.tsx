import React, { useState, useEffect } from "react";
import { Button, FlatList, StatusBar } from "react-native";
import { FetchMovies } from "../utils/fetchMovies";
import { MoviePoster } from "../components/movie-poster/MoviePoster";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import { Pressable } from "react-native";
import { Container } from "../styles";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Movies">;

export function HomeScreen(props: HomeScreenProps) {
  const [apiResults, setApiResults] = useState<object[]>([]);
  const [movieData, setMovieData] = useState<object[]>([]);
  const [moviesDisplayed, setMoviesDisplayed] = useState<number>(2);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const fetchOnFirstLoad = async () => {
      const { Search } = await FetchMovies("godzilla", false);
      setApiResults(Search);
      setMovieData(Search.slice(0, moviesDisplayed));
    };
    fetchOnFirstLoad();
  }, []);

  async function handleLoadMore() {
    setMovieData(apiResults.slice(0, moviesDisplayed + 2));
    setMoviesDisplayed(moviesDisplayed + 2);
  }

  async function movieSearch() {
    if (searchInput) {
      const { Search } = await FetchMovies(searchInput, false);
      setApiResults(Search);
      setMovieData(Search.slice(0, 2));
      setMoviesDisplayed(2);
    }
  }

  const renderItem = ({ item }: { item: any }) => {
    // console.log(item);
    return (
      <MovieList>
        <Pressable onPress={() => props.navigation.push("Details", item)}>
          <MoviePoster key={item.imdbID} movieData={item} />
        </Pressable>
      </MovieList>
    );
  };

  return (
    <Container>
      <StatusBar backgroundColor="#224099" barStyle="light-content" />
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

import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import { MoviePoster } from "../components/movie/MoviePoster";
import styled from "styled-components/native";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

export function Details(props: DetailsScreenProps) {
  const movieData: any = props.route.params;
  // console.log(props.route.params);
  return (
    <Container>
      <Text>Movie Details: {movieData.Title}</Text>
      <MoviePoster movieData={movieData} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #24295c;
  align-items: center;
  width: 100%;
  height: 100%;
`;

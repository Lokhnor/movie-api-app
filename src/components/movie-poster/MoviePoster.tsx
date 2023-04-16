import { View } from "react-native";
import styled from "styled-components/native";

export function MoviePoster({ movieData }: any) {
  return (
    <>
      {movieData && (
        <Container>
          <View>
            <PosterImage
              source={{
                uri: movieData.Poster,
              }}
            />
          </View>
        </Container>
      )}
    </>
  );
}

const Container = styled.View`
  height: 274px;
  width: 185px;
`;

const PosterImage = styled.Image`
  height: 274px;
  width: 185px;
  background-color: black;
`;

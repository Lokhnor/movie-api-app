import { View } from "react-native";
import styled from "styled-components/native";

export function Movie({ movieData }: any) {
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
  flex: 1;
  padding: 8px;
  background-color: green;
`;

const PosterImage = styled.Image`
  height: 280px;
  width: 180px;
  background-color: red;
`;

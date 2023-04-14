import { View } from "react-native";
import styled from "styled-components/native";

export function Movie({ movieData }: any) {
  console.log("Here is your data: ");
  console.log("Here is your data 2: ", movieData.Awards);

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
  display: flex;
  height: 280px;
  width: 180px;
  background-color: grey;
`;

const PosterImage = styled.Image`
  height: 280px;
  width: 180px;
`;

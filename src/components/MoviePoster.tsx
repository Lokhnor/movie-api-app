import styled from "styled-components/native";

export function MoviePoster({ movieData }: any) {
  return (
    <>
      {movieData && (
        <Container>
          <PosterImage
            source={{
              uri: movieData.Poster,
            }}
          />
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

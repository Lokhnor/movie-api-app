import { View, StyleSheet, Image } from "react-native";

export function Movie({ movieData }: any) {
  console.log("Here is your data: ");
  console.log("Here is your data 2: ", movieData.Awards);

  return (
    <>
      {movieData && (
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: movieData.Poster,
              }}
            />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 280,
    width: 180,
    backgroundColor: "grey",
  },
  image: {
    height: 280,
    width: 180,
  },
});

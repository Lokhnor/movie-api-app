import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";

const PlaceHolderPoster: ImageSourcePropType = require("../../assets/testPoster.jpg");

export function MoviePoster() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={PlaceHolderPoster} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 280,
    width: 180,
    backgroundColor: "red",
  },
  image: {
    height: 280,
    width: 180,
  },
});

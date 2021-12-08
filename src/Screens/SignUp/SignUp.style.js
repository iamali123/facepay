import {
    StyleSheet,
    Dimensions,
  } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    loginVector: {
        width: "100%",
        height: windowHeight / 3,
        resizeMode: "contain",
        marginBottom: "1%",
      },
      bottomContent: {
        marginVertical: "5%",
      },
      checkbox: {
        alignSelf: "center",
      },
      mb: {
        marginBottom: "4%",
      },
      faceIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
      },
      faceButton: {
        position: "absolute",
        right: "5%",
        alignSelf: "center",
      },
});
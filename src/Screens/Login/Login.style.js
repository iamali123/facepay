import {
    StyleSheet,
    Dimensions,
  } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    innerContainer: {
        justifyContent: "center",
      },
      loginVector: {
        width: "100%",
        height: windowHeight / 3,
        resizeMode: "contain",
        marginBottom: "2%",
      },
      bottomContent: {
        marginTop: "15%",
        alignItems: "center",
      },
      mb: {
        marginBottom: 10,
      },
      loginFailedVector: {
        width: windowWidth - 40,
        height: windowHeight / 3,
        resizeMode: "contain",
        marginBottom: "5%",
      },
      LoginContent: {
        marginBottom: "10%",
        maxWidth: 595,
      },
      innerStyle: {
        textAlign: "center",
      },
      eyeButton: {
        position: "absolute",
        right: "20%",
        alignSelf: "center",
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
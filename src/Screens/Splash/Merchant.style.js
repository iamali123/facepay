import {
    StyleSheet,
    Dimensions,
  } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    merchantVector: {
        resizeMode: "contain",
        width: "100%",
        height: windowHeight / 3,
        marginBottom: 15,
      },
      image: {
        resizeMode: "contain",
        width: "100%",
        height: windowHeight / 6,
        marginBottom: 20,
      },
      content: {
        alignItems: "center",
        width: "100%",
      },
      innerStyle: {
        width: "100%",
        maxWidth: 300,
      },
      welcomeDesc: {
        marginBottom: 25,
        textAlign: "center",
      },
});

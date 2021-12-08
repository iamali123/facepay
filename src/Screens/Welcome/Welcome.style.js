import { StyleSheet,
   Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  loginVector: {
    width: "100%",
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "7%",
  },
  innerStyle: {
    textAlign: "center",
  },
});

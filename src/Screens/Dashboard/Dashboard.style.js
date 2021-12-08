import {
    StyleSheet,
    Dimensions,
  } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//Normal styles:
export default StyleSheet.create({
    card: {
      paddingTop: 60,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 15,
      width: "47%",
      borderRadius: 10,
      marginBottom: 20,
      // shadowOffset: {
      //   width: 0,
      //   height: 7,
      // },
      // shadowOpacity: 0.5,
      // shadowRadius: 9.51,
    },
    cardIcon: {
      position: "absolute",
      top: 15,
      right: 15,
      padding: 5,
      width: 28,
      height: 28,
    },
    textColor: {
      color: "#ffffff",
    },
  
    dollarImg: {
      backgroundColor: "#ffffff",
      padding: 10,
      borderRadius: 15,
    },
    img: {
      width: 28,
      height: 28,
    },
    amountColor: {
      color: "#E22020",
    },
  });
  
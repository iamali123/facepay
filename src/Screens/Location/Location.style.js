import {
    StyleSheet,
    Dimensions,
  } from "react-native";
  import color from '../../UI/Colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    dotsIcon: {
        width: 20,
        height: 8,
      },
      parentCategory: {
        marginBottom: 15,
        alignItems: "flex-start",
      },
    
      active: {
        backgroundColor: color.black,
        borderColor: color.black,
      },
      activeTextColor: {
        color: "#fff",
      },
      textColor: {
        color: color.black,
      },
      categoriesList: {
        flexDirection: "row",
        marginLeft: 25,
      },
      innerStyle: {
        marginBottom: 5,
        marginLeft: 25,
      },
      faceIcon: {
        width: 25,
        height: 25,
        resizeMode: "contain",
      },
      faceButton: {
        position: "absolute",
        right: 20,
        alignSelf: "center",
      },
      btnTextColor: {
        color: color.black,
      },
      rightCol: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "53%",
        paddingLeft: 10
      },
      leftCol: {
        width: "46%",
      },
      searchBar: {
        marginHorizontal: 25,
        marginTop: 20,
      },
      btnStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 6,
        paddingBottom: 2,
      },
});
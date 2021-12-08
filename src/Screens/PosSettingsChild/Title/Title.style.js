import {
    StyleSheet,
    Dimensions,
  } from "react-native";
  import color from '../../../UI/Colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    posContainer: {
        marginTop: 20,
        flex: 1,
      },
      categoriesList: {
        flexDirection: "row",
        marginLeft: 25,
        paddingBottom: 20,
      },
      mainWrapper: {
        alignItems: "center",
      },
    
      active: {
        backgroundColor: color.black,
      },
      activeTextColor: {
        color: "#fff",
      },
      textColor: {
        color: color.black,
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
    
      innerStyle: {
        marginLeft: 20,
        marginBottom: 5,
      },
      switchInner: {
        flexDirection: "row",
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 15,
      },
      rightCol: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "53%",
      },
      leftCol: {
        marginRight: 15,
        width: "50%",
        justifyContent: "center",
      },
      btnStyle: {
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 10,
        paddingBottom: 6,
      },
});
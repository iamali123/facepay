import {
    StyleSheet,
    Dimensions,
  } from "react-native";
  import color from '../../../UI/Colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    posContainer: {
        marginTop: "5%",
        flex: 1,
      },
      categoriesList: {
        flexDirection: "row",
        marginLeft: 25,
        paddingBottom: 20,
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
        alignItems: "flex-start",
        paddingBottom: 15,
      },
      rightCol: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "50%",
      },
      leftCol: {
        width: "50%",
        paddingRight: 10
      },
      btnStyle: {
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 10,
        paddingBottom: 6,
      },
});
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
      switchBlock: {
        marginBottom: 30,
        flex: 1,
        width: "100%",
      },
      switchRow: {
        borderColor: "#D8E0F3",
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
      },
      switchInner: {
        flexDirection: "row",
        alignItems: "flex-end",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: 15,
      },
      rightCol: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%",
        alignItems: "flex-start",
      },
      leftCol: {
        width: "50%",
      },
      btnStyle: {
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 10,
        paddingBottom: 6,
      },
});
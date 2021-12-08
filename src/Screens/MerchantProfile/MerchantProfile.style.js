import {
    StyleSheet,
    Dimensions,
  } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    col: {
        width: "50%",
        marginBottom: 15,
        paddingHorizontal: 20,
      },
      userImg: {
        resizeMode: "cover",
        // width: 90,
        // height: 90,
        width: windowWidth / 3,
        height: windowHeight / 6,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
      },
      infoContainer: {
        marginTop: "8%",
        width: windowWidth - 20,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      },
      addUserImg: {
        width: 20,
        height: 20,
      },
      addUserbtn: {
        position: "absolute",
        top: 10,
        right: 16,
      },
      dualField: {
        width: "46%",
      },
      mt: {
        marginTop: 15,
        marginBottom: 10,
        textAlign: "left",
      },
      faceIcon: {
        width: 22,
        height: 22,
        alignSelf: "center",
        resizeMode: "contain",
      },
      faceButton: {
        position: "absolute",
        right: 20,
        alignSelf: "center",
      },
      profileContainer:{
          flex: 1,
          alignItems: "center"
      }
});
import {
    StyleSheet,
    Dimensions,
  } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    profileContainer: {
        width: "100%",
      },
      profileBg: {
        width: windowWidth,
        height: windowHeight / 4,
        resizeMode: "cover",
        justifyContent: "flex-end",
        alignItems: "center",
      },
      col: {
        width: "50%",
      },
      userImg: {
        // resizeMode: "cover",
        // width: 90,
        // height: 90,
        width: windowWidth / 3,
        height: windowHeight / 6,
        borderRadius: 100,
      },
      infoContainer: {
        marginTop: "25%",
        width: windowWidth - 50,
      },
      accountContainer: {
        marginTop: "5%",
      },
      alignRight: {
        textAlign: "right",
        width: "50%",
        paddingRight: 15,
      },
      alignLeft: {
        textAlign: "left",
        width: "50%",
      },
      userImgBg: {
        width: windowWidth / 3,
        height: windowHeight / 6,
        marginBottom: -50,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        position: "relative",
      },
      accountHeading: {
        textAlign: "left",
        width: windowWidth - 50,
        marginTop: 15,
      },
      addUserImg: {
        width: 20,
        height: 20,
      },
      addUserbtn: {
        position: "absolute",
        top: 10,
        right: 10,
      },
      mb: {
        marginBottom: 10,
        alignItems: "flex-start",
      },
      formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50,
      },
});
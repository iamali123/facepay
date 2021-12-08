import {
    StyleSheet,
    Dimensions,
  } from "react-native";
  import color from '../../UI/Colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    loginVector: {
        width: windowWidth - 40,
        height: windowHeight / 3,
        resizeMode: "contain",
        marginBottom: "7%",
      },
      referralForm: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "row",
      },
      copyButton: {
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 50,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: "#292929",
        position: "absolute",
        right: 0,
        // top: 0,
        paddingTop: 6.5,
        paddingBottom: 6,
      },
      btnText: {
        color: "#fff",
        fontFamily: "PoppinsMedium",
        fontSize: 16,
        textAlign: "center",
      },
});
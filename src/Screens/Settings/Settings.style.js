import {
    StyleSheet,
    Dimensions,
  } from "react-native";
  import color from '../../UI/Colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    settingsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
      },
      itemsBlock: {
        alignItems: "center",
        paddingLeft: 22,
        paddingRight: 22,
        paddingTop: 25,
        paddingBottom: 20,
        borderColor: "#D8E0F3",
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        width: "33.333%",
      },
      pageImg: {
        maxWidth: 40,
        maxHeight: 40,
        marginBottom: 8,
        resizeMode: "contain",
      },
      noRightBorder: {
        borderRightWidth: 0,
      },
      noBottomBorder: {
        borderBottomWidth: 0,
      },
      alignText: {
        textAlign: "center",
      },
});
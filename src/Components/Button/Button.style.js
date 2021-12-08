import { StyleSheet } from "react-native";
import colors from "../../UI/Colors";
import themeFontSize from "../../UI/themeFontSizes"

export default StyleSheet.create({
  blueButtonMain: {
    backgroundColor: colors.black,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 0,
    color: "#fff",
    borderRadius: 50,
  },
  blueBtnText: {
    color: "#fff",
    fontFamily: "PoppinsMedium",
    fontSize: themeFontSize.large,
    textAlign: "center",
  },
  fullWidthBtn: {
    width: "100%",
    marginTop: 10,
  },
});

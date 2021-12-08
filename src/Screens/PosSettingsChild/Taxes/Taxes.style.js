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
        alignItems: "center",
        justifyContent: "center",
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
        alignItems: "center",
      },
      switchInner: {
        flexDirection: "row",
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 15,
        maxWidth: 595,
      },
      switchWrapper: {
        borderColor: "#3F466F",
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: "#fff",
        marginLeft: 10,
      },
      rightCol: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "53%",
      },
      leftCol: {
        paddingRight: 20,
        width: "50%",
      },
      innerStyle: {
        color: color.pelorous,
      },
      btnStyle: {
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 8,
        paddingBottom: 4,
      },
});
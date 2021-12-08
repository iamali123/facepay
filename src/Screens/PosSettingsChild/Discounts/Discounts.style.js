import {
    StyleSheet,
    Dimensions,
  } from "react-native";
  import color from '../../../UI/Colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
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
        marginRight: 15,
        width: "47%",
      },
      loginVector: {
        width: windowWidth - 40,
        height: windowHeight / 3,
        resizeMode: "contain",
        marginBottom: 50,
      },
      btnStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 6,
        paddingBottom: 2,
      },
      mb: {
        marginBottom: 15,
      },
});
import {
    StyleSheet,
  } from "react-native";

export default StyleSheet.create({
      switchBlock: {
        marginBottom: "4%",
        flex: 1,
        width: "100%",
      },
      switchInner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 20,
      },
      posList: {
        flex: 1,
        marginBottom: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      },
      posItem: {
        width: "48%",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 30,
        backgroundColor: "#ffffff",
        marginBottom: 15,
        borderRadius: 50,
        shadowColor: "#ADB6D9",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
      },
      posImg: {
        width: 35,
        height: 35,
        resizeMode: "contain",
        marginRight: 10,
      },
      switchWrapper: {
        borderColor: "#3F466F",
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: "#fff",
      },
});
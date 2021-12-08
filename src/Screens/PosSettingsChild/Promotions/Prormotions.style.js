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
      switchBlock: {
        // justifyContent: "center",
        // width: "100%",
        marginBottom: 20,
        flex: 1,
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: color.white,
        borderRadius: 5,
        // marginLeft: 20,
        // marginRight: 20,
        // maxWidth: 595,
        marginHorizontal: 20,
      },
      categoriesList: {
        flexDirection: "row",
        marginLeft: 25,
        paddingBottom: 15,
      },
      imageCol: {
        width: "20%",
      },
      btnCol: { marginTop: 10, flexDirection: "row", justifyContent: "flex-end" },
      leftCol: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      rightCol: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
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
      dateIcon:{
        width: 20,
        height: 20,
        resizeMode: "contain",
      },
      faceButton: {
        position: "absolute",
        right: 15,
        alignSelf: "center",
      },
      memberImg: {
        width: 70,
        height: "auto",
        resizeMode: "cover",
        marginRight: 8,
        borderRadius: 6,
      },
      innerStyle: {
        color: color.black,
        marginLeft: 20,
        marginBottom: 5,
      },
      triggerColor: {
        color: color.pelorous,
      },
      price: {
        paddingBottom: 15,
        color: "#129516",
      },
      btnStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 4,
      },
      innerContainer: {
        alignItems: "center",
        justifyContent: "center",
      },
      toolbarContainer: {
        paddingLeft: "5%",
        paddingRight: "5%",
        marginTop: "8%",
      },
      profileContainer: {
        width: "100%",
        alignItems: "center",
      },
      profileBg: {
        width: windowWidth - 25,
        height: windowHeight / 4,
        resizeMode: "cover",
        position: "relative",
      },
      infoContainer: {
        marginTop: "5%",
        width: windowWidth - 40,
      },
      dualField: {
        width: "46%",
      },
      switchInner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 15,
      },
      mainRow: {
        flexDirection: "row",
      },
      switchWrapper: {
        borderColor: "#3F466F",
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: "#fff",
      },
      textAlign: {
        textAlign: "center",
        marginBottom: 25,
      },
      contentCol: {
        flex: 0.3,
      },
      myStyle: {
        flexDirection: "row",
        position: "relative",
        paddingLeft: 0,
        paddingRight: 30,
        paddingTop: 5,
        paddingBottom: 8,
        flex: 1,
      },
      pickerStyle: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
      },
      inputInnerStyle: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
      },
      addUserbtn: {
        position: "absolute",
        top: -12,
        right: -6,
      },
      addUserImg: {
        width: 24,
        height: 24,
      },
});
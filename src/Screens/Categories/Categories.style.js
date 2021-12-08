import {
    StyleSheet,
    Dimensions,
  } from "react-native";
  import color from '../../UI/Colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
      checkbox: {
        alignSelf: "center",
      },
      addMoreWrapp: {
        marginTop: 15,
      },
      addMoreicon: {
        marginLeft: 10,
        width: 25,
        height: 25,
      },
      addMore: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
      },
      innerBtnStyle: {
        width: "47%",
        paddingLeft: 10,
        paddingRight: 10,
      },
      formContainer: {
        flex: 1,
        marginTop: "5%",
        marginBottom: "15%",
      },
      active: {
        backgroundColor: color.black,
        borderColor: color.black,
      },
      activeTextColor: {
        color: "#fff",
      },
      textColor: {
        color: color.black,
      },
      categoriesList: {
        flexDirection: "row",
        marginLeft: 25,
      },
      innerStyle: {
        marginBottom: 5,
        marginLeft: 25,
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
      searchBar: {
        marginHorizontal: 25,
        marginTop: 20,
      },
      rightCol: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "50%",
      },
      leftCol: {
        paddingRight: 15,
        width: "47%",
      },
      btnStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 6,
        paddingBottom: 2,
      },
      childbtnStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 6,
        paddingBottom: 2,
      },
      childCategory: {
        backgroundColor: color.white,
        paddingVertical: 10,
        paddingLeft: 20,
        paddingRight: 20,
      },
      parentCategory: {
        paddingHorizontal: 20,
        marginBottom: 10,
      },
      mainCategory: {
        marginBottom: 10,
      },
});
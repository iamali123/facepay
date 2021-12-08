import {
    StyleSheet,
    Dimensions,
  } from "react-native";
  import color from '../../UI/Colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    posContainer: {
        marginTop: 15,
        flex: 1,
      },
      switchBlock: {
        marginBottom: 10,
        flex: 1,
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
      },
      switchInner: {
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: color.white,
        borderRadius: 5,
      },
    
      memberImg: {
        width: 70,
        height: 70,
        resizeMode: "contain",
        borderRadius: 5,
      },
    
      dotsIcon: {
        width: 20,
        height: 8,
      },
      textColor: {
        color: "#49B7C4",
      },
    
      active: {
        backgroundColor: color.black,
        borderColor: color.black,
      },
      activeTextColor: {
        color: "#fff",
      },
    
      categoriesList: {
        flexDirection: "row",
        marginLeft: 10,
        paddingBottom: 15,
      },
      innerStyle: {
        marginBottom: 5,
        marginLeft: 25,
      },
      btnTextColor: {
        color: color.black,
      },
      rightCol: {
        flex: 0.5,
        display: "flex",
        alignItems: "flex-end",
      },
      btnStyle: {
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 4,
      },
      introCol: {
        flex: 0.5,
        paddingRight: 8,
      },
      profileBg: {
        width: windowWidth - 30,
        height: windowHeight / 4,
        resizeMode: "cover",
        justifyContent: "flex-end",
        paddingLeft: 25,
      },
      userImgWrapper: {
        width: 90,
        height: 90,
        marginBottom: -40,
      },
      userImg: {
        width: 90,
        height: 90,
        resizeMode: "cover",
        borderRadius: 5,
      },
      infoContainer: {
        marginTop: "20%",
      },
      dualField: {
        width: "46%",
      },
      pb: {
          paddingBottom: 20
      },
      addUserImg: {
        width: 20,
        height: 20,
      },
      addUserbtn: {
        position: "absolute",
        top: -10,
        right: -10,
      },
      faceIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
      },
      faceButton: {
        position: "absolute",
        right: "5%",
        alignSelf: "center",
      },
      datebtn:{
        position: "absolute",
        right: "5%",
        top: 10
      }
});
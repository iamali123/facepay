import {StyleSheet} from 'react-native';
import color from '../../UI/Colors';

export default StyleSheet.create({
    textColor: {
        color: color.black,
        marginBottom: 4,
      },
      btnTextColor: {
        color: color.eastbay,
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
        marginLeft: 25,
        paddingBottom: 15,
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
        width: "50%",
      },
      mb: {
        marginBottom: "7%",
        alignItems: "flex-end",
      },
      btnStyle: {
        marginTop: "10%",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 2,
        paddingBottom: 2,
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
      },
      inputStyle: {
        width: "47%",
      },
});
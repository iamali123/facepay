import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import color from "../../UI/Colors";
import { CommonActions } from "@react-navigation/native";
import MainButton from "../../Components/Button/MainButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class TransactionSuccessfull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSkip() {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: "PointOfSale",
          },
        ],
      })
    );
  }
  render() {
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Thank You"}
          textButton={true}
          nextText={"Skip"}
          onPressRightText={() => this.onSkip()}
        />

        <ScrollView overScrollMode="never">
          <View style={styles.formContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={styles.checkImg}
                source={require("../../../assets/images/round-check.png")}
              />
              <Text style={baseStyle.h1}>successful</Text>
            </View>
            <Text style={[baseStyle.text, styles.textalignment]}>
              Your payment has been received successfully.{"\n"} Do you want to
              print receipt?
            </Text>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/thank-you.png")}
            />

            <MainButton
              onPress={() => this.props.navigation.navigate("PrintReceipt")}
              btnText={"Print Receipt"}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default TransactionSuccessfull;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 20,
    marginBottom: 50,
  },
  loginVector: {
    width: windowWidth - 40,
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: 10,
  },
  innerStyle: {
    textAlign: "center",
  },
  checkImg: {
    width: 45,
    height: 45,
    resizeMode: "contain",
    marginRight: 10,
  },
  textColor: {
    color: color.pelorous,
    marginLeft: 15,
  },
  textalignment: {
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    maxWidth: 300,
  },
});

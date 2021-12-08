import * as React from "react";
import { View, Image, Text, Pressable, ScrollView } from "react-native";
import baseStyle from "../../UI/Style";
import { CommonActions } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { width } from "styled-system";
import MainButton from "../../Components/Button/MainButton";
import styles from "./Merchant.style";

class Merchant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToLogin() {
    // this.props.navigation.navigate("PointOfSale");
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: "Login",
          },
        ],
      })
    );
  }
  render() {
    return (
      <View style={baseStyle.welcomeContainer}>
        <Animatable.View animation="slideInDown" style={{ width: "100%" }}>
          <Image
            source={require("../../../assets/images/emoji.png")}
            style={styles.image}
          ></Image>
        </Animatable.View>
        <Animatable.View animation="slideInRight" style={{ width: "100%" }}>
          <Image
            source={require("../../../assets/images/merchant-vector.png")}
            style={styles.merchantVector}
          ></Image>
        </Animatable.View>
        <View style={styles.content}>
          <Animatable.View animation="slideInLeft">
            <Text style={baseStyle.h1}>Merchant</Text>
          </Animatable.View>
          <Text style={[baseStyle.text, styles.welcomeDesc]}>
            We are selling dreams. We are merchants of happiness.
          </Text>
          <Animatable.View animation="slideInLeft" style={styles.innerStyle}>
            <MainButton
              onPress={() => this.goToLogin()}
              btnText={"Getting Started"}
            />
          </Animatable.View>
        </View>
      </View>
    );
  }
}

export default Merchant;

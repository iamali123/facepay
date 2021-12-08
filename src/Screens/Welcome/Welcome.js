import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import { CommonActions } from "@react-navigation/native";
import MainButton from "../../Components/Button/MainButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import styles from "./Welcome.style";
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressSkip = async () => {
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
  };
  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Welcome"}
          textButton={true}
          nextText={"Skip"}
          onPressRightText={() => this.onPressSkip()}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.welcomeContainer}>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/merchant-welcome.png")}
            />
            <Text style={[baseStyle.text, styles.innerStyle]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>

            <MainButton
              onPress={() => this.onPressSkip()}
              btnText={"Complete"}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Welcome;

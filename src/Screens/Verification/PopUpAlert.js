import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import MainButton from "../../Components/Button/MainButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class PopUpAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressAccept = async () => {
    const { nextRoute } = this.props.route.params;
    if (nextRoute === "EditMerchantProfile") {
      this.props.navigation.navigate(nextRoute, {
        nextRoute: "SSNVerification",
      });
    } else if (nextRoute === "BusinessRegistration") {
      this.props.navigation.navigate(nextRoute, {
        nextRoute: "EditMerchantProfile",
      });
    }
    // this.props.navigation.dispatch(
    //   CommonActions.reset({
    //     index: 1,
    //     routes: [
    //       { name: "EditMerchantProfile" },
    //       {
    //         name: "Welcome",
    //       },
    //     ],
    //   })
    // );
  };

  render() {
    return (
      <>
      {/* Header Component */}
        <Header
          Title={"Verify Your Information"}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <View style={styles.LoginContent}>
              <Text style={[baseStyle.text, styles.innerStyle]}>
                Facepays needs to verify your identity to start{"\n"}taking
                payments, please use your legal name and{"\n"}home address, even
                if signing up as a business
              </Text>
            </View>

            <MainButton
              onPress={() => this.onPressAccept()}
              btnText={"Accept"}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default PopUpAlert;

const styles = StyleSheet.create({
  LoginContent: {
    marginBottom: "5%",
    maxWidth: 595,
  },
  innerStyle: {
    textAlign: "center",
  },
});

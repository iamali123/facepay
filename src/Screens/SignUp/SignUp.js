import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  CheckBox,
  ScrollView,
} from "react-native";
import baseStyle from "../../UI/Style";
import SignUpForm from "./SignUpForm";
import Header from "../../Components/Header/Header";
import MainButton from "../../Components/Button/MainButton";

import styles from "./SignUp.style";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessSelected: false,
      termsSelected: false,
      visible: false,
    };
  }

  _renderSinUpButton() {
    if (this.state.termsSelected) {
      return (
        <MainButton
          onPress={() => {
            if (this.state.businessSelected) {
              this.props.navigation.navigate("AccountVerification");
            } else {
              this.props.navigation.navigate("EmailVerification");
            }
          }}
          btnText={"Sign Up"}
        />
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          Title={"Sign Up"}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/sign-up.png")}
            />
            <SignUpForm />
            <View style={styles.bottomContent}>
              <View style={[baseStyle.row, styles.mb]}>
                <Text style={baseStyle.h5}>Sign up for a business</Text>
                <CheckBox
                  value={this.state.businessSelected}
                  onValueChange={(value) =>
                    this.setState({
                      businessSelected: value,
                    })
                  }
                  style={styles.checkbox}
                />
              </View>
              <View style={baseStyle.row}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 5,
                  }}
                >
                  <Text style={baseStyle.h5}>Please Accept </Text>
                  <Pressable
                    onPress={() =>
                      this.props.navigation.navigate("PrivacyPolicy")
                    }
                  >
                    <Text style={baseStyle.h5}>Privacy Policy</Text>
                  </Pressable>
                  <Text style={baseStyle.h5}> & </Text>
                  <Pressable
                    onPress={() => this.props.navigation.navigate("TermsOfUse")}
                  >
                    <Text style={baseStyle.h5}>Terms of Use</Text>
                  </Pressable>
                </View>
                <CheckBox
                  value={this.state.termsSelected}
                  onValueChange={(value) =>
                    this.setState({
                      termsSelected: value,
                    })
                  }
                  style={styles.checkbox}
                />
              </View>
            </View>
            {this._renderSinUpButton()}
          </View>
        </ScrollView>
      </>
    );
  }
}

export default SignUp;

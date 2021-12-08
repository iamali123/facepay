import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import styles from "./Login.style"

class LoginFailed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
      {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Login In Failed"}
        />
        <ScrollView overScrollMode="never">
          <View style={styles.formContainer}>
            <View style={styles.LoginContent}>
              <Text style={[baseStyle.text, styles.innerStyle]}>
                You've entered wrong email and password Please ensure have you
                registered? If you don't have sign up please.
              </Text>
            </View>
            <Image
              style={styles.loginFailedVector}
              source={require("../../../assets/images/loginfailed.png")}
            />
            <View style={styles.bottomContent}>
              <View style={{ flexDirection: "row" }}>
                <Text style={[baseStyle.text, styles.innerStyle]}>
                  Don’t you have an account?
                </Text>
                <Pressable
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text style={[baseStyle.text, styles.innerStyle]}>
                    Sign Up
                  </Text>
                </Pressable>
              </View>
              <Text style={[baseStyle.text, styles.innerStyle]}>
                Forgot Password?
              </Text>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default LoginFailed;


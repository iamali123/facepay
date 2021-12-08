import * as React from "react";
import LoginForm from "./LoginForm";
import { View, Image, Pressable, Text, ScrollView } from "react-native";
import baseStyle from "../../UI/Style";

import { CommonActions } from "@react-navigation/native";
import MainButton from "../../Components/Button/MainButton";
import styles from "./Login.style";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  login = async () => {
    // this.props.navigation.navigate("PointOfSale");
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
  componentDidMount() {}
  render() {
    return (
      <View style={[baseStyle.themeContainer, styles.innerContainer]}>
        <Image
          style={styles.loginVector}
          source={require("../../../assets/images/login-vector.png")}
        />
        <LoginForm navigation={this.props.navigation} />

        <MainButton onPress={() => this.login()} btnText={"Log In"} />

        <View style={styles.bottomContent}>
          <View style={[baseStyle.row, styles.mb]}>
            <Text style={baseStyle.h5}>Don’t you have an account? </Text>
            <Pressable onPress={() => this.props.navigation.navigate("SignUp")}>
              <Text style={baseStyle.h5}> Sign Up</Text>
            </Pressable>
          </View>
          <Pressable
            onPress={() => this.props.navigation.navigate("PasswordRecovery")}
          >
            <Text style={baseStyle.h5}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

export default Login;

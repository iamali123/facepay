import * as React from "react";
import { TextInput, View, Pressable, Image, StyleSheet } from "react-native";
import baseStyle from "../../UI/Style";
import styles from "./SignUp.style"

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      ShowConfirmPassword: true,
      ShowPassword: true,
    };
  }
  togglePasswordSwitch() {
    this.setState({ ShowPassword: !this.state.ShowPassword });
  }

  toggleConfirmPasswordSwitch() {
    this.setState({ ShowConfirmPassword: !this.state.ShowConfirmPassword });
  }
  render() {
    return (
      <>
        <TextInput
          style={baseStyle.input}
          value={this.state.email}
          placeholder="Email"
          placeholderTextColor="#292929"
          keyboardType="email-address"
          onChangeText={(value) => this.setState({ email: value })}
        />
        <View
          style={[
            baseStyle.input,
            {
              flexDirection: "row",
              position: "relative",
            },
          ]}
        >
          <TextInput
            style={{ width: "100%", paddingRight: 30 }}
            secureTextEntry={this.state.ShowPassword}
            value={this.state.password}
            placeholder="Password"
            placeholderTextColor="#292929"
            keyboardType="default"
            onChangeText={(value) => this.setState({ password: value })}
          />
          <Pressable
            style={styles.faceButton}
            onPress={() => {
              this.togglePasswordSwitch();
            }}
          >
            <Image
              style={styles.faceIcon}
              source={
                this.state.ShowPassword
                  ? require("../../../assets/images/password-hide.png")
                  : require("../../../assets/images/password-show.png")
              }
            ></Image>
          </Pressable>
        </View>
        <View
          style={[
            baseStyle.input,
            {
              flexDirection: "row",
              position: "relative",
            },
          ]}
        >
          <TextInput
            style={{ width: "100%", paddingRight: 30 }}
            secureTextEntry={this.state.ShowConfirmPassword}
            value={this.state.confirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor="#292929"
            keyboardType="default"
            onChangeText={(value) => this.setState({ confirmPassword: value })}
          />
          <Pressable
            style={styles.faceButton}
            onPress={() => {
              this.toggleConfirmPasswordSwitch();
            }}
          >
            <Image
              style={styles.faceIcon}
              source={
                this.state.ShowConfirmPassword
                  ? require("../../../assets/images/password-hide.png")
                  : require("../../../assets/images/password-show.png")
              }
            ></Image>
          </Pressable>
        </View>
      </>
    );
  }
}

export default SignUpForm;


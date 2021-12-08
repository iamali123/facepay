import * as React from "react";
import { TextInput, View, Pressable, Image } from "react-native";
import baseStyle from "../../UI/Style";
import styles from "./Login.style"
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    // this.onPress = this.onPress.bind(this);
    this.state = {
      email: "",
      password: "",
      ShowPassword: true,
      visible: false,
    };
  }

  toggleSwitch() {
    this.setState({ ShowPassword: !this.state.ShowPassword });
  }

  _renderEyeButton() {
    if (this.state.visible) {
      return (
        <Pressable
          style={styles.eyeButton}
          onPress={() => {
            this.toggleSwitch();
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
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <>
        <TextInput
          style={baseStyle.input}
          value={this.state.email}
          placeholder="Email"
          placeholderTextColor="#292929"
          keyboardType="default"
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
            style={{ width: "100%", paddingRight: "20%" }}
            secureTextEntry={this.state.ShowPassword}
            value={this.state.password}
            placeholder="Password"
            placeholderTextColor="#292929"
            keyboardType="default"
            onChangeText={(value) =>
              this.setState({ password: value, visible: true })
            }
          />
          <Pressable
            style={styles.faceButton}
            onPress={() => {
              this.props.navigation.navigate("FaceDetection");
            }}
          >
            <Image
              style={styles.faceIcon}
              source={require("../../../assets/images/faceIcon.png")}
            ></Image>
          </Pressable>
          {this._renderEyeButton()}
        </View>
      </>
    );
  }
}

export default LoginForm;


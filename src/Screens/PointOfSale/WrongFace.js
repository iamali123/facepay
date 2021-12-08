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
class WrongFace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Wrong Face"}
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
              style={styles.loginVector}
              source={require("../../../assets/images/wrong-face.png")}
            />
            <TextInput
              style={baseStyle.input}
              placeholder="Email"
              placeholderTextColor="#292929"
              keyboardType="default"
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

            <MainButton onPress={() => this.login()} btnText={"Save"} />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default WrongFace;

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
    marginBottom: "5%",
  },
  LoginContent: {
    marginBottom: "10%",
    maxWidth: 595,
  },
  bottomContent: {
    marginTop: "20%",
  },
  innerStyle: {
    textAlign: "center",
  },
});

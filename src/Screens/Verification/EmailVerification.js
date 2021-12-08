import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import MainButton from "../../Components/Button/MainButton";

class EmailVerification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verificationCode: "",
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
      pin5: "",
      ref1: React.createRef(),
      ref2: React.createRef(),
      ref3: React.createRef(),
      ref4: React.createRef(),
      ref5: React.createRef(),
    };
  }

  render() {
    return (
      <>
      {/* Header Component */}
        <Header
          Title={"Email Verification"}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollView overScrollMode="never">
          <View style={[baseStyle.themeContainer, styles.innerContainer]}>
            <View style={styles.LoginContent}>
              <Text style={[baseStyle.text, styles.innerStyle]}>
                We have sent a verification code to your{"\n"}registered email
                address.
              </Text>
            </View>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/account-verification.png")}
            />
            <View style={styles.bottomContent}>
              <Text style={baseStyle.text}>Enter your verification code</Text>
            </View>
            <View style={[styles.row, { marginBottom: 20 }]}>
              <TextInput
                ref={this.state.ref1}
                style={[baseStyle.input, styles.codeInput]}
                value={this.state.pin1}
                keyboardType="phone-pad"
                maxLength={1}
                multiline={false}
                // onKeyPress={(e) => {
                //   if (e.nativeEvent.key === "Backspace") {
                //     this.state.ref1.current.clear();
                //     // this.state.ref1.current.focus();
                //   }
                // }}
                onChangeText={(value) => {
                  this.setState({ pin1: value });
                  if (value) {
                    this.state.ref2.current.focus();
                  }
                }}
                blurOnSubmit={true}
              />
              <TextInput
                ref={this.state.ref2}
                style={[baseStyle.input, styles.codeInput]}
                value={this.state.pin2}
                keyboardType="phone-pad"
                maxLength={1}
                multiline={false}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    if (this.state.pin2 == "") {
                      this.state.ref1.current.focus();
                    }
                  }
                }}
                onChangeText={(value) => {
                  this.setState({ pin2: value });
                  if (value) {
                    this.state.ref3.current.focus();
                  }
                }}
                blurOnSubmit={true}
              />
              <TextInput
                ref={this.state.ref3}
                style={[baseStyle.input, styles.codeInput]}
                value={this.state.pin3}
                keyboardType="phone-pad"
                maxLength={1}
                multiline={false}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    if (this.state.pin3 == "") {
                      this.state.ref2.current.focus();
                    }
                  }
                }}
                onChangeText={(value) => {
                  this.setState({ pin3: value });
                  if (value) {
                    this.state.ref4.current.focus();
                  }
                }}
                blurOnSubmit={true}
              />
              <TextInput
                ref={this.state.ref4}
                style={[baseStyle.input, styles.codeInput]}
                value={this.state.pin4}
                keyboardType="phone-pad"
                maxLength={1}
                multiline={false}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    if (this.state.pin4 == "") {
                      this.state.ref3.current.focus();
                    }
                  }
                }}
                onChangeText={(value) => {
                  this.setState({ pin4: value });
                }}
                blurOnSubmit={true}
              />
            </View>

            <MainButton
              onPress={() => {
                this.setState(
                  {
                    verificationCode:
                      this.state.pin1 +
                      this.state.pin2 +
                      this.state.pin3 +
                      this.state.pin4,
                  },
                  () => console.log(this.state.verificationCode)
                );
                this.props.navigation.navigate("PopUpAlert", {
                  nextRoute: "EditMerchantProfile",
                });
                this.setState({
                  pin1: "",
                  pin2: "",
                  pin3: "",
                  pin4: "",
                });
              }}
              btnText={"Next"}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default EmailVerification;

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  toolbarContainer: { paddingLeft: "5%", paddingRight: "5%" },
  loginVector: {
    width: 171,
    height: 171,
    resizeMode: "contain",
    marginBottom: "5%",
  },
  LoginContent: {
    marginBottom: "5%",
    maxWidth: 595,
  },
  bottomContent: {
    marginTop: "1%",
    textAlign: "center",
  },
  topBar: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    width: "100%",
    marginTop: "10%",
  },
  innerStyle: {
    textAlign: "center",
  },
  backbtn: {
    position: "absolute",
    left: 0,
    top: 6,
  },
  nextbtn: {
    position: "absolute",
    right: 0,
    top: 6,
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  codeInput: {
    borderRadius: 8,
    width: "16%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    alignContent: "center",
    textAlign: "center",
  },
});

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

class SSNVerification extends React.Component {
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

  onPressNext = async () => {
    const { nextRoute } = this.props.route.params;
    this.props.navigation.navigate("Welcome");
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
    const { pin1, pin2, pin3, pin4 } = this.state;
    return (
      <>
        {/* Header Component */}
        <Header
          Title={"SSN Verification"}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollView overScrollMode="never">
          <View style={[baseStyle.themeContainer, styles.innerContainer]}>
            <View style={styles.LoginContent}>
              <Text style={[baseStyle.text, styles.innerStyle]}>
                Enter your last four SSN digits
              </Text>
            </View>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/account-verification.png")}
            />
            <View style={[baseStyle.row, { marginBottom: 20 }]}>
              <TextInput
                ref={this.state.ref1}
                style={[baseStyle.input, styles.codeInput]}
                value={this.state.pin1}
                keyboardType="phone-pad"
                maxLength={1}
                // onKeyPress={(e) => {
                //   if (e.nativeEvent.key === "Backspace") {
                //     this.state.ref1.current.clear();
                //     this.state.ref1.current.focus();
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

            <MainButton onPress={() => this.onPressNext()} btnText={"Next"} />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default SSNVerification;

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
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
  innerStyle: {
    textAlign: "center",
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

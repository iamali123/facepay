import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  Alert,
  Modal,
} from "react-native";
import baseStyle from "../../UI/Style";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class NewPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      modalVisible: false,
      accepted: false,
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
      pin5: "",
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
  ref1 = React.createRef();
  ref2 = React.createRef();
  ref3 = React.createRef();
  ref4 = React.createRef();
  ref5 = React.createRef();

  setModalVisible = (visible, accepted) => {
    this.setState({ modalVisible: visible, accepted: accepted });
  };

  _renderModal() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Your account password is now changed. Login again please
              </Text>
              <Pressable
                style={[baseStyle.blueButton, { width: "100%" }]}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.props.navigation.navigate("Login");
                }}
              >
                <Text style={styles.textStyle}>Ok</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  render() {
    const { pin1, pin2, pin3, pin4, pin5 } = this.state;
    return (
      <ScrollView overScrollMode="never">
        <View style={baseStyle.themeContainer}>
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
              placeholder="New Password"
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
              placeholder="Confirm New Password"
              placeholderTextColor="#292929"
              keyboardType="default"
              onChangeText={(value) =>
                this.setState({ confirmPassword: value })
              }
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
          <View style={styles.LoginContent}>
            <Text style={[baseStyle.text, styles.innerStyle]}>
              We have sent a verification code to your registered email address.
            </Text>
          </View>
          <Image
            style={styles.lockVector}
            source={require("../../../assets/images/account-verification.png")}
          />
          <View style={styles.bottomContent2}>
            <Text style={baseStyle.text}>Enter your verification code</Text>
          </View>
          <View style={styles.row}>
            <TextInput
              ref={this.ref1}
              style={[baseStyle.input, styles.codeInput]}
              value={pin1}
              keyboardType="phone-pad"
              maxLength={1}
              onKeyPress={(e) => {
                if (e.nativeEvent.key === "Backspace") {
                  this.ref1.current.focus();
                }
              }}
              onChangeText={(pin1) => {
                this.setState({ pin1: pin1 });
                this.ref2.current.focus();
              }}
            />
            <TextInput
              ref={this.ref2}
              style={[baseStyle.input, styles.codeInput]}
              value={pin2}
              keyboardType="phone-pad"
              maxLength={1}
              onKeyPress={(e) => {
                if (e.nativeEvent.key === "Backspace") {
                  this.ref1.current.focus();
                }
              }}
              onChangeText={(pin2) => {
                this.setState({ pin2: pin2 });
                this.ref3.current.focus();
              }}
            />
            <TextInput
              ref={this.ref3}
              style={[baseStyle.input, styles.codeInput]}
              value={pin3}
              keyboardType="phone-pad"
              maxLength={1}
              onKeyPress={(e) => {
                if (e.nativeEvent.key === "Backspace") {
                  this.ref2.current.focus();
                }
              }}
              onChangeText={(pin3) => {
                this.setState({ pin3: pin3 });
                this.ref4.current.focus();
              }}
            />
            <TextInput
              ref={this.ref4}
              style={[baseStyle.input, styles.codeInput]}
              value={pin4}
              keyboardType="phone-pad"
              maxLength={1}
              onKeyPress={(e) => {
                if (e.nativeEvent.key === "Backspace") {
                  this.ref3.current.focus();
                }
              }}
              onChangeText={(pin4) => {
                this.setState({ pin4: pin4 });
                this.ref5.current.focus();
              }}
            />
            <TextInput
              ref={this.ref5}
              style={[baseStyle.input, styles.codeInput]}
              value={pin5}
              keyboardType="phone-pad"
              maxLength={1}
              onKeyPress={(e) => {
                if (e.nativeEvent.key === "Backspace") {
                  this.ref4.current.focus();
                }
              }}
              onChangeText={(pin5) => {
                this.setState({ pin5: pin5 });
                // this.ref1.current.focus();
              }}
            />
          </View>
          <Pressable
            style={[baseStyle.blueButton, { width: "100%" }]}
            onPress={() => this.setModalVisible(true)}
          >
            <Text style={baseStyle.blueBtnText}>Submit</Text>
          </Pressable>
        </View>
        {this._renderModal()}
      </ScrollView>
    );
  }
}

export default NewPassword;

const styles = StyleSheet.create({
  toolbarContainer: { paddingLeft: "5%", paddingRight: "5%" },
  loginVector: {
    width: windowWidth - 40,
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "5%",
  },

  bottomContent1: {
    marginTop: "5%",
    width: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    // borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 25,
    textAlign: "center",
  },

  lockVector: {
    width: 171,
    height: 171,
    resizeMode: "contain",
    marginBottom: "5%",
  },
  LoginContent: {
    marginBottom: "5%",
    maxWidth: 595,
  },
  bottomContent2: {
    marginTop: "1%",
    marginBottom: "2%",
    textAlign: "center",
  },

  innerStyle: {
    textAlign: "center",
  },
  nextbtn: {
    position: "absolute",
    right: 0,
    top: 6,
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
    marginBottom: "5%",
  },
  faceIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  faceButton: {
    position: "absolute",
    right: 20,
    alignSelf: "center",
  },
});

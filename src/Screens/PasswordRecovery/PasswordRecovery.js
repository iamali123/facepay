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
import Header from "../../Components/Header/Header";
import NewPassword from "./NewPassword";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class PasswordRecovery extends React.Component {
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
    };
  }
  ref1 = React.createRef();
  ref2 = React.createRef();
  ref3 = React.createRef();
  ref4 = React.createRef();
  ref5 = React.createRef();

  setModalVisible = (visible, accepted) => {
    this.setState({ modalVisible: visible, accepted: accepted });
  };

  _passwordRecovery() {
    Alert.alert(" ", "My Alert Msg", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  }
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
                We have send you an email to your registered address with a
                verification code.
              </Text>
              <Pressable
                style={baseStyle.blueButton}
                onPress={() =>
                  this.setModalVisible(
                    !this.state.modalVisible,
                    !this.state.accepted
                  )
                }
              >
                <Text style={baseStyle.blueBtnText}>Accept</Text>
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
      <>
        {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Password Recovery"}
        />
        {!this.state.accepted && (
          <ScrollView overScrollMode="never">
            <View style={baseStyle.themeContainer}>
              <Image
                style={styles.loginVector}
                source={require("../../../assets/images/password-recovery.png")}
              />
              <View style={styles.bottomContent1}>
                <TextInput
                  style={baseStyle.input}
                  value={this.state.email}
                  placeholder="Email"
                  placeholderTextColor="#292929"
                  keyboardType="email-address"
                  onChangeText={(value) => this.setState({ email: value })}
                />
                <View
                  style={{
                    marginTop: 15,
                  }}
                >
                  <Pressable
                    style={baseStyle.blueButton}
                    onPress={() => this.setModalVisible(true)}
                  >
                    <Text style={baseStyle.blueBtnText}>Submit</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            {this._renderModal()}
          </ScrollView>
        )}
        {this.state.accepted && (
          <NewPassword navigation={this.props.navigation} />
        )}
      </>
    );
  }
}

export default PasswordRecovery;

const styles = StyleSheet.create({
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
    // alignItems: "center",
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
    marginBottom: 15,
    textAlign: "center",
  },
});

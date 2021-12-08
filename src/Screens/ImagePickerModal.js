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
  Pressable,
} from "react-native";
import baseStyle from "../UI/BaseStyle/Style";
import * as ImagePicker from "expo-image-picker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class ImagePickerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      accepted: false,
      localUri: null,
    };
  }

  openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    if (pickerResult.cancelled === true) {
      return;
    }

    this.setState({ localUri: pickerResult.uri });
  };
  togglePasswordSwitch() {
    this.setState({ ShowPassword: !this.state.ShowPassword });
  }

  toggleConfirmPasswordSwitch() {
    this.setState({ ShowConfirmPassword: !this.state.ShowConfirmPassword });
  }

  setModalVisible = (visible, accepted) => {
    this.setState({ modalVisible: visible, accepted: accepted });
  };

  render() {
    const { pin1, pin2, pin3, pin4, pin5 } = this.state;
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
              <Text style={styles.modalText}>Please select One</Text>
              <Pressable
                style={[baseStyle.blueButton, { width: "100%" }]}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Gallery</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ImagePickerModal;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: "10%",
    marginBottom: "20%",
  },
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

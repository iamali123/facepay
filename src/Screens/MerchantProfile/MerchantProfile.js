import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  ImageBackground,
  Modal,
  Dimensions
} from "react-native";
import baseStyle from "../../UI/Style";
import * as ImagePicker from "expo-image-picker";
import styles from "./MerchantProfile.style"
import Header from "../../Components/Header/Header";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class MerchantProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false, localUri: null };
  }

  //From Gallery
  openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    if (pickerResult.cancelled === true) {
      return;
    }

    this.setState({ localUri: pickerResult.uri });
  };
  //From Camera
  openCamera = async () => {
    let cameraResult = await ImagePicker.launchCameraAsync();
    console.log(cameraResult);
    if (cameraResult.cancelled === true) {
      return;
    }

    this.setState({ localUri: cameraResult.uri });
  };
  setModalVisible = (visible, accepted) => {
    this.setState({ modalVisible: visible, accepted: accepted });
  };

  _renderImageBrowserModal() {
    return (
      <View style={baseStyle.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={baseStyle.centeredView}>
            <View style={baseStyle.modalView}>
              <Text style={baseStyle.h3}>Please select One</Text>
              <Pressable
                style={[baseStyle.blueButton, { width: "100%" }]}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.openImagePickerAsync();
                }}
              >
                <Text style={baseStyle.blueBtnText}>Gallery</Text>
              </Pressable>
              <Pressable
                style={[baseStyle.blueButton, { width: "100%", marginTop: 20 }]}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.openCamera();
                }}
              >
                <Text style={baseStyle.blueBtnText}>Camera</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Profile"}
          textButton={true}
          nextText={"Edit"}
          onPressRightText={() =>
            this.props.navigation.navigate("EditMerchantProfile", {
              nextRoute: "MerchantProfile",
            })
          }
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <View style={styles.profileContainer}>
              <ImageBackground
                resizeMode="center"
                style={{
                  width: windowWidth / 3,
                  height: windowHeight / 6,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 100,
                }}
                source={require("../../../assets/images/profile-user.png")}
              >
                <Image
                  resizeMode="cover"
                  style={styles.userImg}
                  source={{ uri: this.state.localUri }}
                />
                <Pressable
                  style={styles.addUserbtn}
                  hitSlop={20}
                  onPress={() => this.setModalVisible(true)}
                >
                  <Image
                    style={styles.addUserImg}
                    source={require("../../../assets/images/plus-bluebg.png")}
                  />
                </Pressable>
              </ImageBackground>
              <Text style={baseStyle.h2}>Andrew Carnegie</Text>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.col}>
                <Text style={baseStyle.h3}>First Name:</Text>
                <Text style={baseStyle.text}>Andrew Carnegie</Text>
              </View>
              <View style={styles.col}>
                <Text style={baseStyle.h3}>Last Name</Text>
                <Text style={baseStyle.text}>Carnegie</Text>
              </View>
              <View style={styles.col}>
                <Text style={baseStyle.h3}>Date Of Birth</Text>
                <Text style={baseStyle.text}>20/12/1995</Text>
              </View>
              <View style={styles.col}>
                <Text style={baseStyle.h3}>Gender</Text>
                <Text style={baseStyle.text}>Male</Text>
              </View>
              <View style={styles.col}>
                <Text style={baseStyle.h3}>Email</Text>
                <Text style={baseStyle.text}>andrew@facepay.com</Text>
              </View>
              <View style={styles.col}>
                <Text style={baseStyle.h3}>Phone Number</Text>
                <Text style={baseStyle.text}>111 222 333</Text>
              </View>
              <View style={styles.col}>
                <Text style={baseStyle.h3}>Address</Text>
                <Text style={baseStyle.text}>
                  7633, Holley Street Jackson, NJ 08527
                </Text>
              </View>
              <View style={styles.col}>
                <Text style={baseStyle.h3}>City</Text>
                <Text style={baseStyle.text}>California</Text>
              </View>
              <View style={styles.col}>
                <Text style={baseStyle.h3}>State</Text>
                <Text style={baseStyle.text}>California</Text>
              </View>
              <View style={styles.col}>
                <Text style={baseStyle.h3}>Zip Code</Text>
                <Text style={baseStyle.text}>90011</Text>
              </View>
              <View style={styles.col}>
                <Text style={baseStyle.h3}>Country</Text>
                <Text style={baseStyle.text}>USA</Text>
              </View>
            </View>
          </View>
          {this._renderImageBrowserModal()}
        </ScrollView>
      </>
    );
  }
}

export default MerchantProfile;

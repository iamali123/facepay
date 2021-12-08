import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
  Modal,
} from "react-native";
import baseStyle from "../../UI/Style";
import * as ImagePicker from "expo-image-picker";
import styles from "./BussinesProfile.style"
import Header from "../../Components/Header/Header";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class BusinessProfile extends React.Component {
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

  getPermission = async () => {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      await ImagePicker.requestCameraPermissionsAsync();
    } catch (err) {
      alert(err);
      console.error(err);
    }
  };
  componentDidMount() {
    this.getPermission();
  }
  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Business Profile"}
          textButton={true}
          nextText={"Edit"}
          onPressRightText={() =>
            this.props.navigation.navigate("BusinessRegistration", {
              nextRoute: "BusinessProfile",
              showBank: true,
            })
          }
        />
        <ScrollView overScrollMode="never">
          <View style={styles.formContainer}>
            <View style={styles.profileContainer}>
              <ImageBackground
                style={styles.profileBg}
                source={require("../../../assets/images/business-banner.png")}
              >
                <View style={styles.userImgBg}>
                  <ImageBackground
                    resizeMode="center"
                    style={{
                      width: windowWidth / 3,
                      height: windowHeight / 6,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 100,
                    }}
                    source={require("../../../assets/images/pollotropical.png")}
                  >
                    <Image
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
                </View>
              </ImageBackground>
            </View>
            <View style={styles.infoContainer}>
              <View style={[baseStyle.row, styles.mb]}>
                <Text style={[baseStyle.h3, styles.alignLeft]}>
                  Business Name
                </Text>
                <Text style={[baseStyle.text, styles.alignRight]}>
                  Pollo Tropical
                </Text>
              </View>
              <View style={[baseStyle.row, styles.mb]}>
                <Text style={[baseStyle.h3, styles.alignLeft]}>
                  Phone Number
                </Text>
                <Text style={[baseStyle.text, styles.alignRight]}>
                  111 222 333
                </Text>
              </View>
              <View style={[baseStyle.row, styles.mb]}>
                <Text style={[baseStyle.h3, styles.alignLeft]}>Address</Text>
                <Text style={[baseStyle.text, styles.alignRight]}>
                  7633, Holley Street Jackson, NJ 08527
                </Text>
              </View>
              <View style={[baseStyle.row, styles.mb]}>
                <Text style={[baseStyle.h3, styles.alignLeft]}>City</Text>
                <Text style={[baseStyle.text, styles.alignRight]}>
                  California
                </Text>
              </View>
              <View style={[baseStyle.row, styles.mb]}>
                <Text style={[baseStyle.h3, styles.alignLeft]}>State</Text>
                <Text style={[baseStyle.text, styles.alignRight]}>
                  California
                </Text>
              </View>
              <View style={[baseStyle.row, styles.mb]}>
                <Text style={[baseStyle.h3, styles.alignLeft]}>Zip Code</Text>
                <Text style={[baseStyle.text, styles.alignRight]}>90011</Text>
              </View>
              <View style={[baseStyle.row, styles.mb]}>
                <Text style={[baseStyle.h3, styles.alignLeft]}>EIN</Text>
                <Text style={[baseStyle.text, styles.alignRight]}>5897985</Text>
              </View>
              <View style={[baseStyle.row, styles.mb]}>
                <Text style={[baseStyle.h3, styles.alignLeft]}>
                  Business Category
                </Text>
                <Text style={[baseStyle.text, styles.alignRight]}>Food</Text>
              </View>
              <View style={[baseStyle.row, styles.mb]}>
                <Text style={[baseStyle.h3, styles.alignLeft]}>Country</Text>
                <Text style={[baseStyle.text, styles.alignRight]}>USA</Text>
              </View>
              <Text style={[baseStyle.h2, styles.accountHeading]}>
                Bank Information
              </Text>
              <View style={[styles.infoContainer, styles.accountContainer]}>
                <View style={[baseStyle.row, styles.mb]}>
                  <Text style={[baseStyle.h3, styles.alignLeft]}>
                    Account Title
                  </Text>
                  <Text style={[baseStyle.text, styles.alignRight]}>
                    Jack Doe
                  </Text>
                </View>
                <View style={[baseStyle.row, styles.mb]}>
                  <Text style={[baseStyle.h3, styles.alignLeft]}>
                    Routing Number
                  </Text>
                  <Text style={[baseStyle.text, styles.alignRight]}>
                    111 222 333
                  </Text>
                </View>
                <View style={[baseStyle.row, styles.mb]}>
                  <Text style={[baseStyle.h3, styles.alignLeft]}>
                    Account Number
                  </Text>
                  <Text style={[baseStyle.text, styles.alignRight]}>
                    GBB2 111 222 333
                  </Text>
                </View>
                {/* <View style={styles.col}>
                <Text style={[baseStyle.h3, styles.innerstyle]}>Name</Text>
                <Text style={[baseStyle.h3, styles.innerstyle]}>
                  Routing Number
                </Text>
                <Text style={[baseStyle.h3, styles.innerstyle]}>
                  Account Number
                </Text>
              </View>
              <View style={styles.col}>
                <Text style={[baseStyle.text, styles.alignText]}>
                  Andrew Carnegie
                </Text>
                <Text style={[baseStyle.text, styles.alignText]}>Smith</Text>
                <Text style={[baseStyle.text, styles.alignText]}>
                  20/12/1995
                </Text>
              </View> */}
              </View>
              {/* <View style={styles.col}>
                <Text style={[baseStyle.h3, styles.innerstyle]}>
                  First Name:
                </Text>
                <Text style={[baseStyle.h3, styles.innerstyle]}>
                  Last Name:
                </Text>
                <Text style={[baseStyle.h3, styles.innerstyle]}>DOB:</Text>
                <Text style={[baseStyle.h3, styles.innerstyle]}>
                  Phone Number:
                </Text>
                <Text style={[baseStyle.h3, styles.innerstyle]}>Address</Text>
                <Text style={[baseStyle.h3, styles.innerstyle]}>Country</Text>
                <Text style={[baseStyle.h3, styles.innerstyle]}>City</Text>
                <Text style={[baseStyle.h3, styles.innerstyle]}>State</Text>
                <Text style={[baseStyle.h3, styles.innerstyle]}>Zip Code</Text>
              </View>
              <View style={styles.col}>
                <Text style={[baseStyle.text, styles.alignText]}>
                  Andrew Carnegie
                </Text>
                <Text style={[baseStyle.text, styles.alignText]}>Smith</Text>
                <Text style={[baseStyle.text, styles.alignText]}>
                  20/12/1995
                </Text>
                <Text style={[baseStyle.text, styles.alignText]}>
                  111 222 333
                </Text>
                <Text style={[baseStyle.text, styles.alignText]}>
                  7633, Holley Street Jackson, NJ 08527
                </Text>
                <Text style={[baseStyle.text, styles.alignText]}>USA</Text>
                <Text style={[baseStyle.text, styles.alignText]}>
                  California
                </Text>
                <Text style={[baseStyle.text, styles.alignText]}>
                  California
                </Text>
                <Text style={[baseStyle.text, styles.alignText]}>31512</Text>
              </View>
            </View>
            <Text style={[baseStyle.h2, styles.accountHeading]}>
              Bank Information
            </Text>
            <View style={[styles.infoContainer, styles.accountContainer]}>
              <View style={styles.col}>
                <Text style={[baseStyle.h3, styles.innerstyle]}>Name</Text>
                <Text style={[baseStyle.h3, styles.innerstyle]}>
                  Routing Number
                </Text>
                <Text style={[baseStyle.h3, styles.innerstyle]}>
                  Account Number
                </Text>
              </View>
              <View style={styles.col}>
                <Text style={[baseStyle.text, styles.alignText]}>
                  Andrew Carnegie
                </Text>
                <Text style={[baseStyle.text, styles.alignText]}>Smith</Text>
                <Text style={[baseStyle.text, styles.alignText]}>
                  20/12/1995
                </Text>
              </View> */}
            </View>
          </View>
          {this._renderImageBrowserModal()}
        </ScrollView>
      </>
    );
  }
}

export default BusinessProfile;


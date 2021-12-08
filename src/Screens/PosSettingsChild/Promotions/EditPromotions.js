import * as React from "react";

import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
  Switch,
  Modal,
} from "react-native";
import baseStyle from "../../../UI/Style";
import DateTimePicker from "@react-native-community/datetimepicker";
import Moment from "moment";
import * as ImagePicker from "expo-image-picker";
import Header from "../../../Components/Header/Header";
import MainButton from "../../../Components/Button/MainButton";

import styles from "./Prormotions.style";
class EditPromotions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "",
      fromDate: "",
      toDate: "",
      fromTime: "",
      toTime: "",
      ageFrom: "",
      range: "",
      cost: "",
      mode: "date",
      show: false,
      field: "",
      active: false,
      male: false,
      female: false,
      other: false,
      perPerson: false,
      modalVisible: false,
      localUri: null,
    };
  }

  onChangeDate = (event, value) => {
    if (this.state.field == "fromDate") {
      this.setState({ fromDate: value, show: false });
    } else if (this.state.field == "toDate") {
      this.setState({ toDate: value, show: false });
    } else if (this.state.field == "fromTime") {
      this.setState({ fromTime: value, show: false });
    } else if (this.state.field == "toTime") {
      this.setState({ toTime: value, show: false });
    }
    // console.log(event);
  };

  showMode = (currentMode) => {
    // setShow(true);
    this.setState({ mode: currentMode, show: true });
  };

  showDatepicker = (field) => {
    this.setState({ mode: "date", show: true, field: field });
  };

  showTimepicker = (field) => {
    this.setState({ mode: "time", show: true, field: field });
  };
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
        <Header
          Title={"Edit Promotions"}
          onPressLeft={() => this.props.navigation.goBack()}
        />

        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            {this.state.show && (
              <DateTimePicker
                testID={this.state.field}
                value={new Date()}
                mode={this.state.mode}
                // is24Hour={true}
                display="default"
                onChange={(event, date) => this.onChangeDate(event, date)}
              />
            )}
            <View style={styles.infoContainer}>
              <View style={styles.switchInner}>
                {!this.state.active && (
                  <Text style={baseStyle.h4}>Activate</Text>
                )}
                {this.state.active && (
                  <Text style={baseStyle.h4}>Deactivate</Text>
                )}
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  onValueChange={(value) => this.setState({ active: value })}
                  value={this.state.active}
                ></Switch>
              </View>
            </View>
            <View style={styles.profileContainer}>
              <ImageBackground
                style={styles.profileBg}
                imageStyle={{ borderRadius: 6 }}
                source={require("../../../../assets/images/profile-banner.png")}
              >
                <Image
                  style={styles.profileBg}
                  source={{ uri: this.state.localUri }}
                />
                <Pressable
                  style={styles.addUserbtn}
                  hitSlop={20}
                  onPress={() => this.setState({ modalVisible: true })}
                >
                  <Image
                    style={styles.addUserImg}
                    source={require("../../../../assets/images/plus-bluebg.png")}
                  />
                </Pressable>
              </ImageBackground>
            </View>
            <View style={styles.infoContainer}>
              <Text style={[baseStyle.text, styles.textAlign]}>
                Enjoy Miam's sunset from the best location.
              </Text>

              <View style={[styles.mainRow, { alignItems: "center" }]}>
                <View style={styles.contentCol}>
                  <Text style={baseStyle.h4}>Valid From</Text>
                </View>
                <View
                  style={[baseStyle.row, { flex: 1, alignItems: "center" }]}
                >
                  <View style={[baseStyle.input, styles.myStyle]}>
                    <TextInput
                      value={
                        this.state.fromDate == ""
                          ? this.state.fromDate
                          : Moment(this.state.fromDate).format("MM/DD/YYYY")
                      }
                      editable={false}
                    />
                    <Pressable
                      style={styles.faceButton}
                      onPress={() => {
                        this.showDatepicker("fromDate");
                      }}
                    >
                      <Image
                        style={styles.dateIcon}
                        source={require("../../../../assets/images/date-icon.png")}
                      ></Image>
                    </Pressable>
                  </View>
                  <Text style={[baseStyle.h4, { paddingHorizontal: 5 }]}>
                    To
                  </Text>
                  <View style={[baseStyle.input, styles.myStyle]}>
                    <TextInput
                      value={
                        this.state.toDate == ""
                          ? this.state.toDate
                          : Moment(this.state.toDate).format("MM/DD/YYYY")
                      }
                      editable={false}
                    />
                    <Pressable
                      style={styles.faceButton}
                      onPress={() => {
                        this.showDatepicker("toDate");
                      }}
                    >
                      <Image
                        style={styles.dateIcon}
                        source={require("../../../../assets/images/date-icon.png")}
                      ></Image>
                    </Pressable>
                  </View>
                </View>
              </View>
              <View style={[styles.mainRow, { alignItems: "center" }]}>
                <View style={styles.contentCol}>
                  <Text style={baseStyle.h4}>From</Text>
                </View>
                <View
                  style={[baseStyle.row, { flex: 1, alignItems: "center" }]}
                >
                  <View style={[baseStyle.input, styles.myStyle]}>
                    <TextInput
                      value={
                        this.state.fromTime == ""
                          ? this.state.fromTime
                          : Moment(this.state.fromTime).format("LT")
                      }
                      editable={false}
                    />
                    <Pressable
                      style={styles.faceButton}
                      onPress={() => {
                        this.showTimepicker("fromTime");
                      }}
                    >
                      <Image
                        style={styles.dateIcon}
                        source={require("../../../../assets/images/time-icon.png")}
                      ></Image>
                    </Pressable>
                  </View>
                  <Text style={[baseStyle.h4, { paddingHorizontal: 5 }]}>
                    To
                  </Text>
                  <View style={[baseStyle.input, styles.myStyle]}>
                    <TextInput
                      value={
                        this.state.toTime == ""
                          ? this.state.toTime
                          : Moment(this.state.toTime).format("LT")
                      }
                      editable={false}
                    />
                    <Pressable
                      style={styles.faceButton}
                      onPress={() => {
                        this.showTimepicker("toTime");
                      }}
                    >
                      <Image
                        style={styles.dateIcon}
                        source={require("../../../../assets/images/time-icon.png")}
                      ></Image>
                    </Pressable>
                  </View>
                </View>
              </View>
              <Text style={baseStyle.h2}>Target</Text>
              <View style={styles.switchInner}>
                <Text style={baseStyle.h4}>Male</Text>
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  value={this.state.male}
                  onValueChange={(value) => {
                    this.setState({ male: value });
                  }}
                ></Switch>
              </View>
              <View style={styles.switchInner}>
                <Text style={baseStyle.h4}>Female</Text>
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  value={this.state.female}
                  onValueChange={(value) => {
                    this.setState({ female: value });
                  }}
                ></Switch>
              </View>
              <View style={styles.switchInner}>
                <Text style={baseStyle.h4}>Other</Text>
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  value={this.state.other}
                  onValueChange={(value) => {
                    this.setState({ other: value });
                  }}
                ></Switch>
              </View>
              <View style={[styles.mainRow, { alignItems: "center" }]}>
                <View style={styles.contentCol}>
                  <Text style={baseStyle.h4}>Age From</Text>
                </View>
                <View
                  style={[baseStyle.row, { flex: 1, alignItems: "center" }]}
                >
                  <TextInput
                    style={[baseStyle.input, styles.inputInnerStyle]}
                    value={this.state.ageFrom}
                    placeholder="18"
                    placeholderTextColor="#292929"
                    keyboardType="default"
                    onChangeText={(value) => this.setState({ ageFrom: value })}
                  />
                  <Text style={[baseStyle.h4, { paddingHorizontal: 5 }]}>
                    To
                  </Text>
                  <TextInput
                    style={[baseStyle.input, styles.inputInnerStyle]}
                    value={this.state.ageTo}
                    placeholder="65"
                    placeholderTextColor="#292929"
                    keyboardType="default"
                    onChangeText={(value) => this.setState({ ageTo: value })}
                  />
                </View>
              </View>
              <View
                style={[
                  styles.mainRow,
                  { alignItems: "center", justifyContent: "flex-start" },
                ]}
              >
                <View style={styles.contentCol}>
                  <Text style={baseStyle.h4}>Range</Text>
                </View>
                <TextInput
                  style={[
                    baseStyle.input,
                    {
                      paddingRight: 16,
                      paddingLeft: 16,
                      flex: 0.26,
                      marginLeft: -15,
                    },
                  ]}
                  value={this.state.range}
                  placeholder="15 Miles"
                  placeholderTextColor="#292929"
                  keyboardType="default"
                  onChangeText={(value) => this.setState({ range: value })}
                />
              </View>
              <View style={[styles.mainRow, { alignItems: "center" }]}>
                <View style={styles.contentCol}>
                  <Text style={baseStyle.h4}>Cost</Text>
                </View>
                <View
                  style={[baseStyle.row, { flex: 1, alignItems: "center" }]}
                >
                  <TextInput
                    style={[baseStyle.input, styles.inputInnerStyle]}
                    value={this.state.cost}
                    placeholder="$15.00"
                    placeholderTextColor="#292929"
                    keyboardType="default"
                    onChangeText={(value) => this.setState({ cost: value })}
                  />
                  <Text style={[baseStyle.h4, { paddingHorizontal: 5 }]}>
                    Per Person
                  </Text>
                  <View style={{ flex: 0.7 }}>
                    <Switch
                      style={{
                        transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                        height: 12,
                      }}
                      trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                      thumbColor={"#292929"}
                      ios_backgroundColor="#292929"
                      value={this.state.perPerson}
                      onValueChange={(value) => {
                        this.setState({ perPerson: value });
                      }}
                    ></Switch>
                  </View>
                </View>
              </View>
              <MainButton
                onPress={() => this.props.navigation.goBack()}
                btnText={"Save"}
              />
            </View>
          </View>
          {this._renderImageBrowserModal()}
        </ScrollView>
      </>
    );
  }
}

export default EditPromotions;

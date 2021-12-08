import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
  TextInput,
  Switch,
  Modal,
} from "react-native";
import baseStyle from "../../UI/Style";
import DateTimePicker from "@react-native-community/datetimepicker";
import Moment from "moment";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import Header from "../../Components/Header/Header";
import MainButton from "../../Components/Button/MainButton";
import styles from "./Team.style";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class EditTeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lasttName: "",
      DOB: "",
      mode: "date",
      show: false,
      gender: "",
      genderList: [
        { Title: "Male", Id: 0 },
        { Title: "Female", Id: 1 },
      ],
      email: "",
      phoneNo: "",
      address: "",
      city: "",
      cityList: [
        { Title: "London", Id: 0 },
        { Title: "Paris", Id: 1 },
      ],
      State: "",
      stateList: [
        { Title: "State1", Id: 0 },
        { Title: "State2", Id: 1 },
      ],
      zipcode: "",
      region: "",
      regionList: [
        { Title: "Asia", Id: 0 },
        { Title: "Africa", Id: 1 },
      ],
      active: false,
      settAccess: false,
      refunds: false,
      viewTransaction: false,
      modalVisible: false,
      localUri: null,
    };
  }
  showDatepicker = () => {
    this.setState({ mode: "date", show: true });
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

  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          Title={"Edit Team Member"}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <View style={styles.profileContainer}>
              <ImageBackground
                style={styles.profileBg}
                imageStyle={{ borderRadius: 6 }}
                source={require("../../../assets/images/team-banner.png")}
              >
                <ImageBackground
                  style={styles.userImgWrapper}
                  imageStyle={{ borderRadius: 5 }}
                  source={require("../../../assets/images/team-member.png")}
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
              </ImageBackground>
            </View>
            <View style={styles.infoContainer}>
              <View style={[baseStyle.row, styles.pb]}>
                <Text style={baseStyle.h4}>Activate</Text>
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  value={this.state.active}
                  onValueChange={(value) => {
                    this.setState({ active: value });
                  }}
                ></Switch>
              </View>
              <View style={[baseStyle.row, styles.pb]}>
                <Text style={baseStyle.h4}>Setting Access</Text>
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  value={this.state.settAccess}
                  onValueChange={(value) => {
                    this.setState({ settAccess: value });
                  }}
                ></Switch>
              </View>
              <View style={[baseStyle.row, styles.pb]}>
                <Text style={baseStyle.h4}>ChargeBack & Refunds</Text>
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  value={this.state.refunds}
                  onValueChange={(value) => {
                    this.setState({ refunds: value });
                  }}
                ></Switch>
              </View>
              <View style={[baseStyle.row, styles.pb]}>
                <Text style={baseStyle.h4}>View Transactions</Text>
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  value={this.state.viewTransaction}
                  onValueChange={(value) => {
                    this.setState({ viewTransaction: value });
                  }}
                ></Switch>
              </View>

              <TextInput
                style={baseStyle.input}
                value={this.state.firstName}
                onChangeText={(value) => this.setState({ firstName: value })}
                placeholder="First Name"
                placeholderTextColor="#292929"
                keyboardType="default"
              />
              <TextInput
                style={baseStyle.input}
                value={this.state.lasttName}
                onChangeText={(value) => this.setState({ lasttName: value })}
                placeholder="Last Name"
                placeholderTextColor="#292929"
                keyboardType="default"
              />
              <View
                style={[
                  {
                    flexDirection: "row",
                    position: "relative",
                  },
                ]}
              >
                <TextInput
                  style={[
                    baseStyle.input,
                    { width: "100%", paddingRight: "20%" },
                  ]}
                  value={
                    this.state.DOB == ""
                      ? this.state.DOB
                      : Moment(this.state.DOB).format("MM/DD/YYYY")
                  }
                  editable={false}
                  placeholder="Date of Birth"
                  placeholderTextColor="#292929"
                />
                <Pressable
                  style={styles.datebtn}
                  onPress={() => this.showDatepicker()}
                >
                  <Image
                    style={styles.faceIcon}
                    source={require("../../../assets/images/date-icon.png")}
                  ></Image>
                </Pressable>
              </View>
              {this.state.show && (
                <DateTimePicker
                  // testID={this.state.field}
                  value={new Date()}
                  mode={this.state.mode}
                  // is24Hour={true}
                  display="default"
                  onChange={(event, date) =>
                    this.setState({ DOB: date, show: false })
                  }
                />
              )}
              <View style={baseStyle.dropdownWrapper}>
                <Picker
                  style={baseStyle.dropdown}
                  selectedValue={this.state.gender}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ gender: itemValue })
                  }
                >
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Gender"
                    value={null}
                  />
                  {this.state.genderList.map((data) => {
                    return (
                      <Picker.Item
                        style={baseStyle.pickerText}
                        label={data.Title}
                        value={data.Id}
                        key={data.Id}
                      />
                    );
                  })}
                </Picker>
                <Image
                  style={baseStyle.bottomDrop}
                  source={require("../../../assets/images/dropdown-icon.png")}
                ></Image>
              </View>

              <View style={baseStyle.dropdownWrapper}>
                <Picker
                  style={baseStyle.dropdown}
                  selectedValue={this.state.item}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ item: itemValue })
                  }
                >
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Select location"
                    value="location"
                  />
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Location X"
                    value="x"
                  />
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Location Y"
                    value="y"
                  />
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Location Z"
                    value="z"
                  />
                </Picker>
                <Image
                  style={baseStyle.bottomDrop}
                  source={require("../../../assets/images/dropdown-icon.png")}
                ></Image>
              </View>

              <View style={baseStyle.dropdownWrapper}>
                <Picker
                  style={baseStyle.dropdown}
                  selectedValue={this.state.item}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ item: itemValue })
                  }
                >
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Role"
                    value="role"
                  />
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Owner"
                    value="owner"
                  />
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Manager"
                    value="manager"
                  />
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Employee"
                    value="employee"
                  />
                </Picker>
                <Image
                  style={baseStyle.bottomDrop}
                  source={require("../../../assets/images/dropdown-icon.png")}
                ></Image>
              </View>
              <TextInput
                style={baseStyle.input}
                value={this.state.email}
                onChangeText={(value) => this.setState({ email: value })}
                placeholder="Email"
                placeholderTextColor="#292929"
                keyboardType="default"
              />
              <TextInput
                style={baseStyle.input}
                value={this.state.phoneNo}
                onChangeText={(value) => this.setState({ phoneNo: value })}
                placeholder="Phone"
                placeholderTextColor="#292929"
                keyboardType="phone-pad"
              />
              <TextInput
                style={baseStyle.input}
                value={this.state.address}
                onChangeText={(value) => this.setState({ address: value })}
                placeholder="Address"
                placeholderTextColor="#292929"
                keyboardType="default"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <View style={[baseStyle.dropdownWrapper, styles.dualField]}>
                  <Picker
                    style={baseStyle.dropdown}
                    selectedValue={this.state.city}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ city: itemValue })
                    }
                  >
                    <Picker.Item
                      style={baseStyle.pickerText}
                      label="City"
                      value={null}
                    />
                    {this.state.cityList.map((data) => {
                      return (
                        <Picker.Item
                          style={baseStyle.pickerText}
                          label={data.Title}
                          value={data.Id}
                          key={data.Id}
                        />
                      );
                    })}
                  </Picker>
                  <Image
                    style={baseStyle.bottomDrop}
                    source={require("../../../assets/images/dropdown-icon.png")}
                  ></Image>
                </View>
                <View style={[baseStyle.dropdownWrapper, styles.dualField]}>
                  <Picker
                    style={baseStyle.dropdown}
                    selectedValue={this.state.State}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ State: itemValue })
                    }
                  >
                    <Picker.Item
                      style={baseStyle.pickerText}
                      label="State"
                      value={null}
                    />
                    {this.state.stateList.map((data) => {
                      return (
                        <Picker.Item
                          style={baseStyle.pickerText}
                          label={data.Title}
                          value={data.Id}
                          key={data.Id}
                        />
                      );
                    })}
                  </Picker>
                  <Image
                    style={baseStyle.bottomDrop}
                    source={require("../../../assets/images/dropdown-icon.png")}
                  ></Image>
                </View>
              </View>
              <TextInput
                style={baseStyle.input}
                value={this.state.zipcode}
                onChangeText={(value) => this.setState({ zipcode: value })}
                placeholder="Zip Code"
                placeholderTextColor="#292929"
              />
              <View style={baseStyle.dropdownWrapper}>
                <Picker
                  style={baseStyle.dropdown}
                  selectedValue={this.state.region}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ region: itemValue })
                  }
                >
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="United States Of America"
                    value={null}
                  />
                  {this.state.regionList.map((data) => {
                    return (
                      <Picker.Item
                        style={baseStyle.pickerText}
                        label={data.Title}
                        value={data.Id}
                        key={data.Id}
                      />
                    );
                  })}
                </Picker>
                <Image
                  style={baseStyle.bottomDrop}
                  source={require("../../../assets/images/dropdown-icon.png")}
                ></Image>
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

export default EditTeamMember;

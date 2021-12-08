import * as React from "react";
import {
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
import baseStyle from "../../UI/Style";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Moment from "moment";
import Colors from "../../UI/Colors";
import  styles from "./MerchantProfile.style";
import ThemeTextInput from '../../Components/TextInput/ThemeTextInput'
class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      DOB: "",
      gender: "",
      email: "",
      phoneNo: "",
      address: "",
      city: "",
      State: "",
      zipcode: "",
      region: "",
      showPicker: false,
    };
  }
  showDatepicker = () => {
    this.setState({ mode: "date", showPicker: true });
  };
  render() {
    return (
      <>
        <ThemeTextInput
        inputPlaceholder={"First Name"}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.firstName}
          placeholder="First Name"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ firstName: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.lastName}
          placeholder="Last Name"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ lastName: value })}
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
            style={{
              width: "100%",
              paddingRight: "10%",
              color: Colors.black,
            }}
            value={
              this.state.DOB == ""
                ? this.state.DOB
                : Moment(this.state.DOB).format("MM/DD/YYYY")
            }
            editable={false}
            placeholder="Date of Birth"
            keyboardType="phone-pad"
            placeholderTextColor="#292929"
            onChangeText={(value) => this.setState({ DOB: value })}
          />
          {this.state.showPicker && (
            <DateTimePicker
              // testID={this.state.field}
              value={new Date()}
              mode="date"
              // is24Hour={true}
              display="default"
              onChange={(event, date) =>
                this.setState({ DOB: date, showPicker: false })
              }
            />
          )}
          <Pressable
            style={styles.faceButton}
            onPress={() => this.showDatepicker()}
          >
            <Image
              style={styles.faceIcon}
              source={require("../../../assets/images/date-icon.png")}
            ></Image>
          </Pressable>
        </View>
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
              label="Male"
              value="Male"
            />
            <Picker.Item
              style={baseStyle.pickerText}
              label="Female"
              value="Female"
            />
          </Picker>
          <Image
            style={baseStyle.bottomDrop}
            source={require("../../../assets/images/dropdown-icon.png")}
          ></Image>
        </View>
        {/* <Text style={[baseStyle.h2, styles.mt]}>Contact Infromation</Text> */}
        <TextInput
          style={baseStyle.input}
          value={this.state.email}
          placeholder="Email"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ email: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.phoneNo}
          placeholder="Phone"
          keyboardType="phone-pad"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ phoneNo: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.address}
          placeholder="Address"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ address: value })}
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
                value="City"
              />
              <Picker.Item
                style={baseStyle.pickerText}
                label="London"
                value="London"
              />
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
                value="State"
              />
              <Picker.Item
                style={baseStyle.pickerText}
                label="London"
                value="London"
              />
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
          placeholder="Zip Code"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ zipcode: value })}
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
              value="United States Of America"
            />
            <Picker.Item
              style={baseStyle.pickerText}
              label="London"
              value="London"
            />
          </Picker>
          <Image
            style={baseStyle.bottomDrop}
            source={require("../../../assets/images/dropdown-icon.png")}
          ></Image>
        </View>
      </>
    );
  }
}

export default ProfileForm;


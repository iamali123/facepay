import * as React from "react";
import { TextInput, View, StyleSheet, Text, Image } from "react-native";
import baseStyle from "../../UI/Style";
import { Picker } from "@react-native-picker/picker";

class RgistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "",
      businessName: "",
      phoneNo: "",
      address: "",
      city: "",
      State: "",
      zipcode: "",
      employeNo: "",
      businessCategory: "",
      region: "",
      location: "",
      accTitle: "",
      routingNo: "",
      accNo: "",
      confirmAcc: "",
    };
  }
  render() {
      let showBank = this.props.showBank;

      if(typeof showBank == 'undefined') {
          showBank = false;
      }

    return (
      <>
        <TextInput
          style={baseStyle.input}
          value={this.state.businessName}
          placeholder="Business Name"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ businessName: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.phoneNo}
          placeholder="Phone Number"
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
        <TextInput
          style={baseStyle.input}
          value={this.state.employeNo}
          placeholder="EIN (Optional)"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ employeNo: value })}
        />
        {/*<TextInput*/}
        {/*  style={baseStyle.input}*/}
        {/*  value={this.state.businessCategory}*/}
        {/*  placeholder="Businesss Category"*/}
        {/*  placeholderTextColor="#292929"*/}
        {/*  onChangeText={(value) => this.setState({ businessCategory: value })}*/}
        {/*/>*/}

          <View style={baseStyle.dropdownWrapper}>
            <Picker
              style={baseStyle.dropdown}
              selectedValue={this.state.location}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ location: itemValue })
              }
            >
              <Picker.Item
                style={baseStyle.pickerText}
                label="Business Category"
                value=""
              />
              <Picker.Item
                style={baseStyle.pickerText}
                label="Hotel"
                value="hotel"
              />
                <Picker.Item
                    style={baseStyle.pickerText}
                    label="Restaurant"
                    value="restaurant"
                />
            </Picker>
            <Image
              style={baseStyle.bottomDrop}
              source={require("../../../assets/images/dropdown-icon.png")}
            ></Image>
          </View>
        {/*<View style={baseStyle.dropdownWrapper}>*/}
        {/*  <Picker*/}
        {/*    style={baseStyle.dropdown}*/}
        {/*    selectedValue={this.state.location}*/}
        {/*    onValueChange={(itemValue, itemIndex) =>*/}
        {/*      this.setState({ location: itemValue })*/}
        {/*    }*/}
        {/*  >*/}
        {/*    <Picker.Item*/}
        {/*      style={baseStyle.pickerText}*/}
        {/*      label="Business Location"*/}
        {/*      value="United States Of America"*/}
        {/*    />*/}
        {/*    <Picker.Item*/}
        {/*      style={baseStyle.pickerText}*/}
        {/*      label="London"*/}
        {/*      value="London"*/}
        {/*    />*/}
        {/*  </Picker>*/}
        {/*  <Image*/}
        {/*    style={baseStyle.bottomDrop}*/}
        {/*    source={require("../../../assets/images/dropdown-icon.png")}*/}
        {/*  ></Image>*/}
        {/*</View>*/}

          {showBank &&
              <View>


          <Text style={[baseStyle.h2, styles.mt]}>Bank Infromation</Text>
        <TextInput
          style={baseStyle.input}
          value={this.state.accTitle}
          placeholder="Account Title"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ accTitle: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.routingNo}
          placeholder="Routing Number"
          keyboardType="phone-pad"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ routingNo: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.accNo}
          placeholder="Account Number"
          keyboardType="phone-pad"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ accNo: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.confirmAcc}
          placeholder="Account Confirmation"
          keyboardType="phone-pad"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ confirmAcc: value })}
        />
              </View>
          }
      </>
    );
  }
}

export default RgistrationForm;

const styles = StyleSheet.create({
  dualField: {
    width: "47%",
  },
  mt: {
    marginTop: 15,
    marginBottom: 10,
    textAlign: "left",
  },
});

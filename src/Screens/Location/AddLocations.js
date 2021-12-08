import * as React from "react";
import { View, Pressable, Text, ScrollView, TextInput } from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import styles from "./Location.style";
import MainButton from "../../Components/Button/MainButton";
class AddLocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: "", longitude: "" };
  }

  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Add Locations"}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <TextInput
              placeholder="Latitude"
              placeholderTextColor="#292929"
              style={[baseStyle.input, { marginBottom: 15 }]}
              value={this.state.latitude}
              onChangeText={(value) => this.setState({ latitude: value })}
              keyboardType="phone-pad"
            />
            <TextInput
              placeholder="Longitude"
              placeholderTextColor="#292929"
              style={baseStyle.input}
              value={this.state.longitude}
              onChangeText={(value) => this.setState({ longitude: value })}
              keyboardType="phone-pad"
            />
            <MainButton
              onPress={() => this.props.navigation.goBack()}
              btnText={"Save"}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default AddLocations;

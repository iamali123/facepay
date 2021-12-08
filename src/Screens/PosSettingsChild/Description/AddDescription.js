import * as React from "react";
import { View, Pressable, Text, ScrollView, TextInput } from "react-native";
import baseStyle from "../../../UI/Style";
import Header from "../../../Components/Header/Header";
import MainButton from "../../../Components/Button/MainButton";

class AddDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, description: "" };
  }

  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Add Description"}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <TextInput
              style={baseStyle.input}
              placeholder="Peppermint & toppings"
              placeholderTextColor="#292929"
              keyboardType="default"
              value={this.state.description}
              onChangeText={(value) => this.setState({ description: value })}
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

export default AddDescription;

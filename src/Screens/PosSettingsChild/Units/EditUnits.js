import * as React from "react";
import { View, Pressable, Text, ScrollView, TextInput } from "react-native";
import baseStyle from "../../../UI/Style";
import Header from "../../../Components/Header/Header";
import MainButton from "../../../Components/Button/MainButton";

class EditUnits extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, unitTitle: "" };
  }

  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          Title={"Edit Units"}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <TextInput
              style={[baseStyle.input, { marginBottom: 15 }]}
              placeholder="Unit"
              placeholderTextColor="#292929"
              keyboardType="default"
              value={this.state.unitTitle}
              onChangeText={(value) => this.setState({ unitTitle: value })}
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

export default EditUnits;

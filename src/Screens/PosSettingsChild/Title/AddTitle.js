import * as React from "react";
import {
  View,
  Pressable,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import baseStyle from "../../../UI/Style";
import Header from "../../../Components/Header/Header";
import MainButton from "../../../Components/Button/MainButton";
class AddTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, title: "" };
  }

  render() {
    return (
      <>
      {/* Header Component */}
        <Header
          Title={"Add Title"}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <TextInput
              style={baseStyle.input}
              placeholder="Title"
              keyboardType="default"
              placeholderTextColor="#292929"
              value={this.state.title}
              onChangeText={(value) => this.setState({ title: value })}
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

export default AddTitle;


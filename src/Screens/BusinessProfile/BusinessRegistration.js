import * as React from "react";
import { View, Pressable, Text, ScrollView } from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import RgistrationForm from "./RegistrationForm";
import MainButton from "../../Components/Button/MainButton";

class BusinessRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressSubmit = async () => {
    const { nextRoute } = this.props.route.params;
    this.props.navigation.navigate(nextRoute, {
      nextRoute: "SSNVerification",
    });
  };
  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Business Registration"}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <RgistrationForm showBank={this.props.route.params.showBank} />
            <MainButton onPress={() => this.onPressSubmit()} btnText={"Save"} />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default BusinessRegistration;

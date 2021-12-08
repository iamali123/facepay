import * as React from "react";
import { View, Pressable, Text, ScrollView } from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import ProfileForm from "./ProfileForm";
import MainButton from "../../Components/Button/MainButton";
class EditMerchantProfile extends React.Component {
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
          Title={"Merchant Profile"}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <ProfileForm />
            <MainButton onPress={() => this.onPressSubmit()} btnText={"Save"} />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default EditMerchantProfile;

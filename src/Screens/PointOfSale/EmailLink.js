import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
  Share,
  ToastAndroid,
} from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import MainButton from "../../Components/Button/MainButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class EmailLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emailAddress: "" };
  }
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Email Link"}
        />

        <ScrollView overScrollMode="never">
          <View style={styles.formContainer}>
            <Text style={[baseStyle.text, styles.innerStyle]}>
              Please enter the email to send this link.
            </Text>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/email.png")}
            />
            <TextInput
              style={baseStyle.input}
              value={this.state.emailAddress}
              placeholder="Email"
              placeholderTextColor="#292929"
              onChangeText={(value) => this.setState({ emailAddress: value })}
            />

            <MainButton
              onPress={() => {
                ToastAndroid.show("Email Sent!", ToastAndroid.SHORT);
                this.props.navigation.goBack();
                // this.props.navigation.navigate("PointOfSale");
              }}
              btnText={"Send"}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default EmailLink;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: "8%",
  },
  loginVector: {
    width: windowWidth - 40,
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "7%",
  },
  innerStyle: {
    textAlign: "center",
  },
  btnInnerStyle: {
    marginTop: 15,
    width: "100%",
  },
});

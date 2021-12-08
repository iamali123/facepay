import { Toast } from "native-base";
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
} from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class CopyLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { link: "", copied: false };
  }
  onShare = async () => {
    try {
      const result = await Share.share({
        message: "Your link will be here",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
          this.setState({ copied: true });
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        this.setState({ copied: false });
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
          Title={"Copy Link"}
        />

        <ScrollView overScrollMode="never">
          <View style={styles.formContainer}>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/copy-link-banner.png")}
            />
            <TextInput
              style={baseStyle.input}
              value={this.state.link}
              onChangeText={(value) => this.setState({ link: value })}
              placeholder="https://"
              placeholderTextColor="#292929"
              editable={false}
            />
            <Pressable
              style={[baseStyle.blueButtonMain, styles.btnInnerStyle]}
              onPress={() => {
                if (!this.state.copied) {
                  this.onShare();
                } else if (this.state.copied) {
                  this.props.navigation.navigate("Charge");
                  this.setState({ copied: false });
                }
              }}
            >
              {!this.state.copied && (
                <Text style={baseStyle.blueBtnText}>Copy Link</Text>
              )}
              {this.state.copied && (
                <Text style={baseStyle.blueBtnText}>Done</Text>
              )}
            </Pressable>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default CopyLink;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 20,
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

import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  TextInput,
  ToastAndroid,
  Share,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import MainButton from "../../Components/Button/MainButton";

import styles from "./Referrals.style";
class Referrals extends React.Component {
  constructor(props) {
    super(props);
    this.state = { link: "http://facepay.com/share/32...", disable: true };
  }
  onShare = async () => {
    try {
      const result = await Share.share({
        message: this.state.link,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
          this.setState({ disable: true });
          console.log(result.action);
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        this.setState({ disable: false });
        console.log(result.action);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Referrals"}
        />
        <View style={baseStyle.themeContainer}>
          <Image
            style={styles.loginVector}
            source={require("../../../assets/images/referrals-banner.png")}
          />
          <Text style={baseStyle.h2}>Share with your friends</Text>
          <Text style={baseStyle.text}>
            If they sign up, you and your friend will get special{"\n"}offers
            for free!
          </Text>
          <View style={styles.referralForm}>
            <TextInput
              style={baseStyle.input}
              value={this.state.link}
              editable={false}
            />
            <Pressable
              style={styles.copyButton}
              onPress={() => {
                Clipboard.setString(this.state.link);
                this.setState({ disable: false });
                ToastAndroid.show("Link Copied!", ToastAndroid.SHORT);
              }}
            >
              <Text style={styles.btnText}>Copy</Text>
            </Pressable>
          </View>

          <MainButton
            disabled={this.state.disable}
            onPress={() => this.onShare()}
            btnText={"Invite"}
          />
        </View>
      </>
    );
  }
}

export default Referrals;

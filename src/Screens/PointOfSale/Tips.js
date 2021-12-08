import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import color from "../../UI/Colors";
import MainButton from "../../Components/Button/MainButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Tips extends React.Component {
  constructor(props) {
    super(props);
    this.state = { CustomTip: "", ExtraTip: "" };
  }

  onPressTip = async () => {
    const { nextRoute } = this.props.route.params;
    this.props.navigation.navigate(nextRoute);
  };

  render() {
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Tips"}
        />

        <ScrollView overScrollMode="never">
          <View style={styles.tipsContainer}>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/tips-banner.png")}
            />
            <View style={[baseStyle.blueButton, styles.taxBtn]}>
              <Text style={baseStyle.blueBtnText}>Amount $116.47</Text>
              <Text style={styles.btnSmallText}>Including Tax</Text>
            </View>
            <Text style={[baseStyle.text, styles.innerStyle]}>
              How much you would like to give tip to the waiter{"\n"} please
              select an option below.
            </Text>
            <View style={styles.tipValue}>
              <Pressable style={styles.tip} onPress={() => this.onPressTip()}>
                <Text style={baseStyle.h6}>15% = $3.00</Text>
              </Pressable>
              <Pressable style={styles.tip} onPress={() => this.onPressTip()}>
                <Text style={baseStyle.h6}>18% = $3.60</Text>
              </Pressable>
              <Pressable style={styles.tip} onPress={() => this.onPressTip()}>
                <Text style={baseStyle.h6}>20% = $4.60</Text>
              </Pressable>
            </View>
            <View style={styles.tipsInputs}>
              <TextInput
                style={baseStyle.input}
                value=""
                placeholder="Custom Tip"
                placeholderTextColor="#292929"
                keyboardType="phone-pad"
                value={this.state.CustomTip}
                onChangeText={(value) => this.setState({ CustomTip: value })}
              />
              <TextInput
                style={baseStyle.input}
                value=""
                placeholder="Extra Tip"
                placeholderTextColor="#292929"
                keyboardType="phone-pad"
                value={this.state.ExtraTip}
                onChangeText={(value) => this.setState({ ExtraTip: value })}
              />

              <MainButton onPress={() => this.onPressTip()} btnText={"Save"} />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Tips;

const styles = StyleSheet.create({
  tipsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
    marginBottom: "15%",
  },
  loginVector: {
    width: windowWidth - 40,
    height: windowHeight / 4,
    resizeMode: "contain",
  },
  taxBtn: {
    width: windowWidth - 40,
    backgroundColor: color.black,
    marginBottom: "5%",
  },
  btnSmallText: {
    textAlign: "center",
    color: "#ffffff",
    marginTop: -5,
  },
  tipValue: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tip: {
    width: "28%",
    backgroundColor: "#ffffff",
    paddingTop: 12,
    marginHorizontal: 5,
    paddingRight: 10,
    paddingBottom: 12,
    paddingLeft: 10,
    display: "flex",
    alignItems: "center",
    borderRadius: 50,
    borderColor: color.black,
    borderWidth: 1,
  },
  innerStyle: {
    width: windowWidth - 40,
    textAlign: "center",
    marginBottom: 30,
  },
  tipsInputs: {
    width: windowWidth - 40,
  },
});

import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import baseStyle from "../../UI/Style";

import color from "../../UI/Colors";
import Header from "../../Components/Header/Header";
import MainButton from "../../Components/Button/MainButton";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class Charge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: "",
      split: false,
      splitByAmount: "",
      customSplit: "",
      continue: false,
      edit: false,
    };
  }
  render() {
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Charge"}
        />

        <ScrollView overScrollMode="never">
          <View style={styles.chargeContainer}>
            <View style={[baseStyle.blueButton, styles.taxBtn]}>
              <Text style={baseStyle.blueBtnText}>Charge $116.47</Text>
              <Text style={styles.btnSmallText}>Including Tax</Text>
            </View>

            <TextInput
              style={baseStyle.input}
              placeholder="Add Discount"
              placeholderTextColor="#292929"
              keyboardType="phone-pad"
              value={this.state.discount}
              onChangeText={(value) => this.setState({ discount: value })}
            />
            <MainButton
              onPress={() => this.props.navigation.navigate("SplitPayment")}
              btnText={"Split Payment"}
            />
            <Text style={(baseStyle.h4, { marginTop: "5%" })}>
              Select Payment Type
            </Text>

            <View style={styles.paymentTypes}>
              <Pressable
                style={[baseStyle.blueButton, styles.iconBtn]}
                onPress={() =>
                  this.props.navigation.navigate("Tips", {
                    nextRoute: "FaceDetection",
                  })
                }
              >
                <Image
                  style={styles.btnIcon}
                  source={require("../../../assets/images/face-detection.png")}
                />
                <Text style={[baseStyle.h6, styles.textColor]}>
                  Face Detection
                </Text>
              </Pressable>
              <Pressable
                style={[baseStyle.blueButton, styles.iconBtn]}
                onPress={() =>
                  this.props.navigation.navigate("Tips", {
                    nextRoute: "FaceDetection",
                  })
                }
              >
                <Image
                  style={styles.btnIcon}
                  source={require("../../../assets/images/scan-card.png")}
                />
                <Text style={[baseStyle.h6, styles.textColor]}>Scan Card</Text>
              </Pressable>
              <Pressable
                style={[baseStyle.blueButton, styles.iconBtn]}
                onPress={() =>
                  this.props.navigation.navigate("Tips", {
                    nextRoute: "ManualCard",
                  })
                }
              >
                <Image
                  style={styles.btnIcon}
                  source={require("../../../assets/images/manual-card.png")}
                />
                <Text style={[baseStyle.h6, styles.textColor]}>
                  Manual Card
                </Text>
              </Pressable>
              <Pressable
                style={[baseStyle.blueButton, styles.iconBtn]}
                onPress={() =>
                  this.props.navigation.navigate("Tips", {
                    nextRoute: "ChargeCash",
                  })
                }
              >
                <Image
                  style={styles.btnIcon}
                  source={require("../../../assets/images/cash.png")}
                />
                <Text style={[baseStyle.h6, styles.textColor]}>Cash</Text>
              </Pressable>
              <Pressable
                style={[baseStyle.blueButton, styles.iconBtn]}
                onPress={() =>
                  this.props.navigation.navigate("Tips", {
                    nextRoute: "Cheque",
                  })
                }
              >
                <Image
                  style={styles.btnIcon}
                  source={require("../../../assets/images/check.png")}
                />
                <Text style={[baseStyle.h6, styles.textColor]}>Cheque</Text>
              </Pressable>
              <Pressable
                style={[baseStyle.blueButton, styles.iconBtn]}
                onPress={() =>
                  this.props.navigation.navigate("Tips", {
                    nextRoute: "FaceDetection",
                  })
                }
              >
                <Image
                  style={styles.btnIcon}
                  source={require("../../../assets/images/qr-code.png")}
                />
                <Text style={[baseStyle.h6, styles.textColor]}>QR Code</Text>
              </Pressable>
              <Pressable
                style={[baseStyle.blueButton, styles.iconBtn]}
                onPress={() =>
                  this.props.navigation.navigate("Tips", {
                    nextRoute: "CopyLink",
                  })
                }
              >
                <Image
                  style={styles.btnIcon}
                  source={require("../../../assets/images/copy-link.png")}
                />
                <Text style={[baseStyle.h6, styles.textColor]}>Copy Link</Text>
              </Pressable>
              <Pressable
                style={[baseStyle.blueButton, styles.iconBtn]}
                onPress={() => this.props.navigation.navigate("EmailLink")}
              >
                <Image
                  style={styles.btnIcon}
                  source={require("../../../assets/images/email-link.png")}
                />
                <Text style={[baseStyle.h6, styles.textColor]}>
                  Email This Link
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Charge;

const styles = StyleSheet.create({
  chargeContainer: {
    flex: 1,
    marginTop: "5%",
    marginBottom: "20%",
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  taxBtn: {
    width: "100%",
    marginBottom: 25,
  },
  btnSmallText: {
    textAlign: "center",
    color: "#ffffff",
    marginTop: -5,
  },
  paymentTypes: {
    flexDirection: "row",
    marginTop: 25,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 6,
    paddingBottom: 6,
    borderColor: "#D8E0F3",
    borderWidth: 1,
    width: "48%",
    marginBottom: 20,
  },
  textColor: {
    color: color.eastbay,
  },
  btnIcon: {
    width: 26,
    height: 26,
    marginRight: 5,
    resizeMode: "contain",
  },
  alignment: {
    textAlign: "center",
    marginBottom: 25,
  },
  splitBtn: {
    width: "30%",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
    borderColor: color.black,
  },
});

import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import baseStyle from "../../UI/Style";

import color from "../../UI/Colors";
import Header from "../../Components/Header/Header";
import MainButton from "../../Components/Button/MainButton";
// import { Center } from "native-base";

class SplitPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: "",
      split: false,
      splitByAmount: "",
      customSplit: "",
      _continue: false,
      edit: false,
    };
  }
  render() {
    const { edit, _continue } = this.state;
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={
            (!_continue && !edit && "Split Payment") ||
            (_continue && !edit && "Payment Type") ||
            (edit && "Edit Split")
          }
          textButton={true}
          nextText={_continue ? "Edit" : null}
          onPressRightText={() => {
            if (_continue) {
              this.setState({
                _continue: false,
                edit: !edit,
              });
            } else return null;
          }}
        />
        <ScrollView overScrollMode="never">
          <View style={styles.chargeContainer}>
            <View style={[baseStyle.blueButton, styles.taxBtn]}>
              <Text style={baseStyle.blueBtnText}>Charge $116.47</Text>
              <Text style={styles.btnSmallText}>Including Tax</Text>
            </View>
            {_continue && (
              <>
                <Text style={(baseStyle.h4, styles.alignment)}>
                  Out of Rs 116.87. Payment 1 of 4
                </Text>
                <Text style={baseStyle.h2}>Select Payment Type</Text>
              </>
            )}
            {!_continue && (
              <>
                <Text style={(baseStyle.h4, styles.alignment)}>
                  $0.00 of $500.00 Will remain after this transaction.
                </Text>

                <View style={{ width: "100%" }}>
                  <Text style={[baseStyle.h4, { marginBottom: 10 }]}>
                    Split By Amount
                  </Text>
                  <TextInput
                    style={baseStyle.input}
                    value={this.state.splitByAmount}
                    onChangeText={(value) =>
                      this.setState({ splitByAmount: value })
                    }
                    // placeholder="60.47"
                    keyboardType="phone-pad"
                  />
                </View>
                <View>
                  <Text style={[baseStyle.h4, { marginBottom: 10 }]}>
                    Split Into Equal Payments
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Pressable
                      style={[
                        baseStyle.blueButton,
                        styles.iconBtn,
                        styles.splitBtn,
                      ]}
                    >
                      <Text style={[baseStyle.h6, styles.textColor]}>2</Text>
                    </Pressable>
                    <Pressable
                      style={[
                        baseStyle.blueButton,
                        styles.iconBtn,
                        styles.splitBtn,
                      ]}
                    >
                      <Text style={[baseStyle.h6, styles.textColor]}>3</Text>
                    </Pressable>
                    <Pressable
                      style={[
                        baseStyle.blueButton,
                        styles.iconBtn,
                        styles.splitBtn,
                      ]}
                    >
                      <Text style={[baseStyle.h6, styles.textColor]}>4</Text>
                    </Pressable>
                  </View>
                </View>
                <View style={{ width: "100%" }}>
                  <Text style={[baseStyle.h4, { marginBottom: 10 }]}>
                    Custom Split
                  </Text>
                  <TextInput
                    style={baseStyle.input}
                    value={this.state.customSplit}
                    onChangeText={(value) =>
                      this.setState({ customSplit: value })
                    }
                    // placeholder="6"
                    keyboardType="phone-pad"
                  />
                </View>
                <MainButton
                  onPress={() =>
                    this.setState({
                      _continue: true,
                      edit: false,
                    })
                  }
                  btnText={"Continue"}
                />
              </>
            )}

            {/* break */}
            {_continue && (
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
                  <Text style={[baseStyle.h6, styles.textColor]}>
                    Scan Card
                  </Text>
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
                    source={require("../../../assets/images/face-detection.png")}
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
                  <Text style={[baseStyle.h6, styles.textColor]}>
                    Copy Link
                  </Text>
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
            )}
          </View>
        </ScrollView>
      </>
    );
  }
}

export default SplitPayment;

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
    marginTop: 20,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    paddingRight: 25,
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

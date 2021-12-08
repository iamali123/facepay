import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import baseStyle from "../../UI/Style";
import { CommonActions } from "@react-navigation/native";

import color from "../../UI/Colors";
import Header from "../../Components/Header/Header";
import MainButton from "../../Components/Button/MainButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class ChargeCash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tenderInput: false, amount: "" };
  }

  onSkip() {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: "PointOfSale",
          },
        ],
      })
    );
  }
  render() {
    return (
      <>
        <Header
          onPressLeft={() => {
            if (this.state.tenderInput) {
              this.setState({ tenderInput: false });
            } else this.props.navigation.goBack();
          }}
          Title={"Charge Cash"}
          textButton={true}
          nextText={this.state.tenderInput ? "Skip" : null}
          onPressRightText={() => {
            if (this.state.tenderInput) {
              this.onSkip();
            } else return null;
          }}
        />

        <ScrollView overScrollMode="never">
          <View style={styles.formContainer}>
            <View>
              <View style={[baseStyle.blueButton, styles.taxBtn]}>
                <Text style={baseStyle.blueBtnText}>Amount $116.47</Text>
                <Text style={styles.btnSmallText}>Including Tax</Text>
              </View>
              {!this.state.tenderInput && (
                <>
                  <TextInput
                    style={baseStyle.input}
                    value={this.state.amount}
                    placeholder="Amount"
                    placeholderTextColor="#292929"
                    keyboardType="phone-pad"
                    onChangeText={(value) => this.setState({ amount: value })}
                  />

                  <MainButton
                    onPress={() => tthis.setState({ tenderInput: true })}
                    btnText={"Tender"}
                  />
                </>
              )}
              {this.state.tenderInput && (
                <View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={baseStyle.h2}>Rs 85.53 Change</Text>
                    <Text style={baseStyle.h3}>Out of Rs 200.00</Text>
                    <Text style={[baseStyle.text, { marginTop: 20 }]}>
                      How would you like your receipt?
                    </Text>
                  </View>
                  <View style={[baseStyle.row, { marginTop: 30 }]}>
                    <Pressable
                      style={[baseStyle.blueButton, { width: "47%" }]}
                      onPress={() =>
                        this.props.navigation.navigate("EmailLink")
                      }
                    >
                      <Text style={baseStyle.blueBtnText}>Email</Text>
                    </Pressable>
                    <Pressable
                      style={[baseStyle.blueButton, { width: "47%" }]}
                      onPress={() =>
                        this.props.navigation.navigate("PrintReceipt", {
                          nextRoute: "ChargeCash",
                        })
                      }
                    >
                      <Text style={baseStyle.blueBtnText}>Print</Text>
                    </Pressable>
                  </View>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default ChargeCash;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: "5%",
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
  taxBtn: {
    width: windowWidth - 40,
    backgroundColor: color.black,
    marginBottom: 25,
  },
  btnSmallText: {
    textAlign: "center",
    color: "#ffffff",
    marginTop: -5,
  },
  btnStyle: {
    width: "47%",
    paddingLeft: 15,
    paddingRight: 15,
  },
});

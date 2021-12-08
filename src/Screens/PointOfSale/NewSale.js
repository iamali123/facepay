import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  Image,
} from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import color from "../../UI/Colors";
import MainButton from "../../Components/Button/MainButton";

class NewSale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      saleTitle: "",
      title1: false,
      title2: false,
      title3: false,
      title4: false,
      title5: false,
      title6: false,
    };
  }

  render() {
    return (
      <>
        <Header
          Title={"New Sale"}
          onPressLeft={() => this.props.navigation.goBack()}
        />

        <View style={styles.chargeContainer}>
          {/* <View style={styles.btnRow}>
            <Pressable
              style={[baseStyle.blueButton, styles.taxBtn]}
              onPress={() => this.props.navigation.navigate("ChargeStack")}
            >
              <Text style={[baseStyle.blueBtnText, { color: color.black }]}>
                Charge $116.47
              </Text>
              <Text style={styles.btnSmallText}>Including Tax</Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.saleBtn]}
              onPress={() => this.props.navigation.navigate("NewSale")}
            >
              <Image
                style={styles.btnIcon}
                source={require("../../../assets/images/shopping.png")}
              />
              <Text style={baseStyle.blueBtnText}>New Sale</Text>
            </Pressable>
          </View> */}
          <View
            style={[
              baseStyle.input,
              {
                flexDirection: "row",
                position: "relative",
              },
            ]}
          >
            <TextInput
              style={{ width: "100%", paddingRight: 30 }}
              value={this.state.saleTitle}
              placeholder="Sale Title"
              placeholderTextColor="#292929"
              keyboardType="default"
              onChangeText={(value) => this.setState({ saleTitle: value })}
            />
            <Pressable
              style={styles.faceButton}
              onPress={() => {
                this.setState({ saleTitle: "" });
                // this.props.navigation.goBack();
              }}
            >
              <Image
                style={styles.faceIcon}
                source={require("../../../assets/images/search-icon.png")}
              ></Image>
            </Pressable>
          </View>
          <View style={styles.paymentTypes}>
            <Pressable
              style={
                this.state.title1
                  ? [baseStyle.blueButton, styles.iconBtn, styles.active]
                  : [baseStyle.blueButton, styles.iconBtn]
              }
              onPress={() => this.setState({ title1: !this.state.title1 })}
            >
              <Text
                style={
                  this.state.title1
                    ? [baseStyle.h6, styles.textColor, styles.activeText]
                    : [baseStyle.h6, styles.textColor]
                }
              >
                Title 1
              </Text>
            </Pressable>
            <Pressable
              style={
                this.state.title2
                  ? [baseStyle.blueButton, styles.iconBtn, styles.active]
                  : [baseStyle.blueButton, styles.iconBtn]
              }
              onPress={() => this.setState({ title2: !this.state.title2 })}
            >
              <Text
                style={
                  this.state.title2
                    ? [baseStyle.h6, styles.textColor, styles.activeText]
                    : [baseStyle.h6, styles.textColor]
                }
              >
                Title 2
              </Text>
            </Pressable>
            <Pressable
              style={
                this.state.title3
                  ? [baseStyle.blueButton, styles.iconBtn, styles.active]
                  : [baseStyle.blueButton, styles.iconBtn]
              }
              onPress={() => this.setState({ title3: !this.state.title3 })}
            >
              <Text
                style={
                  this.state.title3
                    ? [baseStyle.h6, styles.textColor, styles.activeText]
                    : [baseStyle.h6, styles.textColor]
                }
              >
                Title 3
              </Text>
            </Pressable>
            <Pressable
              style={
                this.state.title4
                  ? [baseStyle.blueButton, styles.iconBtn, styles.active]
                  : [baseStyle.blueButton, styles.iconBtn]
              }
              onPress={() => this.setState({ title4: !this.state.title4 })}
            >
              <Text
                style={
                  this.state.title4
                    ? [baseStyle.h6, styles.textColor, styles.activeText]
                    : [baseStyle.h6, styles.textColor]
                }
              >
                Title 4
              </Text>
            </Pressable>
            <Pressable
              style={
                this.state.title5
                  ? [baseStyle.blueButton, styles.iconBtn, styles.active]
                  : [baseStyle.blueButton, styles.iconBtn]
              }
              onPress={() => this.setState({ title5: !this.state.title5 })}
            >
              <Text
                style={
                  this.state.title5
                    ? [baseStyle.h6, styles.textColor, styles.activeText]
                    : [baseStyle.h6, styles.textColor]
                }
              >
                Title 5
              </Text>
            </Pressable>
            <Pressable
              style={
                this.state.title6
                  ? [baseStyle.blueButton, styles.iconBtn, styles.active]
                  : [baseStyle.blueButton, styles.iconBtn]
              }
              onPress={() => this.setState({ title6: !this.state.title6 })}
            >
              <Text
                style={
                  this.state.title6
                    ? [baseStyle.h6, styles.textColor, styles.activeText]
                    : [baseStyle.h6, styles.textColor]
                }
              >
                Title 6
              </Text>
            </Pressable>
          </View>
          <MainButton
            onPress={() => this.props.navigation.goBack()}
            btnText={"Save"}
          />
        </View>
      </>
    );
  }
}

export default NewSale;
const styles = StyleSheet.create({
  chargeContainer: {
    flex: 1,
    marginTop: "5%",
    marginBottom: "20%",
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  btnRow: {
    flexDirection: "row",
    marginBottom: 30,
    justifyContent: "space-between",
  },
  btnSmallText: {
    marginTop: -5,
    color: color.black,
  },
  btnIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
    marginRight: 5,
  },
  saleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
  },
  taxBtn: {
    width: "50%",
    backgroundColor: color.white,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: color.black,
    alignItems: "center",
  },
  paymentTypes: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconBtn: {
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "#D8E0F3",
    borderWidth: 1,
    width: "30%",
    marginBottom: 15,
  },
  textColor: {
    color: color.eastbay,
    textAlign: "center",
  },
  faceIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  faceButton: {
    position: "absolute",
    right: 20,
    alignSelf: "center",
  },
  active: {
    backgroundColor: color.black,
  },
  activeText: {
    color: "#fff",
  },
});

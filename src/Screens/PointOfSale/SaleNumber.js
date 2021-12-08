import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  TextInput,
  Dimensions,
  BackHandler,
  InteractionManager,
  KeyboardAvoidingView,
} from "react-native";
import baseStyle from "../../UI/Style";
import color from "../../UI/Colors";
import { Picker } from "@react-native-picker/picker";
import GlobalConstants from "../../Components/GlobalConstants";
import { Select } from "native-base";
import {
  TabActions,
  useFocusEffect,
  useIsFocused,
} from "@react-navigation/native";
import Header from "../../Components/Header/Header";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class SaleNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: "", item: "", inputRef: React.createRef() };
  }

  // backAction = () => {
  //   return true;
  // };
  componentDidMount() {
    this.setState({ amount: "" });
    // this.backHandler = BackHandler.addEventListener(
    //   "hardwareBackPress",
    //   this.backAction
    // );

    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      // do something
      GlobalConstants.route = "PointOfSaleTab";
    });
  }

  componentWillUnmount() {
    this._unsubscribe;
    // this.backHandler.remove();
  }
  render() {
    return (
      <>
        <Header
          leftIcon={require("../../../assets/images/shopping-basket.png")}
          badgeCounter={10}
          onPressLeft={() => this.props.navigation.navigate("AddToCart")}
          Title={"Sale Number 5456634"}
          textButton={false}
          RightIcon={require("../../../assets/images/search-icon.png")}
          onPressRightButton={() =>
            this.props.navigation.navigate("SearchProduct")
          }
        />

        <View style={styles.filterSection}>
          <View style={styles.btnRow}>
            <Pressable
              style={[baseStyle.blueButton, styles.taxBtn]}
              onPress={() => {
                this.props.navigation.navigate("ChargeStack");
                GlobalConstants.route = "PointOfSaleTab";
              }}
            >
              <Text style={[baseStyle.blueBtnText, { color: color.black }]}>
                Charge $116.47
              </Text>
              <Text style={styles.btnSmallText}>Including Tax</Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.saleBtn]}
              onPress={() => {
                this.props.navigation.navigate("NewSale");
                GlobalConstants.route = "PointOfSaleTab";
              }}
            >
              <Image
                style={styles.btnIcon}
                source={require("../../../assets/images/shopping.png")}
              />
              <Text style={baseStyle.blueBtnText}>New Sale</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.container}>
          <TextInput
            style={baseStyle.input}
            ref={this.state.inputRef}
            editable={false}
            placeholder="Amount"
            placeholderTextColor="#292929"
            keyboardType="phone-pad"
            value={this.state.amount}
            onChangeText={(value) => this.setState({ amount: value })}
          />
          <View style={baseStyle.dropdownWrapper}>
            <Picker
              style={baseStyle.dropdown}
              selectedValue={this.state.item}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ item: itemValue })
              }
            >
              <Picker.Item
                style={baseStyle.pickerText}
                label="Select item"
                value="Select item"
              />
              <Picker.Item
                style={baseStyle.pickerText}
                label="item"
                value="item"
              />
            </Picker>
            <Image
              style={baseStyle.bottomDrop}
              source={require("../../../assets/images/dropdown-icon.png")}
            ></Image>
          </View>
          <View style={baseStyle.dropdownWrapper}>
            <Picker
              style={baseStyle.dropdown}
              selectedValue={this.state.discount}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ discount: itemValue })
              }
            >
              <Picker.Item
                style={baseStyle.pickerText}
                label="Add Discount"
                value="Add Discount"
              />
              <Picker.Item style={baseStyle.pickerText} label="3%" value="3" />
              <Picker.Item style={baseStyle.pickerText} label="3%" value="3" />
            </Picker>
            <Image
              style={baseStyle.bottomDrop}
              source={require("../../../assets/images/dropdown-icon.png")}
            ></Image>
          </View>
          <View style={styles.paymentTypes}>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn, styles.active]}
              // onPress={() => navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h5, styles.textColor, styles.activeText]}>
                $5.00
              </Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn]}
              // onPress={() => navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h5, styles.textColor]}>$10.00</Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn]}
              // onPress={() => navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h5, styles.textColor]}>$20.00</Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn]}
              // onPress={() => navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h5, styles.textColor]}>$40.00</Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn]}
              // onPress={() => navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h5, styles.textColor]}>$100.00</Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn]}
              // onPress={() => navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h5, styles.textColor]}>$200.00</Text>
            </Pressable>
          </View>
          <View style={[styles.row, styles.mt]}>
            <Pressable style={[baseStyle.blueButton, styles.dualbtn]}>
              <Text style={baseStyle.blueBtnText}>Reset</Text>
            </Pressable>
            <Pressable style={[baseStyle.blueButton, styles.dualbtn]}>
              <Text style={baseStyle.blueBtnText}>Add</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.keypadContainer}>
          <Pressable
            style={baseStyle.keypadButton}
            onPress={() => {
              this.setState({ amount: this.state.amount + 1 });
            }}
          >
            <Text style={[baseStyle.h3, styles.textColor]}>1</Text>
          </Pressable>
          <Pressable
            style={baseStyle.keypadButton}
            onPress={() => {
              this.setState({ amount: this.state.amount + 2 });
            }}
          >
            <Text style={[baseStyle.h3, styles.textColor]}>2</Text>
          </Pressable>
          <Pressable
            style={baseStyle.keypadButton}
            onPress={() => {
              this.setState({ amount: this.state.amount + 3 });
            }}
          >
            <Text style={[baseStyle.h3, styles.textColor]}>3</Text>
          </Pressable>
          <Pressable
            style={baseStyle.keypadButton}
            onPress={() => {
              this.setState({ amount: this.state.amount + 4 });
            }}
          >
            <Text style={[baseStyle.h3, styles.textColor]}>4</Text>
          </Pressable>
          <Pressable
            style={baseStyle.keypadButton}
            onPress={() => {
              this.setState({ amount: this.state.amount + 5 });
            }}
          >
            <Text style={[baseStyle.h3, styles.textColor]}>5</Text>
          </Pressable>
          <Pressable
            style={baseStyle.keypadButton}
            onPress={() => {
              this.setState({ amount: this.state.amount + 6 });
            }}
          >
            <Text style={[baseStyle.h3, styles.textColor]}>6</Text>
          </Pressable>
          <Pressable
            style={baseStyle.keypadButton}
            onPress={() => {
              this.setState({ amount: this.state.amount + 7 });
            }}
          >
            <Text style={[baseStyle.h3, styles.textColor]}>7</Text>
          </Pressable>
          <Pressable
            style={baseStyle.keypadButton}
            onPress={() => {
              this.setState({ amount: this.state.amount + 8 });
            }}
          >
            <Text style={[baseStyle.h3, styles.textColor]}>8</Text>
          </Pressable>
          <Pressable
            style={baseStyle.keypadButton}
            onPress={() => {
              this.setState({ amount: this.state.amount + 9 });
            }}
          >
            <Text style={[baseStyle.h3, styles.textColor]}>9</Text>
          </Pressable>
          <Pressable
            style={baseStyle.keypadButton}
            onPress={() => {
              if (this.state.amount.indexOf(".") > -1) {
                // alert("hello found inside your_string");
              } else {
                this.setState({ amount: this.state.amount + "." });
              }
            }}
          >
            <Text style={[baseStyle.h3, styles.textColor]}>.</Text>
          </Pressable>
          <Pressable
            style={baseStyle.keypadButton}
            onPress={() => {
              this.setState({ amount: this.state.amount + 0 });
            }}
          >
            <Text style={[baseStyle.h3, styles.textColor]}>0</Text>
          </Pressable>
          <Pressable
            style={baseStyle.keypadButton}
            onPress={() => {
              let amount = this.state.amount;
              amount = amount.substring(0, amount.length - 1);
              this.setState({ amount: amount });
            }}
          >
            <Text style={[baseStyle.h3, styles.textColor]}>Del</Text>
          </Pressable>
        </View>
      </>
    );
  }
}

export default SaleNumber;

const styles = StyleSheet.create({
  filterSection: {
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    paddingLeft: "6%",
    paddingRight: "6%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mt: {
    marginTop: 0,
  },
  productRow: {
    flexDirection: "row",
    marginLeft: 25,
    marginBottom: 30,
  },
  btnRow: {
    flexDirection: "row",
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  btnSmallText: {
    marginTop: -5,
    color: color.black,
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
  ViewIcon: {
    marginLeft: 7,
    marginRight: 7,
    width: 30,
    height: 30,
    resizeMode: "cover",
  },

  btnIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
    marginRight: 5,
  },
  textColor: {
    color: color.eastbay,
  },
  orderQuantity: {
    // flexDirection: "row",
    backgroundColor: color.black,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    // paddingBottom: 4,
    paddingLeft: 1,
    // paddingRight: 4,
    borderRadius: 12,
    position: "absolute",
    top: -12,
    right: -12,
    borderColor: "#fff",
    borderWidth: 2,
    minWidth: 24,
    minHeight: 24,
  },
  numColor: {
    color: "#ffffff",
  },
  active: {
    backgroundColor: color.black,
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
    marginTop: 10,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconBtn: {
    backgroundColor: "#ffffff",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 6,
    borderColor: "#D8E0F3",
    borderWidth: 1,
    marginBottom: 15,
    marginRight: 8,
    width: "29%",
  },
  titleColor: {
    color: color.pelorous,
  },
  // active: {
  //   backgroundColor: color.pelorous,
  // },
  activeText: {
    color: "#fff",
  },
  keypadContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
    bottom: 0,
    left: 0,
    marginHorizontal: -6,
  },
});

import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
  Pressable,
  PixelRatio,
  Platform,
} from "react-native";
import baseStyle from "../../UI/Style";
import color from "../../UI/Colors";
import { Picker } from "@react-native-picker/picker";
import GlobalConstants from "../../Components/GlobalConstants";
import Header from "../../Components/Header/Header";
import Counter from "../../Components/Counter/Counter";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 600;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { discount: "", size: "", type: "" };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      // do something
      GlobalConstants.route = "PointOfSaleTab";
    });
  }
  componentWillUnmount() {
    this._unsubscribe;
  }
  render() {
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Chocolate Cake"}
        />

        <ScrollView overScrollMode="never">
          <View style={styles.formContainer}>
            <ImageBackground
              style={styles.profileBg}
              imageStyle={{
                borderRadius: 6,
              }}
              source={require("../../../assets/images/machaitio.png")}
            ></ImageBackground>

            <View style={styles.contentContainer}>
              <Text style={baseStyle.h2}>Peppermint Macchiato</Text>
              <Text style={[baseStyle.h3, styles.priceColor]}>$14.16</Text>
              <View style={[baseStyle.row, { marginBottom: 10 }]}>
                <Text style={baseStyle.h3}>In Stock</Text>
                <Text style={[baseStyle.h3, styles.priceColor]}>20</Text>
              </View>
              <View style={styles.row}>
                <Text style={baseStyle.h3}>Quantity</Text>
                {/* Counter Component */}
                <Counter />
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
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="3%"
                    value="3"
                  />
                </Picker>
                <Image
                  style={baseStyle.bottomDrop}
                  source={require("../../../assets/images/dropdown-icon.png")}
                ></Image>
              </View>
            </View>
            <View style={styles.contentContainer}>
              <Text style={baseStyle.h2}>Details</Text>
              <Text style={[baseStyle.text, styles.mb]}>
                Fresh peppermint mixed with choco, and blended cream.
              </Text>
              <View style={baseStyle.dropdownWrapper}>
                <Picker
                  style={baseStyle.dropdown}
                  selectedValue={this.state.size}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ size: itemValue })
                  }
                >
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Size"
                    value="Size"
                  />
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="XL"
                    value="XL"
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
                  selectedValue={this.state.type}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ type: itemValue })
                  }
                >
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Sugar"
                    value="Sugar"
                  />
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Salt"
                    value="Salt"
                  />
                </Picker>
                <Image
                  style={baseStyle.bottomDrop}
                  source={require("../../../assets/images/dropdown-icon.png")}
                ></Image>
              </View>
              <View style={[styles.row, styles.mt]}>
                <Pressable
                  style={[baseStyle.blueButton, styles.dualbtn]}
                  onPress={() =>
                    this.props.navigation.navigate("PointOfSaleTab")
                  }
                >
                  <Text style={baseStyle.blueBtnText}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[baseStyle.blueButton, styles.dualbtn]}
                  onPress={() =>
                    this.props.navigation.navigate("PointOfSaleTab")
                  }
                >
                  <Text style={baseStyle.blueBtnText}>Add</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default SingleProduct;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 50,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  profileBg: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT / 3,
    resizeMode: "cover",
    marginBottom: 40,
  },
  priceColor: {
    color: "#129516",
  },
  contentContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    width: "100%",
  },
  minusIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  plusIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  rowBg: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  mb: {
    marginBottom: 12,
  },
  mt: {
    marginTop: 20,
  },
  productQuantity: {
    borderWidth: 2,
    borderColor: "#CFD8EB",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: color.white,
  },
  quantityText: {
    paddingHorizontal: 5,
    // paddingHorizontal: 12,
    textAlign: "center",
  },
  quantityIcon: {
    paddingHorizontal: 12,
  },
  quantity: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#CFD8EB",
    marginHorizontal: 15,
  },
  dualbtn: {
    width: "46%",
    paddingLeft: 15,
    paddingRight: 15,
  },
});

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
  CheckBox,
  ImageBackground,
} from "react-native";
import color from "../../UI/Colors";
import baseStyle from "../../UI/Style";
import { Picker } from "@react-native-picker/picker";
import VariableProduct from "./VariableProduct";
import * as ImagePicker from "expo-image-picker";
import Header from "../../Components/Header/Header";
import Counter from "../../Components/Counter/Counter";
import MainButton from "../../Components/Button/MainButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: false,
      active: false,
      activeSimple: true,
      activeVariabe: false,
      productTitle: "",
      productCode: "",
      productCategory: "",
      SKU: "",
      tax: "",
      discount: "",
      price: "",

      productCategoryList: [
        { Title: "Category1", Id: 1 },
        { Title: "Category2", Id: 2 },
        { Title: "Category3", Id: 3 },
        { Title: "Category4", Id: 4 },
      ],
      localUri: null,
    };
  }
  openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    if (pickerResult.cancelled === true) {
      return;
    }

    this.setState({ localUri: pickerResult.uri });
  };

  render() {
    return (
      <>
        <View style={styles.topBarWrapper}>
          <Header
            onPressLeft={() => this.props.navigation.goBack()}
            Title={"Add Products"}
          />

          <View style={styles.productTabs}>
            <Pressable
              onPress={() => {
                this.setState({ activeSimple: true, activeVariabe: false });
              }}
            >
              <Text
                style={[
                  this.state.activeSimple
                    ? [styles.active, baseStyle.h3, styles.tabBtn]
                    : [styles.textColor, baseStyle.h3, styles.tabBtn],
                ]}
              >
                Simple Products
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                this.setState({ activeSimple: false, activeVariabe: true });
              }}
            >
              <Text
                style={[
                  this.state.activeVariabe
                    ? [styles.active, baseStyle.h3, styles.tabBtn]
                    : [styles.textColor, baseStyle.h3, styles.tabBtn],
                ]}
              >
                Variable Products
              </Text>
            </Pressable>
          </View>
        </View>
        <ScrollView overScrollMode="never">
          {this.state.activeSimple && (
            <View style={styles.tipsContainer}>
              <Pressable onPress={() => this.openImagePickerAsync()}>
                <ImageBackground
                  style={styles.loginVector}
                  source={require("../../../assets/images/addproduct-thumbnail.png")}
                >
                  <Image
                    style={styles.loginVector}
                    source={{ uri: this.state.localUri }}
                  />
                </ImageBackground>
              </Pressable>
              <View style={[baseStyle.row, { marginBottom: 20 }]}>
                <Text style={[baseStyle.h3, { color: "#129516" }]}>
                  In Stock
                </Text>
                {/* Counter Component */}
                <Counter />
              </View>
              <View
                style={[
                  baseStyle.row,
                  { justifyContent: "flex-start", marginBottom: 10 },
                ]}
              >
                <View style={[baseStyle.row, { marginRight: 15 }]}>
                  <CheckBox
                    style={styles.checkbox}
                    value={this.state.featured}
                    onValueChange={(value) =>
                      this.setState({ featured: value })
                    }
                  />
                  <Text style={baseStyle.text}>Featured Product</Text>
                </View>
                <View style={baseStyle.row}>
                  <CheckBox
                    style={styles.checkbox}
                    value={this.state.active}
                    onValueChange={(value) => this.setState({ active: value })}
                  />
                  <Text style={baseStyle.text}>Active</Text>
                </View>
              </View>
              <View>
                <TextInput
                  style={baseStyle.input}
                  placeholder="Product Title"
                  placeholderTextColor="#292929"
                  keyboardType="default"
                  value={this.state.productTitle}
                  onChangeText={(value) =>
                    this.setState({ productTitle: value })
                  }
                />
                <TextInput
                  style={baseStyle.input}
                  value={this.state.productCode}
                  placeholder="Product Code"
                  placeholderTextColor="#292929"
                  onChangeText={(value) =>
                    this.setState({ productCode: value })
                  }
                />
                <View style={baseStyle.dropdownWrapper}>
                  <Picker
                    style={baseStyle.dropdown}
                    selectedValue={this.state.productCategory}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ productCategory: itemValue })
                    }
                  >
                    <Picker.Item
                      style={baseStyle.pickerText}
                      label="Category"
                      value=""
                    />
                    {this.state.productCategoryList.map((data) => {
                      return (
                        <Picker.Item
                          style={baseStyle.pickerText}
                          style={{ marginTop: 50 }}
                          label={data.Title}
                          value={data.Id}
                          key={data.Id}
                        />
                      );
                    })}
                  </Picker>
                  <Image
                    style={baseStyle.bottomDrop}
                    source={require("../../../assets/images/dropdown-icon.png")}
                  ></Image>
                </View>
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
                    placeholder="SKU"
                    placeholderTextColor="#292929"
                    keyboardType="default"
                    value={this.state.SKU}
                    onChangeText={(value) => this.setState({ SKU: value })}
                  />
                  <Pressable
                    style={styles.faceButton}
                    onPress={() => {
                      this.props.navigation.navigate("FaceDetection");
                    }}
                  >
                    <Image
                      style={styles.faceIcon}
                      source={require("../../../assets/images/code-scan.png")}
                    ></Image>
                  </Pressable>
                </View>
                <TextInput
                  style={baseStyle.input}
                  value={this.state.tax}
                  onChangeText={(value) => this.setState({ tax: value })}
                  placeholder="Add Tax"
                  placeholderTextColor="#292929"
                  keyboardType="phone-pad"
                />
                <TextInput
                  style={baseStyle.input}
                  value={this.state.discount}
                  onChangeText={(value) => this.setState({ discount: value })}
                  placeholder="Add Discount"
                  placeholderTextColor="#292929"
                  keyboardType="phone-pad"
                />
                <TextInput
                  style={baseStyle.input}
                  value={this.state.price}
                  onChangeText={(value) => this.setState({ price: value })}
                  placeholder="Price"
                  placeholderTextColor="#292929"
                  keyboardType="phone-pad"
                />
                <MainButton
                  onPress={() => this.props.navigation.goBack()}
                  btnText={"Save"}
                />
              </View>
            </View>
          )}
          {!this.state.activeSimple && (
            <VariableProduct navigation={this.props.navigation} />
          )}
        </ScrollView>
      </>
    );
  }
}

export default AddProduct;

const styles = StyleSheet.create({
  tipsContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginVector: {
    width: windowWidth - 40,
    height: windowHeight / 3,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  imageAddIcon: {
    position: "absolute",
    top: -12,
    right: -10,
    backgroundColor: color.pelorous,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderRadius: 15,
  },
  iconBg: {
    backgroundColor: color.pelorous,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderRadius: 4,
  },
  imageAdd: {
    width: 15,
    height: 15,
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
  checkbox: {
    alignSelf: "center",
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

  productTabs: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 33,
    backgroundColor: "#F1F6FF",
    paddingVertical: 6,
  },
  active: {
    backgroundColor: color.black,
    color: color.white,
    borderRadius: 33,
  },
  tabBtn: {
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  textColor: {
    color: color.black,
  },
  checkbox: {
    alignSelf: "center",
    marginRight: 5,
  },
  topBarWrapper: {
    backgroundColor: color.white,
  },
});

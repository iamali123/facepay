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
import Counter from "../../Components/Counter/Counter";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class VariableProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: false,
      active: false,
      addAttribute: false,
      productTitle: "",
      productCode: "",
      productCategory: "",
      size: "",
      stock: "0",
      sizeList: [
        { Title: "Small", Id: 1 },
        { Title: "Medium", Id: 2 },
        { Title: "Large", Id: 3 },
        { Title: "Extra Large", Id: 4 },
      ],
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
            <Text style={[baseStyle.h3, { color: "#129516" }]}>In Stock</Text>
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
                onValueChange={(value) => this.setState({ featured: value })}
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
              value={this.state.productTitle}
              placeholder="Product Title"
              placeholderTextColor="#292929"
              keyboardType="default"
              onChangeText={(value) => this.setState({ productTitle: value })}
            />
            <TextInput
              style={baseStyle.input}
              value={this.state.productCode}
              placeholder="Product Code"
              placeholderTextColor="#292929"
              onChangeText={(value) => this.setState({ productCode: value })}
            />
            <View style={baseStyle.dropdownWrapper}>
              <Picker
                style={baseStyle.dropdown}
                selectedValue={this.state.productCategory}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ productCategory: itemValue }, () =>
                    console.log(this.state.productCategory)
                  )
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
          </View>
          {!this.state.addAttribute && (
            <View style={[baseStyle.row, { marginTop: 20 }]}>
              <Pressable
                style={[baseStyle.blueButton, styles.dualbtn]}
                onPress={() => this.setState({ addAttribute: true })}
              >
                <Text style={baseStyle.blueBtnText}>Add Attributes</Text>
              </Pressable>
              <Pressable
                style={[baseStyle.blueButton, styles.dualbtn]}
                onPress={() => this.props.navigation.goBack()}
              >
                <Text style={baseStyle.blueBtnText}>Save</Text>
              </Pressable>
            </View>
          )}
          {this.state.addAttribute && (
            <>
              <View style={[baseStyle.row, { marginBottom: 15 }]}>
                <Text style={baseStyle.h3}>Attributes</Text>
                <Pressable
                  style={baseStyle.blueButton}
                  onPress={() => this.setState({ addAttribute: false })}
                >
                  <Text style={baseStyle.blueBtnText}>Delete</Text>
                </Pressable>
              </View>
              <View style={baseStyle.dropdownWrapper}>
                <Picker
                  style={baseStyle.dropdown}
                  selectedValue={this.state.size}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ size: itemValue }, () =>
                      console.log(this.state.size)
                    )
                  }
                >
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Size"
                    value=""
                  />
                  {this.state.sizeList.map((data) => {
                    return (
                      <Picker.Item
                        style={baseStyle.pickerText}
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
                style={{
                  alignItems: "flex-end",
                  marginTop: 20,
                }}
              >
                <Pressable
                  style={baseStyle.blueButtonMain}
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Text style={baseStyle.blueBtnText}>Save</Text>
                </Pressable>
              </View>
            </>
          )}
        </View>
      </>
    );
  }
}

export default VariableProduct;

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
    marginRight: 5,
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
  quantity: {
    marginLeft: 15,
    marginRight: 15,
  },
  productTabs: {
    flexDirection: "row",
    paddingTop: 20,
  },
  active: {
    borderColor: "#3F466F",
    borderBottomWidth: 2,
  },
  tabBtn: {
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  textColor: {
    color: color.pelorous,
  },
  addMoreicon: {
    marginLeft: 10,
    width: 25,
    height: 25,
  },
  addMore: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  productQuantity: {
    borderWidth: 2,
    borderColor: "#CFD8EB",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: color.white,
  },
  quantity: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#CFD8EB",
    // paddingVertical: 5,
  },
  quantityText: {
    paddingHorizontal: 5,
    paddingHorizontal: 12,
  },
  quantityIcon: {
    paddingHorizontal: 12,
  },
  dualbtn: {
    width: "46%",
    paddingLeft: 15,
    paddingRight: 15,
  },
});

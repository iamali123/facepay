import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  Pressable,
  TextInput,
  CheckBox,
  ScrollView,
  ImageBackground,
  Modal,
} from "react-native";
import color from "../../UI/Colors";
import baseStyle from "../../UI/Style";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import Header from "../../Components/Header/Header";
import Counter from "../../Components/Counter/Counter";
import MainButton from "../../Components/Button/MainButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class EditProduct extends React.Component {
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
      weight: "",
      size: "",
      color: "",
      SKU: "",
      tax: "",
      discount: "",
      price: "",
      stock: "0",
      productCategoryList: [
        { Title: "Category1", Id: 1 },
        { Title: "Category2", Id: 2 },
        { Title: "Category3", Id: 3 },
        { Title: "Category4", Id: 4 },
      ],
      weightList: [
        { Title: "1", Id: 1 },
        { Title: "2", Id: 2 },
        { Title: "3", Id: 3 },
        { Title: "4", Id: 4 },
      ],
      sizeList: [
        { Title: "S", Id: 1 },
        { Title: "M", Id: 2 },
        { Title: "L", Id: 3 },
        { Title: "XL", Id: 4 },
      ],
      colorList: [
        { Title: "red", Id: 1 },
        { Title: "blue", Id: 2 },
        { Title: "green", Id: 3 },
        { Title: "white", Id: 4 },
      ],
      modalVisible: false,
      localUri: null,
    };
  }

  //From Gallery
  openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    if (pickerResult.cancelled === true) {
      return;
    }

    this.setState({ localUri: pickerResult.uri });
  };
  //From Camera
  openCamera = async () => {
    let cameraResult = await ImagePicker.launchCameraAsync();
    console.log(cameraResult);
    if (cameraResult.cancelled === true) {
      return;
    }

    this.setState({ localUri: cameraResult.uri });
  };
  setModalVisible = (visible, accepted) => {
    this.setState({ modalVisible: visible, accepted: accepted });
  };

  _renderImageBrowserModal() {
    return (
      <View style={baseStyle.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={baseStyle.centeredView}>
            <View style={baseStyle.modalView}>
              <Text style={baseStyle.h3}>Please select One</Text>
              <Pressable
                style={[baseStyle.blueButton, { width: "100%" }]}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.openImagePickerAsync();
                }}
              >
                <Text style={baseStyle.blueBtnText}>Gallery</Text>
              </Pressable>
              <Pressable
                style={[baseStyle.blueButton, { width: "100%", marginTop: 20 }]}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.openCamera();
                }}
              >
                <Text style={baseStyle.blueBtnText}>Camera</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  getPermission = async () => {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      await ImagePicker.requestCameraPermissionsAsync();
    } catch (err) {
      alert(err);
      console.error(err);
    }
  };
  componentDidMount() {
    this.getPermission();
  }
  render() {
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Edit Products"}
        />

        <ScrollView overScrollMode="never">
          <View style={styles.tipsContainer}>
            <View style={{ paddingBottom: 20 }}>
              <ImageBackground
                style={styles.loginVector}
                source={require("../../../assets/images/machaitio.png")}
              >
                <Image
                  style={styles.loginVector}
                  source={{ uri: this.state.localUri }}
                />
              </ImageBackground>
              <Pressable
                style={styles.imageAddIcon}
                hitSlop={20}
                onPress={() => this.setState({ modalVisible: true })}
              >
                <Image
                  style={styles.imageAdd}
                  source={require("../../../assets/images/plus-bluebg.png")}
                />
              </Pressable>
            </View>
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
                <Text>Featured Product</Text>
              </View>
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <CheckBox
                  style={styles.checkbox}
                  value={this.state.active}
                  onValueChange={(value) => this.setState({ active: value })}
                />
                <Text>Active</Text>
              </View>
            </View>
            <View>
              <TextInput
                style={baseStyle.input}
                value={this.state.productTitle}
                onChangeText={(value) => this.setState({ productTitle: value })}
                placeholder="Product Title"
                placeholderTextColor="#292929"
                keyboardType="default"
              />
              <TextInput
                style={baseStyle.input}
                value={this.state.productCode}
                onChangeText={(value) => this.setState({ productCode: value })}
                placeholder="Product Code"
                placeholderTextColor="#292929"
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
                    // this.props. navigation.navigate();
                  }}
                >
                  <Image
                    style={styles.faceIcon}
                    source={require("../../../assets/images/code-scan.png")}
                  ></Image>
                </Pressable>
              </View>
              <View style={baseStyle.dropdownWrapper}>
                <Picker
                  style={baseStyle.dropdown}
                  selectedValue={this.state.weight}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ weight: itemValue })
                  }
                >
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="KG"
                    value=""
                  />
                  {this.state.weightList.map((data) => {
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

              <View style={baseStyle.dropdownWrapper}>
                <Picker
                  style={baseStyle.dropdown}
                  selectedValue={this.state.color}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ color: itemValue })
                  }
                >
                  <Picker.Item
                    style={baseStyle.pickerText}
                    label="Color"
                    value=""
                  />
                  {this.state.colorList.map((data) => {
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

              <MainButton
                onPress={() => this.props.navigation.goBack()}
                btnText={"Save"}
              />
            </View>
          </View>
          {this._renderImageBrowserModal()}
        </ScrollView>
      </>
    );
  }
}

export default EditProduct;

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
  },
  imageAddIcon: {
    position: "absolute",
    top: -13,
    right: -6,
    // backgroundColor: color.pelorous,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 6,
    // borderRadius: 15,
  },
  iconBg: {
    backgroundColor: color.pelorous,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderRadius: 4,
    height: 30,
    width: 30,
  },
  imageAdd: {
    width: 25,
    height: 25,
  },
  imageDec: {
    width: 15,
    height: 3,
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
});

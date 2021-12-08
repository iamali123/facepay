import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import baseStyle from "../../UI/Style";
import color from "../../UI/Colors";
import Header from "../../Components/Header/Header";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Products"}
          textButton={false}
          RightIcon={require("../../../assets/images/search-icon.png")}
          onPressRightButton={() =>
            this.props.navigation.navigate("SearchMainProducts")
          }
        />

        <ScrollView overScrollMode="never">
          <View style={styles.formContainer}>
            <Pressable
              style={[baseStyle.blueButton, styles.saleBtn]}
              onPress={() => this.props.navigation.navigate("AddProduct")}
            >
              <Image
                style={styles.btnIcon}
                source={require("../../../assets/images/add-product-icon.png")}
              />
              <Text style={baseStyle.blueBtnText}>Add Product</Text>
            </Pressable>
            <View style={styles.productList}>
              <View style={styles.productBlock}>
                <ImageBackground
                  source={require("../../../assets/images/peppermint.png")}
                  style={styles.image}
                  imageStyle={styles.bgImageStyle}
                >
                  <Pressable
                    onPress={() =>
                      this.props.navigation.navigate("EditProduct")
                    }
                    style={styles.editBtn}
                  >
                    <Image
                      style={styles.editIcon}
                      source={require("../../../assets/images/edit-product-icon.png")}
                    />
                  </Pressable>
                </ImageBackground>
                <View style={styles.productContent}>
                  <Text style={[baseStyle.h6, styles.mb]}>
                    Peppermint Ma...
                  </Text>
                  <Text style={[baseStyle.h4, styles.priceColor]}>$14.16</Text>
                </View>
              </View>
              <View style={styles.productBlock}>
                <ImageBackground
                  source={require("../../../assets/images/peppermint.png")}
                  style={styles.image}
                  imageStyle={styles.bgImageStyle}
                >
                  <Pressable
                    onPress={() =>
                      this.props.navigation.navigate("EditProduct")
                    }
                    style={styles.editBtn}
                  >
                    <Image
                      style={styles.editIcon}
                      source={require("../../../assets/images/edit-product-icon.png")}
                    />
                  </Pressable>
                </ImageBackground>
                <View style={styles.productContent}>
                  <Text style={[baseStyle.h6, styles.mb]}>
                    Peppermint Ma...
                  </Text>
                  <Text style={[baseStyle.h4, styles.priceColor]}>$14.16</Text>
                </View>
              </View>
              <View style={styles.productBlock}>
                <ImageBackground
                  source={require("../../../assets/images/peppermint.png")}
                  style={styles.image}
                  imageStyle={styles.bgImageStyle}
                >
                  <Pressable
                    onPress={() =>
                      this.props.navigation.navigate("EditProduct")
                    }
                    style={styles.editBtn}
                  >
                    <Image
                      style={styles.editIcon}
                      source={require("../../../assets/images/edit-product-icon.png")}
                    />
                  </Pressable>
                </ImageBackground>
                <View style={styles.productContent}>
                  <Text style={[baseStyle.h6, styles.mb]}>
                    Peppermint Ma...
                  </Text>
                  <Text style={[baseStyle.h4, styles.priceColor]}>$14.16</Text>
                </View>
              </View>
              <View style={styles.productBlock}>
                <ImageBackground
                  source={require("../../../assets/images/peppermint.png")}
                  style={styles.image}
                  imageStyle={styles.bgImageStyle}
                >
                  <Pressable
                    onPress={() =>
                      this.props.navigation.navigate("EditProduct")
                    }
                    style={styles.editBtn}
                  >
                    <Image
                      style={styles.editIcon}
                      source={require("../../../assets/images/edit-product-icon.png")}
                    />
                  </Pressable>
                </ImageBackground>
                <View style={styles.productContent}>
                  <Text style={[baseStyle.h6, styles.mb]}>
                    Peppermint Ma...
                  </Text>
                  <Text style={[baseStyle.h4, styles.priceColor]}>$14.16</Text>
                </View>
              </View>
              <View style={styles.productBlock}>
                <ImageBackground
                  source={require("../../../assets/images/peppermint.png")}
                  style={styles.image}
                  imageStyle={styles.bgImageStyle}
                >
                  <Pressable
                    onPress={() =>
                      this.props.navigation.navigate("EditProduct")
                    }
                    style={styles.editBtn}
                  >
                    <Image
                      style={styles.editIcon}
                      source={require("../../../assets/images/edit-product-icon.png")}
                    />
                  </Pressable>
                </ImageBackground>
                <View style={styles.productContent}>
                  <Text style={[baseStyle.h6, styles.mb]}>
                    Peppermint Ma...
                  </Text>
                  <Text style={[baseStyle.h4, styles.priceColor]}>$14.16</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default ProductList;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 20,
    marginBottom: 50,
  },
  saleBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    paddingBottom: 9,
  },
  btnIcon: {
    width: 26,
    height: 26,
    resizeMode: "contain",
    marginRight: 8,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 30,
  },
  editIcon: {
    resizeMode: "contain",
    width: 20,
    height: 20,
  },
  editBtn: {
    position: "absolute",
    top: -15,
    right: -15,
    backgroundColor: "#292929",
    borderRadius: 50,
    width: 37,
    height: 37,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  priceColor: {
    color: "#129516",
  },
  image: {
    resizeMode: "cover",
    height: 150,
    position: "relative",
    borderRadius: 6,
    overflow: "visible",
  },
  bgImageStyle: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  productBlock: {
    width: "47%",
    marginBottom: 25,
    backgroundColor: color.white,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  productContent: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

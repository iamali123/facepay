import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
} from "react-native";
import baseStyle from "../../UI/Style";
import color from "../../UI/Colors";
import GlobalConstants from "../../Components/GlobalConstants";
import Counter from "../../Components/Counter/Counter";

class SearchProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active1: false,
      active2: false,
      active3: false,
      productList: [
        {
          Title: "Peppermint Margrita",
          selected: false,
          Id: 0,
          link: require("../../../assets/images/peppermint.png"),
          price: "$15.9",
        },
        {
          Title: "Peppermint Margrita",
          selected: false,
          Id: 1,
          link: require("../../../assets/images/peppermint.png"),
          price: "$15.9",
        },
        {
          Title: "Peppermint Margrita",
          selected: false,
          Id: 2,
          link: require("../../../assets/images/peppermint.png"),
          price: "$15.9",
        },
        {
          Title: "Peppermint Margrita",
          selected: false,
          Id: 3,
          link: require("../../../assets/images/peppermint.png"),
          price: "$15.9",
        },
        {
          Title: "Peppermint Margrita",
          selected: false,
          Id: 4,
          link: require("../../../assets/images/peppermint.png"),
          price: "$15.9",
        },
        {
          Title: "Peppermint Margrita",
          selected: false,
          Id: 5,
          link: require("../../../assets/images/peppermint.png"),
          price: "$15.9",
        },

        {
          Title: "Peppermint Margrita",
          selected: false,
          Id: 6,
          link: require("../../../assets/images/peppermint.png"),
          price: "$15.9",
        },

        {
          Title: "Peppermint Margrita",
          selected: false,
          Id: 7,
          link: require("../../../assets/images/peppermint.png"),
          price: "$15.9",
        },
        {
          Title: "Peppermint Margrita",
          selected: false,
          Id: 8,
          link: require("../../../assets/images/peppermint.png"),
          price: "$15.9",
        },
        {
          Title: "Peppermint Margrita",
          selected: false,
          Id: 9,
          link: require("../../../assets/images/peppermint.png"),
          price: "$15.9",
        },
      ],
      filterList: [
        { Title: "Shakes", activeFilter: true, Id: 0 },
        { Title: "Pizza & Burger", activeFilter: false, Id: 1 },
        { Title: "Grocery", activeFilter: false, Id: 2 },
        { Title: "Salad & Fries", activeFilter: false, Id: 3 },
      ],
      searchInput: "",
    };
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
        <View style={styles.topBar}>
          <View
            style={[
              baseStyle.input,
              {
                flexDirection: "row",
                position: "relative",
                backgroundColor: "#F5F7FF",
              },
            ]}
          >
            <Pressable
              style={styles.searchLeftIcon}
              onPress={() => {
                this.setState({ searchInput: "" });
                // this.props.navigation.goBack();
              }}
            >
              <Image
                style={baseStyle.backArrow}
                source={require("../../../assets/images/search-icon.png")}
              ></Image>
            </Pressable>
            <TextInput
              style={{ width: "100%", paddingRight: "8%", paddingLeft: 15 }}
              placeholder="Search"
              placeholderTextColor="#292929"
              keyboardType="default"
              value={this.state.searchInput}
              onChangeText={(value) => this.setState({ searchInput: value })}
            />
            <Pressable
              style={styles.faceButton}
              onPress={() => {
                this.setState({ searchInput: "" });
                this.props.navigation.goBack();
              }}
            >
              <Image
                style={styles.faceIcon}
                source={require("../../../assets/images/cross-bluebg.png")}
              ></Image>
            </Pressable>
          </View>
        </View>

        <ScrollView overScrollMode="never">
          <View style={styles.filteredProducts}>
            {this.state.productList.map((data, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    let productList = [...this.state.productList];
                    productList[index] = {
                      ...productList[index],
                      selected: !this.state.productList[index].selected,
                    };
                    this.setState({ productList }, () =>
                      console.log(this.state.productList[index].selected, index)
                    );
                  }}
                  style={
                    data.selected
                      ? styles.productCardBlack
                      : styles.productCardWhite
                  }
                >
                  <ImageBackground
                    source={require("../../../assets/images/peppermint.png")}
                    style={styles.image}
                    imageStyle={{
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  >
                    {this.state.active1 && (
                      <Pressable
                        onPress={() =>
                          this.setState({ active1: !this.state.active1 })
                        }
                      >
                        <Image
                          style={styles.optionsIcon}
                          source={require("../../../assets/images/cross-white.png")}
                        />
                      </Pressable>
                    )}
                  </ImageBackground>
                  <View style={styles.productContent}>
                    <View style={[styles.row, { marginBottom: "3%" }]}>
                      <Text
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={
                          data.selected
                            ? [
                                baseStyle.h2,
                                { color: color.white, width: "50%" },
                              ]
                            : [
                                baseStyle.h2,
                                { color: color.black, width: "50%" },
                              ]
                        }
                      >
                        {data.Title}
                      </Text>
                      <Pressable
                        onPress={() =>
                          this.props.navigation.navigate("SingleProduct")
                        }
                        style={[styles.row, { alignItems: "center" }]}
                      >
                        <Text
                          style={
                            data.selected
                              ? [baseStyle.h5, { color: color.white }]
                              : [baseStyle.h5, { color: color.black }]
                          }
                        >
                          View Product
                        </Text>
                        <Image
                          style={styles.arrowIcon}
                          source={
                            data.selected
                              ? require("../../../assets/images/leftarrow-whitebg.png")
                              : require("../../../assets/images/leftarrow-blackbg.png")
                          }
                        />
                      </Pressable>
                    </View>
                    <View style={styles.row}>
                      {/* Counter Component */}
                      <Counter active={data.selected} />
                      <Text
                        style={
                          data.selected
                            ? [baseStyle.h2, styles.priceColorWhite]
                            : [baseStyle.h2, styles.priceColorGreen]
                        }
                      >
                        {data.price}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </>
    );
  }
}

export default SearchProduct;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filteredProducts: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
  // productCard: {
  //   backgroundColor: color.white,
  //   maxWidth: 340,
  //   borderRadius: 10,
  //   width: "100%",
  //   justifyContent: "center",
  //   marginBottom: 20,
  // },
  image: {
    resizeMode: "cover",
    height: 185,
    width: "100%",
    position: "relative",
  },
  optionsIcon: {
    resizeMode: "contain",
    position: "absolute",
    top: 15,
    right: 20,
    width: 25,
    height: 25,
  },
  priceColor: {
    color: "#129516",
  },
  minusIcon: {
    width: 15,
    height: 3,
    resizeMode: "contain",
  },
  plusIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  mb: {
    marginBottom: 15,
  },
  quantity: {
    marginLeft: 15,
    marginRight: 15,
  },
  centerBtn: {
    alignItems: "center",
  },
  topBar: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: "15%",
    paddingBottom: 5,
    backgroundColor: color.white,
  },
  faceIcon: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  faceButton: {
    position: "absolute",
    right: "5%",
    alignSelf: "center",
  },
  searchLeftIcon: {
    position: "absolute",
    left: 13,
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  bgImageStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  btnPad: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  productContent: {
    borderWidth: 2,
    borderColor: "#CFD8EB",
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 20,
    borderTopWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  productQuantity: {
    borderWidth: 2,
    borderColor: "#CFD8EB",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
  },
  quantityText: {
    paddingHorizontal: 5,
    paddingHorizontal: 12,
  },
  quantityIcon: {
    paddingHorizontal: 12,
  },
  quantity: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#CFD8EB",
    // paddingVertical: 5,
  },
  arrowIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginLeft: 10,
  },
  productCardWhite: {
    backgroundColor: color.white,
    maxWidth: 475,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    marginBottom: 20,
  },
  productCardBlack: {
    backgroundColor: color.black,
    maxWidth: 475,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    marginBottom: 20,
  },
  priceColorGreen: {
    color: "#129516",
  },
  priceColorWhite: {
    color: color.white,
  },
  minusIconBlack: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    tintColor: color.black,
  },
  minusIconWhite: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    tintColor: color.white,
  },
  plusIconBlack: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    tintColor: color.black,
  },
  plusIconWhite: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    tintColor: color.white,
  },
  quantityTextWhite: {
    paddingHorizontal: 5,
    color: color.white,
    textAlign: "center",
  },
  quantityTextBlack: {
    paddingHorizontal: 5,
    color: color.black,
    textAlign: "center",
  },
});

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
  TextInput,
} from "react-native";
import baseStyle from "../../UI/Style";

import color from "../../UI/Colors";
import GlobalConstants from "../../Components/GlobalConstants";
import Header from "../../Components/Header/Header";
import Counter from "../../Components/Counter/Counter";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class PointOfSaleHorizontalCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active1: false,
      active2: false,
      active3: false,
      productList: [
        {
          Title: "99999999999 99 kkkk",
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
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      // do something
      GlobalConstants.route = "SaleNumber";
    });
  }
  componentWillUnmount() {
    this._unsubscribe;
  }
  render() {
    return (
      <>
        {/* Header Component */}
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
          <View style={styles.categoriesHead}>
            <Text style={[baseStyle.h2, styles.innerStyle]}>
              Shop by Categories
            </Text>
            <Pressable
              onPress={() => this.props.navigation.navigate("Categories")}
            >
              <Text style={baseStyle.h6}>View All</Text>
            </Pressable>
          </View>
          <View style={baseStyle.filterList}>
            <ScrollView
              overScrollMode="never"
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View style={baseStyle.categoriesList}>
                {this.state.filterList.map((data, index) => {
                  return (
                    <View style={baseStyle.categoriesList} key={index}>
                      <Pressable
                        style={
                          data.activeFilter
                            ? [baseStyle.catBtn, baseStyle.active]
                            : baseStyle.catBtn
                        }
                        onPress={() => {
                          let filterList = [...this.state.filterList];
                          filterList[index] = {
                            ...filterList[index],
                            activeFilter:
                              !this.state.filterList[index].activeFilter,
                          };
                          this.setState({ filterList }, () =>
                            console.log(
                              this.state.filterList[index].activeFilter,
                              index
                            )
                          );
                        }}
                      >
                        <Text
                          style={
                            data.activeFilter
                              ? [baseStyle.blueBtnText, styles.activeTextColor]
                              : [baseStyle.blueBtnText, styles.btnTextColor]
                          }
                        >
                          {data.Title}
                        </Text>
                      </Pressable>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <View style={styles.listViewFormat}>
            <Text style={baseStyle.h3}>Shakes</Text>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                onPress={() =>
                  this.props.navigation.navigate("PointOfSaleHorizontalCards")
                }
              >
                <Image
                  style={styles.ViewIcon}
                  source={require("../../../assets/images/list-view.png")}
                />
              </Pressable>
              <Pressable
                onPress={() => this.props.navigation.navigate("PointOfSale")}
              >
                <Image
                  style={styles.ViewIcon}
                  source={require("../../../assets/images/column-view.png")}
                />
              </Pressable>
            </View>
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
                  <Image
                    source={require("../../../assets/images/peppermint.png")}
                    style={styles.image}
                  ></Image>
                  <View
                    style={{
                      paddingLeft: 15,
                      flex: 1
                    }}
                  >
                    <View style={[styles.row, { marginBottom: "5%", width: "100%" }]}>
                      <View style={{ width: "50%", paddingRight: 10 }}>
                        <Text
                          ellipsizeMode="tail"
                          numberOfLines={1}
                          style={
                            data.selected
                              ? [baseStyle.h4, { color: color.white }]
                              : [baseStyle.h4, { color: color.black }]
                          }
                        >
                          {data.Title}
                        </Text>
                      </View>
                      <View style={{width: "50%"}}>
                        <Pressable
                          style={[styles.row, { alignItems: "center" }]}
                          onPress={() =>
                            this.props.navigation.navigate("SingleProduct")
                          }
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

export default PointOfSaleHorizontalCards;

const styles = StyleSheet.create({
  filterSection: {
    marginBottom: 20,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  productRow: {
    flexDirection: "row",
    marginLeft: 25,
    marginBottom: 30,
  },
  btnRow: {
    flexDirection: "row",
    marginBottom: 30,
    paddingLeft: 25,
    paddingRight: 25,
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
  ViewIcon: {
    marginLeft: 7,
    marginRight: 7,
    width: 25,
    height: 25,
    resizeMode: "cover",
  },
  listViewFormat: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  arrowIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginLeft: 5,
  },
  categoriesList: {
    flexDirection: "row",
    marginLeft: 25,
  },
  categoriesHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 6,
  },
  productQuantity: {
    borderWidth: 2,
    borderColor: "#CFD8EB",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
  },
  quantityTextWhite: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#CFD8EB",
    color: color.white,
    textAlign: "center",
    paddingHorizontal: 5,
  },
  quantityTextBlack: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#CFD8EB",
    color: color.black,
    textAlign: "center",
    paddingHorizontal: 5,
  },
  quantityIcon: {
    paddingHorizontal: 8,
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

  active: {
    backgroundColor: color.black,
  },
  activeTextColor: {
    color: "#fff",
  },
  filteredProducts: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  productCardWhite: {
    backgroundColor: color.white,
    borderRadius: 6,
    marginBottom: 15,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  productCardBlack: {
    backgroundColor: color.black,
    borderRadius: 6,
    marginBottom: 15,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  image: {
    resizeMode: "cover",
    height: 80,
    width: 80,
    borderRadius: 6,
  },
  optionsIcon: {
    resizeMode: "contain",
    position: "absolute",
    top: 15,
    right: 20,
    width: 24,
    height: 7,
  },
  priceColorGreen: {
    color: "#129516",
  },
  priceColorWhite: {
    color: color.white,
  },
  minusIconWhite: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    tintColor: color.white,
  },
  minusIconBlack: {
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
  plusIconBlack: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    tintColor: color.black,
  },
  btnTextColor: {
    color: color.black,
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
  hbtn: {
    paddingLeft: 13,
    paddingRight: 13,
  },
  orderQuantity: {
    // flexDirection: "row",
    backgroundColor: color.black,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 7,
    // paddingBottom: 4,
    // paddingLeft: 6,
    // paddingRight: 4,
    borderRadius: 12,
    position: "absolute",
    top: -12,
    right: -12,
    borderColor: "#fff",
    borderWidth: 2,
    width: 24,
    height: 24,
  },
  numColor: {
    color: "#ffffff",
  },
});

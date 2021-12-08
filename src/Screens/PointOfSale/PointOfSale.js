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
  RefreshControl,
} from "react-native";
import baseStyle from "../../UI/Style";
import color from "../../UI/Colors";
import GlobalConstants from "../../Components/GlobalConstants";
import Header from "../../Components/Header/Header";
import Counter from "../../Components/Counter/Counter";

class PointOfSale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,

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
    };
  }

  onFresh() {
    this.setState({ refreshing: true });
    setTimeout(() => this.increment(), 100);
    this.setState({ refreshing: false });
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

        <ScrollView
          overScrollMode="never"
          refreshControl={
            <RefreshControl
              tintColor="#000"
              refreshing={this.state.refreshing}
              // onRefresh={() => this.onFresh()}
            />
          }
        >
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
                    {data.selected && (
                      <Pressable
                        onPress={() =>
                          this.setState({ active1: !data.selected })
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

export default PointOfSale;

const styles = StyleSheet.create({
  filterSection: {
    marginBottom: 20,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productRow: {
    flexDirection: "row",
    marginLeft: 25,
    marginBottom: 30,
  },
  btnRow: {
    flexDirection: "row",
    marginBottom: 30,
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
  arrowIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginLeft: 10,
    shadowColor: color.white,
  },
  listViewFormat: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  filteredProducts: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
  categoriesList: {
    flexDirection: "row",
    marginLeft: 10,
    paddingBottom: 15,
  },
  categoriesHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 6,
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
    borderColor: color.black,
  },
  activeTextColor: {
    color: "#fff",
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
  image: {
    resizeMode: "cover",
    height: 185,
    width: "100%",
    position: "relative",
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
  quantityIcon: {
    paddingHorizontal: 12,
  },
  optionsIcon: {
    resizeMode: "contain",
    position: "absolute",
    top: 15,
    right: 20,
    width: 25,
    height: 25,
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
  quantity: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#CFD8EB",
    // paddingVertical: 1,
  },
  centerBtn: {
    alignItems: "center",
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
  btnTextColor: {
    color: color.black,
  },
});

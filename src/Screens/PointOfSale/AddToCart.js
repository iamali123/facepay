import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import color from "../../UI/Colors";
import GlobalConstants from "../../Components/GlobalConstants";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock1: 0,
      stock2: 0,
      stock3: 0,
      discount: "",
      size: "",
      type: "",
    };
  }
  increment() {
    this.setState({ stock1: this.state.stock1 + 1 });
  }
  increment2() {
    this.setState({ stock2: this.state.stock2 + 1 });
  }
  increment3() {
    this.setState({ stock3: this.state.stock3 + 1 });
  }
  decrement() {
    if (this.state.stock1 < 1) {
      this.setState({ stock1: 0 });
    } else this.setState({ stock1: this.state.stock1 - 1 });
  }
  decrement2() {
    if (this.state.stock2 < 1) {
      this.setState({ stock2: 0 });
    } else this.setState({ stock2: this.state.stock2 - 1 });
  }
  decrement3() {
    if (this.state.stock3 < 1) {
      this.setState({ stock3: 0 });
    } else this.setState({ stock3: this.state.stock3 - 1 });
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
          Title={"Checkout"}
        />

        <View style={styles.chargeContainer}>
          <View style={[baseStyle.blueButton, styles.taxBtn]}>
            <Text style={baseStyle.blueBtnText}>Amount $116.47</Text>
            <Text style={styles.btnSmallText}>Including Tax</Text>
          </View>
          <View style={styles.selectedItem}>
            <View style={styles.itemName}>
              <Text style={baseStyle.h5}>Chocolate Frappucino...</Text>
            </View>
            <View style={styles.changeQuantity}>
              <Pressable onPress={() => this.decrement()} hitSlop={20}>
                <Image
                  style={styles.minusIcon}
                  source={require("../../../assets/images/decrement-icon.png")}
                />
              </Pressable>
              <Text style={[baseStyle.h6, styles.quantity]}>
                {this.state.stock1}
              </Text>
              <Pressable onPress={() => this.increment()} hitSlop={20}>
                <Image
                  style={styles.plusIcon}
                  source={require("../../../assets/images/increment-icon.png")}
                />
              </Pressable>
            </View>
            <View style={styles.orderValue}>
              <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
            </View>
            <View style={styles.deleteOrder}>
              <Pressable>
                <Image
                  style={styles.optionsIcon}
                  source={require("../../../assets/images/cross-bluebg.png")}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.selectedItem}>
            <View style={styles.itemName}>
              <Text style={baseStyle.h5}>Salad with spray</Text>
            </View>
            <View style={styles.changeQuantity}>
              <Pressable onPress={() => this.decrement()} hitSlop={20}>
                <Image
                  style={styles.minusIcon}
                  source={require("../../../assets/images/decrement-icon.png")}
                />
              </Pressable>
              <Text style={[baseStyle.h6, styles.quantity]}>
                {this.state.stock1}
              </Text>
              <Pressable onPress={() => this.increment()} hitSlop={20}>
                <Image
                  style={styles.plusIcon}
                  source={require("../../../assets/images/increment-icon.png")}
                />
              </Pressable>
            </View>
            <View style={styles.orderValue}>
              <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
            </View>
            <View style={styles.deleteOrder}>
              <Pressable>
                <Image
                  style={styles.optionsIcon}
                  source={require("../../../assets/images/cross-bluebg.png")}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.selectedItem}>
            <View style={styles.itemName}>
              <Text style={baseStyle.h5}>Chocolate</Text>
            </View>
            <View style={styles.changeQuantity}>
              <Pressable onPress={() => this.decrement()} hitSlop={20}>
                <Image
                  style={styles.minusIcon}
                  source={require("../../../assets/images/decrement-icon.png")}
                />
              </Pressable>
              <Text style={[baseStyle.h6, styles.quantity]}>
                {this.state.stock1}
              </Text>
              <Pressable onPress={() => this.increment()} hitSlop={20}>
                <Image
                  style={styles.plusIcon}
                  source={require("../../../assets/images/increment-icon.png")}
                />
              </Pressable>
            </View>
            <View style={styles.orderValue}>
              <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
            </View>
            <View style={styles.deleteOrder}>
              <Pressable>
                <Image
                  style={styles.optionsIcon}
                  source={require("../../../assets/images/cross-bluebg.png")}
                />
              </Pressable>
            </View>
          </View>
          <View style={[styles.row, styles.bborder]}>
            <View style={styles.leftCol}>
              <Text style={baseStyle.h6}>Subtotal</Text>
              <Text style={baseStyle.h6}>Sales Tax</Text>
              <Text style={baseStyle.h6}>Discount</Text>
            </View>
            <View style={styles.rightCol}>
              <Text style={baseStyle.h6}>$29.36</Text>
              <Text style={baseStyle.h6}>$2.20</Text>
              <Text style={baseStyle.h6}>$2.75</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.leftCol}>
              <Text style={baseStyle.h6}>Total</Text>
            </View>
            <View style={styles.rightCol}>
              <Text style={baseStyle.h6}>$28.76</Text>
            </View>
          </View>
          <View style={[styles.row, styles.mt]}>
            <Pressable
              style={[baseStyle.blueButton, styles.innerStyle]}
              onPress={() => this.props.navigation.navigate("PointOfSaleTab")}
            >
              <Text style={[baseStyle.blueBtnText, styles.textSize]}>
                Cancel Order
              </Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.innerStyle]}
              onPress={() => this.props.navigation.navigate("ChargeStack")}
            >
              <Text style={[baseStyle.blueBtnText, styles.textSize]}>
                Checkout
              </Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  }
}

export default AddToCart;

const styles = StyleSheet.create({
  chargeContainer: {
    flex: 1,
    marginTop: "5%",
    marginBottom: "20%",
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  taxBtn: {
    width: "100%",
    marginBottom: 25,
  },
  btnSmallText: {
    textAlign: "center",
    color: "#ffffff",
    marginTop: -5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#D8E0F3",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    paddingBottom: 16,
    marginBottom: 20,
  },
  bborder: {
    borderColor: "#D8E0F3",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    paddingBottom: 8,
    marginBottom: 10,
  },
  priceColor: {
    color: "#129516",
  },

  minusIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  optionsIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  plusIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  mt: {
    marginTop: 50,
  },
  leftCol: {
    width: "55%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  rightCol: {
    alignItems: "flex-start",
    width: "25%",
  },
  itemName: {
    width: "47%",
    paddingRight: 3,
  },
  changeQuantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "20%",
  },
  orderValue: {
    width: "18%",
    alignItems: "center",
  },
  deleteOrder: {
    width: "10%",
    alignItems: "flex-end",
  },
});

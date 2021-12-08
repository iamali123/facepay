import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import baseStyle from "../../UI/Style";
import { CommonActions } from "@react-navigation/native";
import Header from "../../Components/Header/Header";
import MainButton from "../../Components/Button/MainButton";
class PrintReceipt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPrint() {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: "PointOfSale",
          },
        ],
      })
    );
  }
  render() {
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Print Receipt"}
        />

        <View style={styles.chargeContainer}>
          <View style={styles.selectedItem}>
            <Text style={baseStyle.h5}>Chocolate Frappucino...</Text>
            <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
          </View>
          <View style={styles.selectedItem}>
            <Text style={baseStyle.h5}>Salad With Spray...</Text>
            <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
          </View>
          <View style={styles.selectedItem}>
            <Text style={baseStyle.h5}>Peppermint Macchiato</Text>
            <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
          </View>
          <View style={[styles.row, styles.bborder]}>
            <View style={styles.leftCol}>
              <Text style={baseStyle.h6}>Subtotal</Text>
              <Text style={baseStyle.h6}>Sales Tax</Text>
              <Text style={baseStyle.h6}>Discount</Text>
            </View>
            <View style={styles.rightCol}>
              <Text style={baseStyle.h6}>$29.36</Text>
              <Text style={baseStyle.h6}>$2.15</Text>
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

          <MainButton
            onPress={() => {
              const nextRoute = this.props.route.params;
              if (nextRoute != undefined) {
                this.props.navigation.goBack();
              } else this.onPrint();
            }}
            btnText={"Print"}
          />
        </View>
      </>
    );
  }
}

export default PrintReceipt;

const styles = StyleSheet.create({
  chargeContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 50,
    paddingRight: "5%",
    paddingLeft: "5%",
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

  leftCol: {
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  rightCol: {
    width: "20%",
    alignItems: "flex-end",
  },
});

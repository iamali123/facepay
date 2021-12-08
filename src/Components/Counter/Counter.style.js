import { StyleSheet } from "react-native";
import color from "../../UI/Colors";

export default StyleSheet.create({
  productQuantity: {
    borderWidth: 2,
    borderColor: "#CFD8EB",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
  },
  quantity: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#CFD8EB",
  },
  quantityTextWhite: {
    paddingHorizontal: 5,
    textAlign: "center",
    color: color.white,
  },
  quantityTextBlack: {
    paddingHorizontal: 5,
    textAlign: "center",
    color: color.black,
  },
  quantityIcon: {
    paddingHorizontal: 12,
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
});

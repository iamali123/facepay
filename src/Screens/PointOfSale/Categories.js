import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import color from "../../UI/Colors";
import GlobalConstants from "../../Components/GlobalConstants";
class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          Title={"Categories"}
          textButton={false}
          RightIcon={require("../../../assets/images/search-icon.png")}
          onPressRightButton={() =>
            this.props.navigation.navigate("SearchMainProducts")
          }
        />
        <View style={styles.ChargeContainer}>
          <Text style={baseStyle.h2}>Foods</Text>
          <View style={styles.paymentTypes}>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn, baseStyle.active]}
              onPress={() => this.props.navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h4, styles.textColor, styles.activeText]}>
                Shakes
              </Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => this.props.navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>
                Pizza & Burger
              </Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => this.props.navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>
                Salad & Fries
              </Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => this.props.navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>Grocery</Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => this.props.navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>Pharmacy</Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => this.props.navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>Meat</Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => this.props.navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>Health</Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => this.props.navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>
                Auto Accessories
              </Text>
            </Pressable>
            <Pressable
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => this.props.navigation.navigate("PointOfSale")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>Frozen</Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  }
}

export default Categories;

const styles = StyleSheet.create({
  ChargeContainer: {
    flex: 1,
    marginTop: "7%",
    marginBottom: "20%",
    paddingRight: 20,
    paddingLeft: 20,
  },
  paymentTypes: {
    flexDirection: "row",
    marginTop: 10,
    flexWrap: "wrap",
  },
  iconBtn: {
    backgroundColor: color.white,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 6,
    borderColor: color.black,
    borderWidth: 1,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  textColor: {
    color: color.eastbay,
    textAlign: "center",
  },
  active: {
    backgroundColor: color.black,
    borderColor: color.black,
  },
  activeText: {
    color: "#fff",
  },
});

import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import GlobalConstants from "../../Components/GlobalConstants";
import normalStyles from "./Orders.style";
import responsiveStyles from "./Orders.style"

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterList: [
        { Title: "Date", Id: 0, activeFilter: true },
        { Title: "Status", Id: 1, activeFilter: false },
        { Title: "  Order Title", Id: 2, activeFilter: false },
      ],
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
      {/* Header Component */}
        <Header
          Title={"Orders"}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <View style={normalStyles.filterrSection}>
          <Text style={baseStyle.h3}>Filters</Text>
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
                            ? [
                                baseStyle.blueBtnText,
                                normalStyles.activeTextColor,
                              ]
                            : [baseStyle.blueBtnText, normalStyles.textColor]
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
        <ScrollView overScrollMode="never">
          <View style={normalStyles.productRow}>
            <View style={[baseStyle.shadow, normalStyles.posItem]}>
              <Pressable
                style={normalStyles.delBtn}
                onPress={() => this.props.navigation.goBack()}
              >
                <Image
                  style={normalStyles.delIcon}
                  source={require("../../../assets/images/cross-bluebg.png")}
                />
              </Pressable>
              <View style={[baseStyle.row, { width: "100%" }]}>
                <Text style={baseStyle.h6}>Robert Johnson</Text>
                <Text style={[baseStyle.h6, normalStyles.priceColor]}>
                  $28.76
                </Text>
              </View>
              <View
                style={[normalStyles.normalRow, responsiveStyles.normalRow]}
              >
                <View style={[normalStyles.leftCol, responsiveStyles.leftCol]}>
                  <View style={[baseStyle.row, { marginBottom: 10 }]}>
                    <Text
                      style={[
                        baseStyle.h6,
                        normalStyles.innerStyle,
                        { paddingRight: 10 },
                      ]}
                    >
                      A30458
                    </Text>
                    <Text style={[baseStyle.h6, normalStyles.orderStatus]}>
                      (Pending)
                    </Text>
                  </View>
                  <View style={baseStyle.row}>
                    <Text
                      style={[
                        baseStyle.h6,
                        normalStyles.textColor,
                        { paddingRight: 10 },
                      ]}
                    >
                      24/08/21
                    </Text>
                    <Text style={[baseStyle.h6, normalStyles.textColor]}>
                      02:13 pm
                    </Text>
                  </View>
                </View>
                <View
                  style={[normalStyles.RightCol, responsiveStyles.RightCol]}
                >
                  <View style={[baseStyle.row, { paddingTop: 20 }]}>
                    <Pressable
                      style={[
                        baseStyle.blueButton,
                        normalStyles.btnStyle,
                        { marginRight: 10 },
                      ]}
                      onPress={() =>
                        this.props.navigation.navigate("ChargeStack")
                      }
                    >
                      <Text style={baseStyle.blueBtnText}>Charge</Text>
                    </Pressable>
                    <Pressable
                      style={[baseStyle.blueButton, normalStyles.btnStyle]}
                      onPress={() =>
                        this.props.navigation.navigate("PointOfSaleTab")
                      }
                    >
                      <Text style={baseStyle.blueBtnText}>Edit Order</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <View style={[baseStyle.shadow, normalStyles.posItem]}>
              <Pressable
                style={normalStyles.delBtn}
                onPress={() => this.props.navigation.goBack()}
              >
                <Image
                  style={normalStyles.delIcon}
                  source={require("../../../assets/images/cross-bluebg.png")}
                />
              </Pressable>
              <View style={[baseStyle.row, { width: "100%" }]}>
                <Text style={baseStyle.h6}>Robert Johnson</Text>
                <Text style={[baseStyle.h6, normalStyles.priceColor]}>
                  $28.76
                </Text>
              </View>
              <View
                style={[normalStyles.normalRow, responsiveStyles.normalRow]}
              >
                <View style={[normalStyles.leftCol, responsiveStyles.leftCol]}>
                  <View style={[baseStyle.row, { marginBottom: 10 }]}>
                    <Text
                      style={[
                        baseStyle.h6,
                        normalStyles.innerStyle,
                        { paddingRight: 10 },
                      ]}
                    >
                      A30458
                    </Text>
                    <Text style={[baseStyle.h6, normalStyles.orderStatus]}>
                      (In Progress)
                    </Text>
                  </View>
                  <View style={baseStyle.row}>
                    <Text
                      style={[
                        baseStyle.h6,
                        normalStyles.textColor,
                        { paddingRight: 10 },
                      ]}
                    >
                      24/08/21
                    </Text>
                    <Text style={[baseStyle.h6, normalStyles.textColor]}>
                      02:13 pm
                    </Text>
                  </View>
                </View>
                <View
                  style={[normalStyles.RightCol, responsiveStyles.RightCol]}
                >
                  <View style={[baseStyle.row, { paddingTop: 20 }]}>
                    <Pressable
                      style={[
                        baseStyle.blueButton,
                        normalStyles.btnStyle,
                        { marginRight: 10 },
                      ]}
                      onPress={() =>
                        this.props.navigation.navigate("ChargeStack")
                      }
                    >
                      <Text style={baseStyle.blueBtnText}>Charge</Text>
                    </Pressable>
                    <Pressable
                      style={[baseStyle.blueButton, normalStyles.btnStyle]}
                      onPress={() =>
                        this.props.navigation.navigate("PointOfSaleTab")
                      }
                    >
                      <Text style={baseStyle.blueBtnText}>Edit Order</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <View style={[baseStyle.shadow, normalStyles.posItem]}>
              <Pressable
                style={normalStyles.delBtn}
                onPress={() => this.props.navigation.goBack()}
              >
                <Image
                  style={normalStyles.delIcon}
                  source={require("../../../assets/images/cross-bluebg.png")}
                />
              </Pressable>
              <View style={[baseStyle.row, { width: "100%" }]}>
                <Text style={baseStyle.h6}>Robert Johnson</Text>
                <Text style={[baseStyle.h6, normalStyles.priceColor]}>
                  $28.76
                </Text>
              </View>
              <View
                style={[normalStyles.normalRow, responsiveStyles.normalRow]}
              >
                <View style={[normalStyles.leftCol, responsiveStyles.leftCol]}>
                  <View style={[baseStyle.row, { marginBottom: 10 }]}>
                    <Text
                      style={[
                        baseStyle.h6,
                        normalStyles.innerStyle,
                        { paddingRight: 10 },
                      ]}
                    >
                      A30458
                    </Text>
                    <Text style={[baseStyle.h6, normalStyles.orderStatus]}>
                      (Pending)
                    </Text>
                  </View>
                  <View style={baseStyle.row}>
                    <Text
                      style={[
                        baseStyle.h6,
                        normalStyles.textColor,
                        { paddingRight: 10 },
                      ]}
                    >
                      24/08/21
                    </Text>
                    <Text style={[baseStyle.h6, normalStyles.textColor]}>
                      02:13 pm
                    </Text>
                  </View>
                </View>
                <View
                  style={[normalStyles.RightCol, responsiveStyles.RightCol]}
                >
                  <View style={[baseStyle.row, { paddingTop: 20 }]}>
                    <Pressable
                      style={[
                        baseStyle.blueButton,
                        normalStyles.btnStyle,
                        { marginRight: 10 },
                      ]}
                      onPress={() =>
                        this.props.navigation.navigate("ChargeStack")
                      }
                    >
                      <Text style={baseStyle.blueBtnText}>Charge</Text>
                    </Pressable>
                    <Pressable
                      style={[baseStyle.blueButton, normalStyles.btnStyle]}
                      onPress={() =>
                        this.props.navigation.navigate("PointOfSaleTab")
                      }
                    >
                      <Text style={baseStyle.blueBtnText}>Edit Order</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Orders;


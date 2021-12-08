import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import { LinearGradient } from "expo-linear-gradient";
import GlobalConstants from "../../Components/GlobalConstants";
import styles from "./Dashboard.style"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const data = {
  labels: ["MO", "TU", "WE", "TH", "FR", "SA"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
      color: (opacity = 1) => `rgb(0, 0, 0, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
};
const chartConfig = {
  backgroundColor: "#000",
  backgroundGradientFrom: "#000",
  backgroundGradientTo: "#000",
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  decimalPlaces: 1, // optional, defaults to 2dp
  useShadowColorFromDataset: true, // optional
  color: (opacity = 1) => `rgb(0, 0, 0, ${opacity})`, // optional

  barPercentage: 0.5,
};
class Dashboard extends React.Component {
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
          Title={"Dashboard"}
        />

        <ScrollView overScrollMode="never">
          <View
            style={[
              baseStyle.row,
              {
                marginTop: 20,
                marginBottom: 20,
                flexWrap: "wrap",
                paddingLeft: 20,
                paddingRight: 20,
              },
            ]}
          >
            {/* <View
            style={[
              styles.card,
              {
                shadowColor: "#A651FB",
                elevation: 5,
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 1.0,
              },
            ]}
          ></View> */}
            <LinearGradient
              colors={["#6BCB0C", "#81E220"]}
              style={styles.card}
            >
              <Image
                style={styles.cardIcon}
                source={require("../../../assets/images/total-order.png")}
              />

              <Text style={[baseStyle.h6, styles.textColor]}>
                Total Orders
              </Text>
              <Text style={[baseStyle.h1, styles.textColor]}>15482</Text>
            </LinearGradient>

            <LinearGradient
              colors={["#A651FB", "#8120E2"]}
              style={styles.card}
            >
              <Image
                style={styles.cardIcon}
                source={require("../../../assets/images/cancel-order.png")}
              />

              <Text style={[baseStyle.h6, styles.textColor]}>
                Cancelled Orders
              </Text>
              <Text style={[baseStyle.h1, styles.textColor]}>2441</Text>
            </LinearGradient>

            <LinearGradient
              colors={["#20E2E2", "#20E2E2"]}
              style={styles.card}
            >
              <Image
                style={styles.cardIcon}
                source={require("../../../assets/images/dollar-icon.png")}
              />

              <Text style={[baseStyle.h6, styles.textColor]}>
                Total Earning
              </Text>
              <Text style={[baseStyle.h1, styles.textColor]}>15482</Text>
            </LinearGradient>

            <LinearGradient
              colors={["#FE4747", "#E22020"]}
              style={styles.card}
            >
              <Image
                style={styles.cardIcon}
                source={require("../../../assets/images/clock-icon.png")}
              />

              <Text style={[baseStyle.h6, styles.textColor]}>
                Pending Payments
              </Text>
              <Text style={[baseStyle.h1, styles.textColor]}>
                $345.45
              </Text>
            </LinearGradient>
          </View>
          <View style={{ paddingLeft: 15, paddingRight: 15 }}>
            <Text style={[baseStyle.h2, { marginBottom: 10 }]}>Earning</Text>
            {/* <ScrollView
            overScrollMode="never" horizontal={true}> */}
            <LineChart
              withDots={false}
              withShadow={true}
              withInnerLines={false}
              withOuterLines={false}
              fromZero={true}
              data={data}
              width={windowWidth}
              height={256}
              chartConfig={chartConfig}
              yAxisLabel="$"
              bezier
              style={{ paddingBottom: 30 }}
              dot={false}
              withInnerLines={false}
            />
            {/* </ScrollView> */}
            <Text style={[baseStyle.h2, { marginBottom: 10 }]}>
              Recent Transactions
            </Text>
            <Pressable
              onPress={() =>
                this.props.navigation.navigate("TransactionsStack")
              }
              style={{ flexDirection: "row", paddingBottom: 20 }}
            >
              <View style={styles.dollarImg}>
                <Image
                  style={styles.img}
                  source={require("../../../assets/images/money-bag.png")}
                />
              </View>
              <View
                style={[
                  baseStyle.row,
                  { alignItems: "center", paddingLeft: 15, flex: 1 },
                ]}
              >
                <View>
                  <Text style={baseStyle.h2}>ID: 2451438</Text>
                  <View style={baseStyle.row}>
                    <Text style={baseStyle.h6}>08 June, 2021 </Text>
                    <Text style={baseStyle.h6}>| </Text>
                    <Text style={baseStyle.h6}> 11:00 </Text>
                  </View>
                </View>
                <View>
                  <Text style={[baseStyle.h6, styles.amountColor]}>
                    $258.85
                  </Text>
                </View>
              </View>
            </Pressable>
            <Pressable
              onPr
              onPress={() =>
                this.props.navigation.navigate("TransactionsStack")
              }
              style={{ flexDirection: "row", width: "100%", paddingBottom: 20 }}
            >
              <View style={styles.dollarImg}>
                <Image
                  style={styles.img}
                  source={require("../../../assets/images/money-bag.png")}
                />
              </View>
              <View
                style={[
                  baseStyle.row,
                  { alignItems: "center", paddingLeft: 15, flex: 1 },
                ]}
              >
                <View>
                  <Text style={baseStyle.h2}>ID: 2451438</Text>
                  <View style={baseStyle.row}>
                    <Text style={baseStyle.h6}>08 June, 2021 </Text>
                    <Text style={baseStyle.h6}>| </Text>
                    <Text style={baseStyle.h6}> 11:00 </Text>
                  </View>
                </View>
                <Text style={[baseStyle.h6, styles.amountColor]}>
                  $258.85
                </Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Dashboard;


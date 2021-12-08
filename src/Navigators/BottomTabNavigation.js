import * as React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabActions, useRoute, useIsFocused } from "@react-navigation/native";

import {
  PointOfSaleStack,
  DashboardStack,
  TransactionsStack,
  OrdersStack,
  SettingsStack,
} from "./StackNavigation";
import SaleNumber from "../PointOfSale/SaleNumber";
import NewSale from "../PointOfSale/NewSale";

const Tab = createBottomTabNavigator();

const getTabBarVisible = (route) => {
  const params = route.params;
  if (params) {
    if (params.tabBarVisible === false) {
      return false;
    }
  }
  return true;
};
const CustomTabBarButtonTwo = ({ children, onPress }) => {
  return null;
};

const CustomTabBarButton = ({ children, onPress }) => (
  <Pressable
    activeOpacity={0.5}
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 60,
        height: 60,
        position: "relative",
        borderRadius: 30,
        backgroundColor: "#292929",
        borderColor: "#fff",
        borderWidth: 2,
      }}
    >
      {children}
    </View>
  </Pressable>
);
export const BottomTabNavigation = ({ navigation, route }) => {
  // const isFocused = useIsFocused();
  const [Index, setIndex] = React.useState("PointOfSaleTab");
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      initialRouteName="PointOfSaleTab"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          title: "Transactions",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../../assets/images/transactions-icon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#49B7C4" : "#292929",
                }}
              />
            </View>
          ),
          tabBarButton: (props) => (
            <Pressable
              {...props}
              onPress={() => {
                navigation.dispatch(TabActions.jumpTo("TransactionsTab"));
                setIndex("PointOfSaleTab");
              }}
            />
          ),
        }}
        name="TransactionsTab"
        component={TransactionsStack}
      />
      <Tab.Screen
        options={{
          title: "Dashboard",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../../assets/images/dashboard-icon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#49B7C4" : "#292929",
                }}
              />
            </View>
          ),
          tabBarButton: (props) => (
            <Pressable
              {...props}
              onPress={() => {
                console.log(route.name);
                navigation.dispatch(TabActions.jumpTo("DashboardTab"));
                setIndex("PointOfSaleTab");
              }}
            />
          ),
        }}
        name="DashboardTab"
        component={DashboardStack}
      />
      <Tab.Screen
        options={{
          title: "PointOfSale",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../../assets/images/point-of-sale-update.png")
                  : require("../../../assets/images/tab-pos-icon.png")
              }
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#fff" : "#fff",
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              onPress={() => {
                // if (!isFocused) {
                //   setIndex("PointOfSaleTab");
                // }
                if (Index == "SaleNumber") {
                  navigation.dispatch(TabActions.jumpTo(Index));
                  setIndex("PointOfSaleTab");
                } else if (Index == "PointOfSaleTab") {
                  navigation.dispatch(TabActions.jumpTo(Index));
                  setIndex("SaleNumber");
                }
              }}
            />
          ),
        }}
        name="PointOfSaleTab"
        component={PointOfSaleStack}
      />
      <Tab.Screen
        options={{
          title: "Orders",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../../assets/images/orders-icon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#49B7C4" : "#292929",
                }}
              />
            </View>
          ),
          tabBarButton: (props) => (
            <Pressable
              {...props}
              onPress={() => {
                navigation.dispatch(TabActions.jumpTo("OrdersTab"));
                setIndex("PointOfSaleTab");
              }}
            />
          ),
        }}
        name="OrdersTab"
        component={OrdersStack}
      />
      <Tab.Screen
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../../assets/images/settings-icon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#49B7C4" : "#292929",
                }}
              />
            </View>
          ),
          tabBarButton: (props) => (
            <Pressable
              {...props}
              onPress={() => {
                navigation.dispatch(TabActions.jumpTo("SettingsTab"));
                setIndex("PointOfSaleTab");
              }}
            />
          ),
        }}
        name="SettingsTab"
        component={SettingsStack}
      />
      <Tab.Screen
        options={{
          // tabBarStyle: { display: "none" },
          title: "SaleNumber",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/images/point-of-sale-update.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#fff" : "#fff",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButtonTwo {...props} />,
        }}
        name="SaleNumber"
        component={SaleNumber}
      />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   bottomNav: {
//     bottom: 25,
//     // left: 20,
//     // right: 20,
//     // height: 90,
//     // elevation: 0,
//     borderTopWidth: 0,
//     borderColor: "#ffcc00",
//     // borderWidth: 5,
//     // backgroundColor: '#fff',
//     // borderRadius: 15,
//     // borderTopRightRadius: 15,
//     // borderTopLeftRadius: 15,
//     // shadowColor: '#7F5DF0',
//     // shadowColor: '#7F5DF0',
//     // shadowOffset: {width: 0, height: 10},
//     // shadowOpacity: 0.25,
//     // shadowRadius: 3.5,
//     // elevation: 5,
//   },
//   shadow: {
//     // position: 'absolute',
//     shadowColor: "#7F5DF0",
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//     elevation: 5,
//   },
//   textColorSecondary: {
//     color: colors.secondary,
//   },
//   formControl: {
//     paddingTop: "3%",
//     paddingHorizontal: padding.sm,
//     width: "100%",
//   },
//   formControlTask: {
//     paddingTop: "3%",
//     paddingHorizontal: padding.sm,
//     width: "100%",
//   },
//   formControlInline: {
//     flexDirection: "row",
//   },
//   formItem: {
//     width: "48%",
//   },
//   formItemTask: {
//     width: "30%",
//   },
//   btn: {
//     marginBottom: padding.sm,
//     justifyContent: "center",
//     backgroundColor: colors.primary,
//     width: "100%",
//     borderRadius: 10,
//     elevation: 5,
//   },
//   icon: {
//     color: colors.label,
//     fontSize: 25,
//     marginBottom: 15,
//     paddingRight: "60%",
//   },
//   textColorWhite: {
//     color: "white",
//   },
//   error: {
//     borderColor: "#ff0000",
//   },
//   input: {
//     width: "90%",
//   },
//   heading: {
//     textAlign: "center",
//     justifyContent: "center",
//     fontSize: fonts.md,
//     fontWeight: "bold",
//     color: colors.secondary,
//     height: "10%",
//     flexDirection: "row",
//     width: "100%",
//     borderBottomColor: "#DBE9F6",
//     borderBottomWidth: 1,
//   },
//   lastItem: {
//     marginLeft: "4%",
//   },
// });

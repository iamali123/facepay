import * as React from "react";
import {
  View,
  Image,
  Pressable,
} from "react-native";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabActions} from "@react-navigation/native";
import { useFonts } from "expo-font";
import MerchantProfile from "../Screens/MerchantProfile/MerchantProfile";
import Login from "../Screens/Login/Login";
import LoginFailed from "../Screens/Login/LoginFailed";
import PasswordRecovery from "../Screens/PasswordRecovery/PasswordRecovery";
import PrivacyPolicy from "../Screens/PrivacyPolicy/PrivacyPolicy";
import ProductList from "../Screens/Products/ProductList";
import EditMerchantProfile from "../Screens/MerchantProfile/EditMerchantProfile";
import SignUp from "../Screens/SignUp/SignUp";
import TermsOfUse from "../Screens/TermsOfUse/TermsOfUse";
import PopUpAlert from "../Screens/Verification/PopUpAlert";
import AccountVerification from "../Screens/Verification/AccountVerification";
import Merchant from "../Screens/Splash/Merchant";
import Welcome from "../Screens/Welcome/Welcome";
import PointOfSale from "../Screens/PointOfSale/PointOfSale";
import Settings from "../Screens/Settings/Settings";
import PosSettings from "../Screens/PosSettings/PosSettings";
import Categories from "../Screens/PointOfSale/Categories";
import NewSale from "../Screens/PointOfSale/NewSale";
import AddToCart from "../Screens/PointOfSale/AddToCart";
import Charge from "../Screens/PointOfSale/Charge";
import Options from "../Screens/PointOfSale/Options";
import PrintReceipt from "../Screens/PointOfSale/PrintReceipt";
import SingleProduct from "../Screens/PointOfSale/SingleProduct";
import SplitPayment from "../Screens/PointOfSale/SplitPayment";
import Tips from "../Screens/PointOfSale/Tips";
import FaceDetection from "../Screens/FaceDetection/FaceDetection";
import BusinessProfile from "../Screens/BusinessProfile/BusinessProfile";
import MainCategories from "../Screens/Categories/MainCategories";
import Attributes from "../Screens/Attributes/Attributes";
import Locations from "../Screens/Location/Locations";
import Referrals from "../Screens/Referrals/Referrals";
import TeamMembers from "../Screens/Team/TeamMembers";
import BusinessRegistration from "../Screens/BusinessProfile/BusinessRegistration";
import Transactions from "../Screens/PointOfSale/Transactions";
import SSNVerification from "../Screens/Verification/SSNVerification";
import EmailVerification from "../Screens/Verification/EmailVerification";
import Orders from "../Screens/Orders/Orders";
import ManualCard from "../Screens/PointOfSale/ManualCard";
import ChargeCash from "../Screens/PointOfSale/ChargeCash";
import Cheque from "../Screens/PointOfSale/Cheque";
import CopyLink from "../Screens/PointOfSale/CopyLink";
import EmailLink from "../Screens/PointOfSale/EmailLink";
import TransactionSuccessfull from "../Screens/PointOfSale/TransactionSuccessfull";
import Dashboard from "../Screens/Dashboard/Dashboard";
import Discounts from "../Screens/PosSettingsChild/Discounts/Discounts";
import AddTips from "../Screens/PosSettingsChild/AddTips";
import Description from "../Screens/PosSettingsChild/Description/Description";
import EditTeamMember from "../Screens/Team/EditTeamMember";
import Promotions from "../Screens/PosSettingsChild/Promotions/Promotions";
import Taxes from "../Screens/PosSettingsChild/Taxes/Taxes";
import Title from "../Screens/PosSettingsChild/Title/Title";
import Unit from "../Screens/PosSettingsChild/Units/Unit";
import SearchProduct from "../Screens/PointOfSale/SearchProduct";
import PointOfSaleHorizontalCards from "../Screens/PointOfSale/PointOfSaleHorizontalCards";
import AddProduct from "../Screens/Products/AddProduct";
import EditProduct from "../Screens/Products/EditProduct";
import VariableProduct from "../Screens/Products/VariableProduct";
import AddTaxes from "../Screens/PosSettingsChild/Taxes/AddTaxes";
import EditTaxes from "../Screens/PosSettingsChild/Taxes/EditTaxes";
import EditDiscount from "../Screens/PosSettingsChild/Discounts/EditDiscount";
import AddDiscount from "../Screens/PosSettingsChild/Discounts/AddDiscount";
import AddDescription from "../Screens/PosSettingsChild/Description/AddDescription";
import EditDescription from "../Screens/PosSettingsChild/Description/EditDescription";
import AddTitle from "../Screens/PosSettingsChild/Title/AddTitle";
import EditTitle from "../Screens/PosSettingsChild/Title/EditTitle";
import AddUnits from "../Screens/PosSettingsChild/Units/AddUnits";
import EditUnits from "../Screens/PosSettingsChild/Units/EditUnits";
import SearchMainProducts from "../Screens/Products/SearchMainProducts";
import EditCategories from "../Screens/Categories/EditCategories";
import AddCategories from "../Screens/Categories/AddCategories";
import AddPromotions from "../Screens/PosSettingsChild/Promotions/AddPromotions";
import EditPromotions from "../Screens/PosSettingsChild/Promotions/EditPromotions";
import AddAttributes from "../Screens/Attributes/AddAttributes";
import EditAttributes from "../Screens/Attributes/EditAttributes";
import AddTeamMember from "../Screens/Team/AddTeamMember";
import AddLocations from "../Screens/Location/AddLocations";
import EditLocations from "../Screens/Location/EditLocations";
import TransactionsSearch from "../Screens/PointOfSale/TransactionsSearch";
import WrongFace from "../Screens/PointOfSale/WrongFace";
import SaleNumber from "../Screens/PointOfSale/SaleNumber";
import GlobalConstants from "../Components/GlobalConstants";
import baseStyle from "../UI/Style"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Bottm Tab Start

const CustomTabBarButtonTwo = ({ children, onPress }) => {
  return null;
};

const CustomTabBarButton = ({ children, onPress }) => (
  <Pressable
    activeOpacity={0.5}
    style={baseStyle.posBtn}
    onPress={onPress}
  >
    <View
      style={baseStyle.BTposBtn}
    >
      {children}
    </View>
  </Pressable>
);
export const BottomTabNavigation = ({ navigation, route }) => {
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
                source={require("../../assets/images/transactions-icon.png")}
                resizeMode="contain"
                style={baseStyle.tabIcon}
              />
            </View>
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
                source={require("../../assets/images/dashboard-icon.png")}
                resizeMode="contain"
                style={baseStyle.tabIcon}
              />
            </View>
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
                  ? require("../../assets/images/point-of-sale-update.png")
                  : require("../../assets/images/tab-pos-icon.png")
              }
              resizeMode="contain"
              style={[baseStyle.tabIcon, baseStyle.posIcon]}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              onPress={() => {
                navigation.dispatch(TabActions.jumpTo(GlobalConstants.route));
              }}
            />
          ),
        }}
        name="PointOfSaleTab"
        component={PointOfSaleStack}
      />
      <Tab.Screen
        options={{
          tabBarBadge: 12,
          tabBarBadgeStyle: {
            backgroundColor: "black",
            borderWidth: 2,
            borderColor: "white",
            height: 25,
            width: 25,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            textAlignVertical: "center",
            textAlign: "center",
          },
          title: "Orders",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/images/orders-icon.png")}
                resizeMode="contain"
                style={baseStyle.tabIcon}
              />
            </View>
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
                source={require("../../assets/images/settings-icon.png")}
                resizeMode="contain"
                style={baseStyle.tabIcon}
              />
            </View>
          ),
        }}
        name="SettingsTab"
        component={SettingsStack}
      />
      <Tab.Screen
        options={{
          title: "SaleNumber",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/point-of-sale-update.png")}
              resizeMode="contain"
              style={[baseStyle.tabIcon, baseStyle.posIcon]}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButtonTwo {...props} />,
        }}
        name="SaleNumber"
        component={SaleNumber}
      />
      <Tab.Screen
        options={{
          title: "NewSale",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/point-of-sale-update.png")}
              resizeMode="contain"
              style={[baseStyle.tabIcon, baseStyle.posIcon]}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButtonTwo {...props} />,
        }}
        name="NewSale"
        component={NewSale}
      />
      <Tab.Screen
        options={{
          title: "ChargeStack",

          tabBarButton: (props) => <CustomTabBarButtonTwo {...props} />,
        }}
        name="ChargeStack"
        component={ChargeStack}
      />
      <Tab.Screen
        options={{
          title: "SearchProduct",
          tabBarButton: (props) => <CustomTabBarButtonTwo {...props} />,
        }}
        name="SearchProduct"
        component={SearchProduct}
      />
      <Tab.Screen
        options={{
          title: "AddToCart",
          tabBarButton: (props) => <CustomTabBarButtonTwo {...props} />,
        }}
        name="AddToCart"
        component={AddToCart}
      />
      <Tab.Screen
        options={{
          title: "SingleProduct",
          tabBarButton: (props) => <CustomTabBarButtonTwo {...props} />,
        }}
        name="SingleProduct"
        component={SingleProduct}
      />
      <Tab.Screen
        options={{
          title: "Categories",
          tabBarButton: (props) => <CustomTabBarButtonTwo {...props} />,
        }}
        name="Categories"
        component={Categories}
      />
    </Tab.Navigator>
  );
};
//Bottom Tab End

export const MainStack = () => {
  const [loaded] = useFonts({
    PoppinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsLight: require("../../assets/fonts/Poppins-Light.ttf"),
    PoppinsMedium: require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const navTheme = DefaultTheme;
  navTheme.colors.background = "#F1F2F8";

  return (
    <Stack.Navigator initialRouteName="Merchant" backBehavior="initialRoute">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,

        }}
        name="Merchant"
        component={Merchant}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="LoginFailed"
        component={LoginFailed}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="FaceDetection"
        component={FaceDetection}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="PasswordRecovery"
        component={PasswordRecovery}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="PrivacyPolicy"
        component={PrivacyPolicy}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="TermsOfUse"
        component={TermsOfUse}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="PopUpAlert"
        component={PopUpAlert}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="SSNVerification"
        component={SSNVerification}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EmailVerification"
        component={EmailVerification}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,

        }}
        name="EditMerchantProfile"
        component={EditMerchantProfile}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,

        }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AccountVerification"
        component={AccountVerification}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="BusinessRegistration"
        component={BusinessRegistration}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="PointOfSale"
        component={BottomTabNavigation}
      />
    </Stack.Navigator>
  );
};

export const DashboardStack = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="TransactionsStack"
        component={TransactionsStack}
      />
    </Stack.Navigator>
  );
};
export const TransactionsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Transactions">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Transactions"
        component={Transactions}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="TransactionsSearch"
        component={TransactionsSearch}
      />
    </Stack.Navigator>
  );
};
export const PointOfSaleStack = () => {
  return (
    <Stack.Navigator initialRouteName="PointOfSale">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="PointOfSale"
        component={PointOfSale}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="PointOfSaleHorizontalCards"
        component={PointOfSaleHorizontalCards}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="SearchMainProducts"
        component={SearchMainProducts}
      />
    </Stack.Navigator>
  );
};
export const OrdersStack = () => {
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Orders"
        component={Orders}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="ChargeStack"
        component={ChargeStack}
      />
    </Stack.Navigator>
  );
};
export const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Settings"
        component={Settings}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="PosSettings"
        component={PosSettings}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="MerchantProfile"
        component={MerchantProfile}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EditMerchantProfile"
        component={EditMerchantProfile}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Attributes"
        component={Attributes}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Referrals"
        component={Referrals}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="TeamMembers"
        component={TeamMembers}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="BusinessProfile"
        component={BusinessProfile}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="BusinessRegistration"
        component={BusinessRegistration}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Locations"
        component={Locations}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="ProductList"
        component={ProductList}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddProduct"
        component={AddProduct}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EditProduct"
        component={EditProduct}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="VariableProduct"
        component={VariableProduct}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="MainCategories"
        component={MainCategories}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Categories"
        component={Categories}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Transactions"
        component={Transactions}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Discounts"
        component={Discounts}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddTips"
        component={AddTips}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Description"
        component={Description}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddPromotions"
        component={AddPromotions}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EditPromotions"
        component={EditPromotions}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EditTeamMember"
        component={EditTeamMember}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Promotions"
        component={Promotions}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Taxes"
        component={Taxes}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Title"
        component={Title}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Unit"
        component={Unit}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddTaxes"
        component={AddTaxes}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EditTaxes"
        component={EditTaxes}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EditDiscount"
        component={EditDiscount}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddDiscount"
        component={AddDiscount}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddDescription"
        component={AddDescription}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EditDescription"
        component={EditDescription}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddTitle"
        component={AddTitle}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EditTitle"
        component={EditTitle}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddUnits"
        component={AddUnits}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EditUnits"
        component={EditUnits}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="SearchMainProducts"
        component={SearchMainProducts}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EditCategories"
        component={EditCategories}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddCategories"
        component={AddCategories}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddAttributes"
        component={AddAttributes}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EditAttributes"
        component={EditAttributes}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddTeamMember"
        component={AddTeamMember}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddLocations"
        component={AddLocations}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EditLocations"
        component={EditLocations}
      />
    </Stack.Navigator>
  );
};

//General Satck

export const ChargeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Charge">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Charge"
        component={Charge}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Tips"
        component={Tips}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="WrongFace"
        component={WrongFace}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="ManualCard"
        component={ManualCard}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="ChargeCash"
        component={ChargeCash}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Cheque"
        component={Cheque}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="CopyLink"
        component={CopyLink}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EmailLink"
        component={EmailLink}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="SplitPayment"
        component={SplitPayment}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="TransactionSuccessfull"
        component={TransactionSuccessfull}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="PrintReceipt"
        component={PrintReceipt}
      />
    </Stack.Navigator>
  );
};

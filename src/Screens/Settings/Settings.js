import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import baseStyle from "../../UI/Style";
import GlobalConstants from "../../Components/GlobalConstants";
import Header from "../../Components/Header/Header";
import styles from "./Settings.style"
class Settings extends React.Component {
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
          Title={"Settings"}
        />

        <ScrollView overScrollMode="never">
          <View style={styles.settingsContainer}>
            <Pressable
              style={styles.itemsBlock}
              onPress={() => this.props.navigation.navigate("MerchantProfile")}
            >
              <Image
                style={styles.pageImg}
                source={require("../../../assets/images/profile.png")}
              />
              <Text style={[baseStyle.h6, styles.alignText]}>Profile</Text>
            </Pressable>
            <Pressable
              style={styles.itemsBlock}
              onPress={() => this.props.navigation.navigate("BusinessProfile")}
            >
              <Image
                style={styles.pageImg}
                source={require("../../../assets/images/business-profile.png")}
              />
              <Text style={[baseStyle.h6, styles.alignText]}>
                Business Profile
              </Text>
            </Pressable>
            <Pressable
              style={[styles.itemsBlock, styles.noRightBorder]}
              onPress={() => this.props.navigation.navigate("PosSettings")}
            >
              <Image
                style={styles.pageImg}
                source={require("../../../assets/images/pos-settings.png")}
              />
              <Text style={[baseStyle.h6, styles.alignText]}>POS Settings</Text>
            </Pressable>
            <Pressable
              style={styles.itemsBlock}
              onPress={() => this.props.navigation.navigate("ProductList")}
            >
              <Image
                style={styles.pageImg}
                source={require("../../../assets/images/products.png")}
              />
              <Text style={[baseStyle.h6, styles.alignText]}>Products</Text>
            </Pressable>
            <Pressable
              style={styles.itemsBlock}
              onPress={() => this.props.navigation.navigate("MainCategories")}
            >
              <Image
                style={styles.pageImg}
                source={require("../../../assets/images/categories.png")}
              />
              <Text style={[baseStyle.h6, styles.alignText]}>Categories</Text>
            </Pressable>
            <Pressable
              style={[styles.itemsBlock, styles.noRightBorder]}
              onPress={() => this.props.navigation.navigate("Attributes")}
            >
              <Image
                style={styles.pageImg}
                source={require("../../../assets/images/attributes.png")}
              />
              <Text style={[baseStyle.h6, styles.alignText]}>Attributes</Text>
            </Pressable>
            <Pressable
              style={styles.itemsBlock}
              onPress={() => this.props.navigation.navigate("Referrals")}
            >
              <Image
                style={styles.pageImg}
                source={require("../../../assets/images/referrals.png")}
              />
              <Text style={[baseStyle.h6, styles.alignText]}>Referrals</Text>
            </Pressable>
            <Pressable
              style={styles.itemsBlock}
              onPress={() => this.props.navigation.navigate("TeamMembers")}
            >
              <Image
                style={styles.pageImg}
                source={require("../../../assets/images/team.png")}
              />
              <Text style={baseStyle.h6}>Team</Text>
            </Pressable>

            <Pressable
              style={[styles.itemsBlock, styles.noRightBorder]}
              onPress={() => this.props.navigation.navigate("Locations")}
            >
              <Image
                style={styles.pageImg}
                source={require("../../../assets/images/locations.png")}
              />
              <Text style={[baseStyle.h6, styles.alignText]}>Locations</Text>
            </Pressable>
            <Pressable
              style={[styles.itemsBlock, styles.noBottomBorder]}
              onPress={() => this.props.navigation.navigate("Transactions")}
            >
              <Image
                style={styles.pageImg}
                source={require("../../../assets/images/transactions.png")}
              />
              <Text style={[baseStyle.h6, styles.alignText]}>Transactions</Text>
            </Pressable>
            <View style={[styles.itemsBlock, styles.noBottomBorder]}></View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Settings;

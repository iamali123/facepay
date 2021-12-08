import * as React from "react";
import { View, Image, Pressable, Text, ScrollView, Switch } from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";

import MainButton from "../../Components/Button/MainButton";
import styles from "./PosSettings.style";

class PosSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alwaysOpen: false, basicPayment: false };
  }

  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"POS Settings"}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <View style={styles.switchBlock}>
              <View style={styles.switchInner}>
                <Text style={baseStyle.h4}>Always Open</Text>
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  value={this.state.alwaysOpen}
                  onValueChange={(value) => {
                    this.setState({ alwaysOpen: value, basicPayment: false });
                  }}
                ></Switch>
              </View>
              <View style={styles.switchInner}>
                <Text style={baseStyle.h4}>Enable Basic Payments</Text>
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  value={this.state.basicPayment}
                  onValueChange={(value) => {
                    this.setState({ basicPayment: value, alwaysOpen: false });
                  }}
                ></Switch>
              </View>
            </View>
            <View style={styles.posList}>
              <Pressable
                style={styles.posItem}
                onPress={() => this.props.navigation.navigate("Taxes")}
              >
                <Image
                  style={styles.posImg}
                  source={require("../../../assets/images/taxes.png")}
                />
                <Text style={baseStyle.h4}>Taxes</Text>
              </Pressable>
              <Pressable
                style={styles.posItem}
                onPress={() => this.props.navigation.navigate("AddTips")}
              >
                <Image
                  style={styles.posImg}
                  source={require("../../../assets/images/tips.png")}
                />
                <Text style={baseStyle.h4}>Tips</Text>
              </Pressable>
              <Pressable
                onPress={() => this.props.navigation.navigate("Discounts")}
                style={styles.posItem}
              >
                <Image
                  style={styles.posImg}
                  source={require("../../../assets/images/discounts.png")}
                />
                <Text style={baseStyle.h4}>Discounts</Text>
              </Pressable>

              <Pressable
                onPress={() => this.props.navigation.navigate("Description")}
                style={styles.posItem}
              >
                <Image
                  style={styles.posImg}
                  source={require("../../../assets/images/description.png")}
                />
                <Text style={baseStyle.h4}>Descriptions</Text>
              </Pressable>
              <Pressable
                onPress={() => this.props.navigation.navigate("Title")}
                style={styles.posItem}
              >
                <Image
                  style={styles.posImg}
                  source={require("../../../assets/images/title.png")}
                />
                <Text style={baseStyle.h4}>Titles</Text>
              </Pressable>
              <Pressable
                onPress={() => this.props.navigation.navigate("Unit")}
                style={styles.posItem}
              >
                <Image
                  style={styles.posImg}
                  source={require("../../../assets/images/units.png")}
                />
                <Text style={baseStyle.h4}>Units</Text>
              </Pressable>

              <Pressable
                style={styles.posItem}
                onPress={() => this.props.navigation.navigate("Promotions")}
              >
                <Image
                  style={styles.posImg}
                  source={require("../../../assets/images/promotions.png")}
                />
                <Text style={baseStyle.h4}>Promotions</Text>
              </Pressable>
              <Pressable
                style={styles.posItem}
                // onPress={() => this.props.navigation.navigate("Test")}
              >
                <Image
                  style={styles.posImg}
                  source={require("../../../assets/images/background.png")}
                />
                <Text style={baseStyle.h4}>Background</Text>
              </Pressable>
              <MainButton
                onPress={() => this.props.navigation.goBack()}
                btnText={"Save"}
              />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default PosSettings;

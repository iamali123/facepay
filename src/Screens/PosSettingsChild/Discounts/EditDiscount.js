import * as React from "react";
import {
  View,
  Pressable,
  Text,
  ScrollView,
  Switch,
  TextInput,
} from "react-native";
import baseStyle from "../../../UI/Style";
import Header from "../../../Components/Header/Header";
import MainButton from "../../../Components/Button/MainButton";

import styles from "./Discounts.style";

class EditDiscount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      tax: false,
      applyDiscount: false,
      discount: "",
      taxRatio: "",
    };
  }

  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          Title={"Edit Discount"}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <View
              style={[
                baseStyle.row,
                { width: "100%", alignItems: "center", marginBottom: 25 },
              ]}
            >
              {!this.state.active && <Text style={baseStyle.h4}>Activate</Text>}
              {this.state.active && (
                <Text style={baseStyle.h4}>Deactivate</Text>
              )}
              <Switch
                style={{
                  transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                  height: 12,
                }}
                trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                thumbColor={"#292929"}
                ios_backgroundColor="#292929"
                value={this.state.active}
                onValueChange={(value) => {
                  this.setState({ active: value });
                }}
              ></Switch>
            </View>
            <Text style={[baseStyle.h2, { marginBottom: 8 }]}>
              Add New Discount
            </Text>
            <TextInput
              style={baseStyle.input}
              placeholder="Discount"
              placeholderTextColor="#292929"
              keyboardType="phone-pad"
              value={this.state.discount}
              onChangeText={(value) => this.setState({ discount: value })}
            />
            <View style={styles.mb}>
              <View style={[baseStyle.row]}>
                <View
                  style={[
                    baseStyle.row,
                    {
                      width: "70%",
                      paddingRight: 15,
                      justifyContent: "flex-start",
                      alignItems: "center",
                    },
                  ]}
                >
                  <Text style={[baseStyle.h4, { marginRight: 15 }]}>
                    Tax ratio
                  </Text>
                  <TextInput
                    style={[
                      baseStyle.input,
                      { maxWidth: 100, paddingLeft: 15, paddingRight: 15 },
                    ]}
                    placeholder="18%"
                    placeholderTextColor="#292929"
                    keyboardType="phone-pad"
                    value={this.state.tax}
                    onChangeText={(value) => this.setState({ tax: value })}
                  />
                </View>
                <View
                  style={{
                    width: "30%",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <Switch
                    style={{
                      transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                      height: 12,
                    }}
                    trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                    thumbColor={"#292929"}
                    ios_backgroundColor="#292929"
                    value={this.state.tax}
                    onValueChange={(value) => {
                      this.setState({ tax: value });
                    }}
                  ></Switch>
                </View>
              </View>
              <Text style={baseStyle.text}>
                Leave the tax at 0 to apply custom tax at 0 to apply custom
              </Text>
            </View>
            <View style={styles.mb}>
              <View style={[baseStyle.row, { marginBottom: 8 }]}>
                <View
                  style={[
                    baseStyle.row,
                    {
                      width: "70%",
                      paddingRight: 15,
                      justifyContent: "flex-start",
                      alignItems: "center",
                    },
                  ]}
                >
                  <Text style={[baseStyle.h4, { marginRight: 15 }]}>
                    Apply discount after tax
                  </Text>
                </View>
                <View
                  style={{
                    width: "30%",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <Switch
                    style={{
                      transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                      height: 12,
                    }}
                    trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                    thumbColor={"#292929"}
                    ios_backgroundColor="#292929"
                    value={this.state.applyDiscount}
                    onValueChange={(value) => {
                      this.setState({ applyDiscount: value });
                    }}
                  ></Switch>
                </View>
              </View>
              <Text style={baseStyle.text}>
                Leave the tax at 0 to apply custom tax at 0 to apply custom
              </Text>
            </View>
            <MainButton
              onPress={() => this.props.navigation.goBack()}
              btnText={"Save"}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default EditDiscount;

import * as React from "react";

import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  Dimensions,
  ScrollView,
  Switch,
  TextInput,
} from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import MainButton from "../../Components/Button/MainButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class AddTips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectTips: false,
      optimize: false,
      tipBeforeTax: false,
      tipAfterTax: false,
      customAmmount: false,
      tip1: "",
      tip2: "",
      tip3: "",
    };
  }
  render() {
    return (
      <>
        <Header
          Title={"Tips"}
          onPressLeft={() => this.props.navigation.goBack()}
        />

        <View style={styles.formContainer}>
          <View style={styles.switchInner}>
            <View style={{ flex: 0.9 }}>
              <Text style={baseStyle.h4}>Collect Tips</Text>
            </View>
            <Switch
              style={{
                transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                height: 12,
              }}
              trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
              thumbColor={"#292929"}
              ios_backgroundColor="#292929"
              value={this.state.collectTips}
              onValueChange={(value) => {
                this.setState({ collectTips: value });
              }}
            ></Switch>
          </View>
          <Text style={baseStyle.h4}>
            Allow customers to add gratutiy when processing the payment.
          </Text>
          {this.state.collectTips && (
            <ScrollView overScrollMode="never">
              <View style={[baseStyle.row, { flexWrap: "wrap" }]}>
                <View
                  style={[
                    baseStyle.row,
                    { alignItems: "center", width: "47%", marginBottom: 10 },
                  ]}
                >
                  <Text style={[baseStyle.h4, { marginRight: 8 }]}>Tip 1</Text>
                  <TextInput
                    style={[
                      baseStyle.input,
                      { maxWidth: 100, paddingLeft: 15, paddingRight: 15 },
                    ]}
                    placeholder="18%"
                    placeholderTextColor="#292929"
                    keyboardType="phone-pad"
                    value={this.state.tip1}
                    onChangeText={(value) => this.setState({ tip1: value })}
                  />
                </View>
                <View
                  style={[
                    baseStyle.row,
                    { alignItems: "center", width: "47%", marginBottom: 10 },
                  ]}
                >
                  <Text style={[baseStyle.h4, { marginRight: 8 }]}>Tip 2</Text>
                  <TextInput
                    style={[
                      baseStyle.input,
                      { maxWidth: 100, paddingLeft: 15, paddingRight: 15 },
                    ]}
                    placeholder="20%"
                    placeholderTextColor="#292929"
                    keyboardType="phone-pad"
                    value={this.state.tip2}
                    onChangeText={(value) => this.setState({ tip2: value })}
                  />
                </View>
                <View
                  style={[
                    baseStyle.row,
                    { alignItems: "center", width: "47%", marginBottom: 10 },
                  ]}
                >
                  <Text style={[baseStyle.h4, { marginRight: 8 }]}>Tip 3</Text>
                  <TextInput
                    style={[
                      baseStyle.input,
                      { maxWidth: 100, paddingLeft: 15, paddingRight: 15 },
                    ]}
                    placeholder="50%"
                    placeholderTextColor="#292929"
                    keyboardType="phone-pad"
                    value={this.state.tip3}
                    onChangeText={(value) => this.setState({ tip3: value })}
                  />
                </View>
              </View>
              <View style={styles.switchInner}>
                <View style={{ flex: 0.9 }}>
                  <Text style={baseStyle.h4}>Optimize Tips</Text>
                </View>
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  value={this.state.optimize}
                  onValueChange={(value) => {
                    this.setState({ optimize: value });
                  }}
                ></Switch>
              </View>
              <Text style={[baseStyle.h4, { paddingBottom: 10 }]}>
                Tip for order of $5 can be fixed $1.
              </Text>
              <View style={styles.switchInner}>
                <View style={{ flex: 0.9 }}>
                  <Text style={baseStyle.h4}>Calculate tips after taxes.</Text>
                </View>
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  value={this.state.tipAfterTax}
                  onValueChange={(value) => {
                    this.setState({
                      tipAfterTax: value,
                      tipBeforeTax: false,
                    });
                  }}
                ></Switch>
              </View>
              <View style={styles.switchInner}>
                <View style={{ flex: 0.9 }}>
                  <Text style={baseStyle.h4}>Calculate tips before taxes.</Text>
                </View>
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  value={this.state.tipBeforeTax}
                  onValueChange={(value) => {
                    this.setState({
                      tipBeforeTax: value,
                      tipAfterTax: false,
                    });
                  }}
                ></Switch>
              </View>
              <View style={styles.switchInner}>
                <View style={{ flex: 0.9 }}>
                  <Text style={baseStyle.h4}>Allow custom amounts.</Text>
                </View>
                <Switch
                  style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    height: 12,
                  }}
                  trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                  value={this.state.customAmmount}
                  onValueChange={(value) => {
                    this.setState({ customAmmount: value });
                  }}
                ></Switch>
              </View>
              <MainButton
                onPress={() => this.props.navigation.goBack()}
                btnText={"Save"}
              />
            </ScrollView>
          )}
        </View>
      </>
    );
  }
}

export default AddTips;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 50,
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  switchInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
    width: "100%",
  },
});

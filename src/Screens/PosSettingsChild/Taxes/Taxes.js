import * as React from "react";
import {
  View,
  Pressable,
  Text,
  ScrollView,
  Switch,
} from "react-native";
import baseStyle from "../../../UI/Style";
import Header from "../../../Components/Header/Header";
import styles from "./Taxes.style"
class Taxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active1: false, active: false };
  }
  render() {
    return (
      <>
      {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Taxes"}
          textButton={false}
          RightIcon={require("../../../../assets/images/plus-bluebg.png")}
          onPressRightButton={() => this.props.navigation.navigate("AddTaxes")}
        />
        <ScrollView overScrollMode="never">
          <View style={styles.posContainer}>
            <View style={styles.switchBlock}>
              <View style={styles.switchRow}>
                <View style={styles.switchInner}>
                  <View style={styles.leftCol}>
                    <Text style={[baseStyle.h4, { paddingBottom: 5 }]}>
                      7.5% Miami Tax
                    </Text>
                    <View
                      style={[
                        baseStyle.row,
                        { justifyContent: "flex-start", alignItems: "center" },
                      ]}
                    >
                      {this.state.active1 && (
                        <Text style={baseStyle.h4}>Deactivate</Text>
                      )}
                      {!this.state.active1 && (
                        <Text style={baseStyle.h4}>Activate</Text>
                      )}

                      <Switch
                        style={{
                          marginLeft: "10%",
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          height: 12,
                        }}
                        trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                        thumbColor={"#292929"}
                        ios_backgroundColor="#292929"
                        value={this.state.active1}
                        onValueChange={(value) => {
                          this.setState({ active1: value });
                        }}
                      ></Switch>
                    </View>
                  </View>
                  <View style={styles.rightCol}>
                    <Pressable
                      style={[baseStyle.editDelButton]}
                      onPress={() =>
                        this.props.navigation.navigate("EditTaxes")
                      }
                    >
                      <Text style={baseStyle.blueBtnText}>Edit</Text>
                    </Pressable>
                    <Pressable style={[baseStyle.editDelButton]}>
                      <Text style={baseStyle.blueBtnText}>Delete</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.switchBlock}>
              <View style={styles.switchRow}>
                <View style={styles.switchInner}>
                  <View style={styles.leftCol}>
                    <Text style={[baseStyle.h4, { paddingBottom: 5 }]}>
                      7.5% Miami Tax
                    </Text>
                    <View
                      style={[
                        baseStyle.row,
                        { justifyContent: "flex-start", alignItems: "center" },
                      ]}
                    >
                      {this.state.active && (
                        <Text style={baseStyle.h4}>Deactivate</Text>
                      )}
                      {!this.state.active && (
                        <Text style={baseStyle.h4}>Activate</Text>
                      )}

                      <Switch
                        style={{
                          marginLeft: "10%",
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
                  </View>
                  <View style={styles.rightCol}>
                    <Pressable
                      style={[baseStyle.editDelButton]}
                      onPress={() =>
                        this.props.navigation.navigate("EditTaxes")
                      }
                    >
                      <Text style={baseStyle.blueBtnText}>Edit</Text>
                    </Pressable>
                    <Pressable style={[baseStyle.editDelButton]}>
                      <Text style={baseStyle.blueBtnText}>Delete</Text>
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

export default Taxes;
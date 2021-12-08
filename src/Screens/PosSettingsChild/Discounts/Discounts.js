import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  Switch,
  Dimensions,
} from "react-native";
import baseStyle from "../../../UI/Style";
import Header from "../../../Components/Header/Header";
import styles from "./Discounts.style"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class Discounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, active1: false };
  }
  render() {
    return (
      <>
       {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Discounts"}
          textButton={false}
          RightIcon={require("../../../../assets/images/plus-bluebg.png")}
          onPressRightButton={() =>
            this.props.navigation.navigate("AddDiscount")
          }
        />

        <ScrollView overScrollMode="never">
          <View style={{marginTop: "5%"}}>
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
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          marginLeft: "5%",
                          height: 12,
                        }}
                        trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                        thumbColor={"#292929"}
                        ios_backgroundColor="#292929"
                        onValueChange={(value) =>
                          this.setState({ active: value })
                        }
                        value={this.state.active}
                      ></Switch>
                    </View>
                  </View>
                  <View style={styles.rightCol}>
                    <Pressable
                      style={[baseStyle.editDelButton]}
                      onPress={() =>
                        this.props.navigation.navigate("EditDiscount")
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
                      {this.state.active1 && (
                        <Text style={baseStyle.h4}>Deactivate</Text>
                      )}
                      {!this.state.active1 && (
                        <Text style={baseStyle.h4}>Activate</Text>
                      )}
                      <Switch
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          marginLeft: "5%",
                          height: 12,
                        }}
                        trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                        thumbColor={"#292929"}
                        ios_backgroundColor="#292929"
                        onValueChange={(value) =>
                          this.setState({ active1: value })
                        }
                        value={this.state.active1}
                      ></Switch>
                    </View>
                  </View>
                  <View style={styles.rightCol}>
                    <Pressable
                      style={[baseStyle.editDelButton]}
                      onPress={() =>
                        this.props.navigation.navigate("EditDiscount")
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
            {/* <View style={styles.switchBlock}>
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
                      <Text style={baseStyle.h4}>Activate</Text>
                      <Switch
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                        }}
                       trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                        thumbColor={"#292929"}
                        ios_backgroundColor="#292929"
                        onValueChange={(value) =>
                          this.setState({ active: value })
                        }
                        value={this.state.active}
                      ></Switch>
                    </View>
                  </View>
                  <View style={styles.rightCol}>
                    <Pressable
                 style={[baseStyle.editDelButton]}
                      onPress={() =>
                        this.props.navigation.navigate("EditLocations")
                      }
                    >
                      <Text style={baseStyle.blueBtnText}>Edit</Text>
                    </Pressable>
                    <Pressable
                 style={[baseStyle.editDelButton]}
                    >
                      <Text style={baseStyle.blueBtnText}>Delete</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View> */}
            <Image
              style={styles.loginVector}
              source={require("../../../../assets/images/discounts-banner.png")}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Discounts;


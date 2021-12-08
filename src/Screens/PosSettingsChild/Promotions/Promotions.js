import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  Switch,
  TextInput,
} from "react-native";
import baseStyle from "../../../UI/Style";
import Header from "../../../Components/Header/Header";
import styles from "./Prormotions.style"

class Promotions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      filterList: [
        { Title: "City Tour", activeFilter: true, Id: 0 },
        { Title: "Weekend Special", activeFilter: false, Id: 1 },
        { Title: "Dining For Two", activeFilter: false, Id: 2 },
      ],
      promotionsList: [
        { active: false, Id: 0 },
        { active: true, Id: 1 },
        { active: false, Id: 2 },
      ],
      searchInput: "",
    };
  }
  toggle(value, index) {
    let promotionsList = [...this.state.promotionsList];
    promotionsList[index] = {
      ...promotionsList[index],
      active: value,
    };
    this.setState({ promotionsList }, () =>
      console.log(this.state.promotionsList[index].active, index)
    );
  }
  render() {
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Promotions"}
          textButton={false}
          RightIcon={require("../../../../assets/images/plus-bluebg.png")}
          onPressRightButton={() =>
            this.props.navigation.navigate("AddPromotions")
          }
        />

        <ScrollView overScrollMode="never">
          <View style={styles.posContainer}>
            <View
              style={{
                marginLeft: "5%",
                marginRight: "5%",
                marginBottom: "3%",
                alignItems: "center",
              }}
            >
              <View
                style={[
                  baseStyle.input,
                  {
                    flexDirection: "row",
                    position: "relative",
                  },
                ]}
              >
                <TextInput
                  style={{ width: "100%", paddingRight: 30 }}
                  placeholder="Search"
                  placeholderTextColor="#292929"
                  keyboardType="default"
                  value={this.state.searchInput}
                  onChangeText={(value) => {
                    this.setState({ searchInput: value });
                  }}
                />
                <Pressable
                  style={styles.faceButton}
                  onPress={() => {
                    this.setState({ searchInput: "" });
                    // this.props.navigation.goBack();
                  }}
                >
                  <Image
                    style={styles.faceIcon}
                    source={require("../../../../assets/images/search-icon.png")}
                  ></Image>
                </Pressable>
              </View>
            </View>
            <Text style={[baseStyle.h4, styles.innerStyle]}>Filters</Text>
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
                                    styles.activeTextColor,
                                  ]
                                : [baseStyle.blueBtnText, styles.textColor]
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
            {this.state.promotionsList.map((data, index) => {
              return (
                <View style={styles.switchBlock} key={index}>
                  <Image
                    style={styles.memberImg}
                    source={require("../../../../assets/images/team-member.png")}
                  />
                  <View>
                    <View style={styles.leftCol}>
                      <Text style={[baseStyle.h4, { paddingRight: 15 }]}>
                        City Tour
                      </Text>
                      <Switch
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          height: 12,
                        }}
                        trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                        thumbColor={"#292929"}
                        ios_backgroundColor="#292929"
                        value={data.active}
                        onValueChange={(value) => this.toggle(value, index)}
                      ></Switch>
                    </View>

                    <View style={styles.rightCol}>
                      <View style={{ flexDirection: "row", marginRight: 15 }}>
                        <Text style={[baseStyle.h2, styles.price]}>
                          $15.00/
                        </Text>
                        <Text style={baseStyle.h3}>person</Text>
                      </View>
                      <View style={{ paddingTop: 2 }}>
                        <Text style={baseStyle.h4}>01/01/21 - 01/05/21</Text>
                      </View>
                    </View>
                    <View style={styles.btnCol}>
                      <Pressable
                        style={[baseStyle.editDelButton]}
                        onPress={() =>
                          this.props.navigation.navigate("EditPromotions")
                        }
                      >
                        <Text style={baseStyle.blueBtnText}>Edit</Text>
                      </Pressable>
                      <Pressable
                        style={[baseStyle.editDelButton, { marginLeft: 15 }]}
                      >
                        <Text style={baseStyle.blueBtnText}>Delete</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Promotions;


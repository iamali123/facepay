import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import baseStyle from "../../../UI/Style";
import Header from "../../../Components/Header/Header";
import styles from "./Description.style"

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterList: [
        { Title: "Description 1", activeFilter: true, Id: 0 },
        { Title: "Description 2", activeFilter: false, Id: 1 },
        { Title: "Description 3", activeFilter: false, Id: 2 },
      ],
      searchInput: "",
    };
  }
  render() {
    return (
      <>
      {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Descriptions"}
          textButton={false}
          RightIcon={require("../../../../assets/images/plus-bluebg.png")}
          onPressRightButton={() =>
            this.props.navigation.navigate("AddDescription")
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
                  onChangeText={(value) =>
                    this.setState({ searchInput: value })
                  }
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
              <View style={baseStyle.themeContainer}>
                <View style={styles.switchInner}>
                  <View style={styles.leftCol}>
                    <Text style={baseStyle.h4}>
                      Pepper Machinto & Toppings Toppings Toppings
                    </Text>
                  </View>
                  <View style={styles.rightCol}>
                    <Pressable
                      style={[baseStyle.editDelButton]}
                      onPress={() =>
                        this.props.navigation.navigate("EditDescription")
                      }
                    >
                      <Text style={baseStyle.blueBtnText}>Edit</Text>
                    </Pressable>
                    <Pressable style={[baseStyle.editDelButton]}>
                      <Text style={baseStyle.blueBtnText}>Delete</Text>
                    </Pressable>
                  </View>
                </View>
                <View style={styles.switchInner}>
                  <View style={styles.leftCol}>
                    <Text style={baseStyle.h4}>
                      Pepper Machinto & Toppings Toppings Toppings
                    </Text>
                  </View>
                  <View style={styles.rightCol}>
                    <Pressable
                      style={[baseStyle.editDelButton]}
                      onPress={() =>
                        this.props.navigation.navigate("EditDescription")
                      }
                    >
                      <Text style={baseStyle.blueBtnText}>Edit</Text>
                    </Pressable>
                    <Pressable style={[baseStyle.editDelButton]}>
                      <Text style={baseStyle.blueBtnText}>Delete</Text>
                    </Pressable>
                  </View>
                </View>
                <View style={styles.switchInner}>
                  <View style={styles.leftCol}>
                    <Text style={baseStyle.h4}>Pepper Machinto & Toppings</Text>
                  </View>
                  <View style={styles.rightCol}>
                    <Pressable
                      style={[baseStyle.editDelButton]}
                      onPress={() =>
                        this.props.navigation.navigate("EditDescription")
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
        </ScrollView>
      </>
    );
  }
}

export default Description;

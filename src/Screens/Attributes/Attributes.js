import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import styles from './Attributes.style'

class Attributes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      active: false,
      filterList: [
        { Title: "Size", activeFilter: true, Id: 0 },
        { Title: "Color", activeFilter: false, Id: 1 },
        { Title: "Orange", activeFilter: false, Id: 2 },
      ],
    };
  }
  render() {
    return (
      <>
          {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Attributes"}
          textButton={false}
          RightIcon={require("../../../assets/images/plus-bluebg.png")}
          onPressRightButton={() =>
            this.props.navigation.navigate("AddAttributes")
          }
        />
        <ScrollView overScrollMode="never">
          <View style={styles.searchBar}>
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
                onChangeText={(value) => this.setState({ searchInput: value })}
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
                  source={require("../../../assets/images/search-icon.png")}
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
                              ? [baseStyle.blueBtnText, styles.activeTextColor]
                              : [baseStyle.blueBtnText, styles.btnTextColor]
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
            <View style={[baseStyle.row, styles.mb]}>
              <View style={styles.leftCol}>
                <Text style={[baseStyle.h4, styles.textColor]}>Size</Text>
                <Text style={baseStyle.h4}>S, M, L, Xl, XXL, XXXL</Text>
              </View>
              <View style={styles.rightCol}>
                <Pressable
                  style={[baseStyle.editDelButton]}
                  onPress={() =>
                    this.props.navigation.navigate("EditAttributes")
                  }
                >
                  <Text style={baseStyle.blueBtnText}>Edit</Text>
                </Pressable>
                <Pressable style={[baseStyle.editDelButton]}>
                  <Text style={baseStyle.blueBtnText}>Delete</Text>
                </Pressable>
              </View>
            </View>
            <View style={[baseStyle.row, styles.mb]}>
              <View style={styles.leftCol}>
                <Text style={[baseStyle.h4, styles.textColor]}>Color</Text>
                <Text style={baseStyle.h4}>Red, Green, Blue</Text>
              </View>
              <View style={styles.rightCol}>
                <Pressable
                  style={[baseStyle.editDelButton]}
                  onPress={() =>
                    this.props.navigation.navigate("EditAttributes")
                  }
                >
                  <Text style={baseStyle.blueBtnText}>Edit</Text>
                </Pressable>
                <Pressable style={[baseStyle.editDelButton]}>
                  <Text style={baseStyle.blueBtnText}>Delete</Text>
                </Pressable>
              </View>
            </View>
            <View style={[baseStyle.row, styles.mb]}>
              <View style={styles.leftCol}>
                <Text style={[baseStyle.h4, styles.textColor]}>Size</Text>
                <Text style={baseStyle.h4}>S, M, L</Text>
              </View>
              <View style={styles.rightCol}>
                <Pressable
                  style={[baseStyle.editDelButton]}
                  onPress={() =>
                    this.props.navigation.navigate("EditAttributes")
                  }
                >
                  <Text style={baseStyle.blueBtnText}>Edit</Text>
                </Pressable>
                <Pressable style={[baseStyle.editDelButton]}>
                  <Text style={baseStyle.blueBtnText}>Delete</Text>
                </Pressable>
              </View>
            </View>
            <View style={[baseStyle.row, styles.mb]}>
              <View style={styles.leftCol}>
                <Text style={[baseStyle.h4, styles.textColor]}>Bulk</Text>
                <Text style={baseStyle.h4}>6, 12, 14</Text>
              </View>
              <View style={styles.rightCol}>
                <Pressable
                  style={[baseStyle.editDelButton]}
                  onPress={() =>
                    this.props.navigation.navigate("EditAttributes")
                  }
                >
                  <Text style={baseStyle.blueBtnText}>Edit</Text>
                </Pressable>
                <Pressable style={[baseStyle.editDelButton]}>
                  <Text style={baseStyle.blueBtnText}>Delete</Text>
                </Pressable>
              </View>
            </View>
            <View></View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Attributes;


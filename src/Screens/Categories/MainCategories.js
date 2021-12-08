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
import color from "../../UI/Colors";
import Header from "../../Components/Header/Header";
import styles from "./Categories.style"

class MainCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterList: [
        { Title: "Dairy", Id: 0, activeFilter: true },
        { Title: "Poultry", Id: 1, activeFilter: false },
        { Title: "Grocery", Id: 2, activeFilter: false },
      ],

      searchInput: "",
    };
  }
  render() {
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Categories"}
          textButton={false}
          RightIcon={require("../../../assets/images/plus-bluebg.png")}
          onPressRightButton={() =>
            this.props.navigation.navigate("AddCategories")
          }
        />

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
        <Text style={[baseStyle.h3, styles.innerStyle]}>Filters</Text>
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
        <View style={styles.formContainer}>
          <View style={styles.mainCategory}>
            <View style={[baseStyle.row, styles.parentCategory]}>
              <View style={styles.leftCol}>
                <Text style={baseStyle.h4}>Dairy</Text>
              </View>
              <View style={styles.rightCol}>
                <Pressable
                  style={[baseStyle.editDelButton]}
                  onPress={() =>
                    this.props.navigation.navigate("EditCategories")
                  }
                >
                  <Text style={baseStyle.blueBtnText}>Edit</Text>
                </Pressable>
                <Pressable style={[baseStyle.editDelButton]}>
                  <Text style={baseStyle.blueBtnText}>Delete</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.childCategory}>
              <View style={baseStyle.row}>
                <View style={styles.leftCol}>
                  <Text style={baseStyle.h4}>Milk</Text>
                </View>
                <View style={styles.rightCol}>
                  <Pressable
                    style={[baseStyle.editDelButton]}
                    onPress={() =>
                      this.props.navigation.navigate("AddCategories")
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
          <View style={styles.mainCategory}>
            <View style={[baseStyle.row, styles.parentCategory]}>
              <View style={styles.leftCol}>
                <Text style={baseStyle.h4}>Poultry</Text>
              </View>
              <View style={styles.rightCol}>
                <Pressable
                  style={[baseStyle.editDelButton]}
                  onPress={() =>
                    this.props.navigation.navigate("EditCategories")
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
          <View style={styles.mainCategory}>
            <View style={[baseStyle.row, styles.parentCategory]}>
              <View style={styles.leftCol}>
                <Text style={baseStyle.h4}>Grocery</Text>
              </View>
              <View style={styles.rightCol}>
                <Pressable
                  style={[baseStyle.editDelButton]}
                  onPress={() =>
                    this.props.navigation.navigate("EditCategories")
                  }
                >
                  <Text style={baseStyle.blueBtnText}>Edit</Text>
                </Pressable>
                <Pressable style={[baseStyle.editDelButton]}>
                  <Text style={baseStyle.blueBtnText}>Delete</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.childCategory}>
              <View style={baseStyle.row}>
                <View style={styles.leftCol}>
                  <Text style={baseStyle.h4}>Milk</Text>
                </View>
                <View style={styles.rightCol}>
                  <Pressable
                    style={[baseStyle.editDelButton]}
                    onPress={() =>
                      this.props.navigation.navigate("AddCategories")
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
      </>
    );
  }
}

export default MainCategories;
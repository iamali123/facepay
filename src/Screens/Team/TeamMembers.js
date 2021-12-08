import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  Switch,
  Dimensions,
  TextInput,
} from "react-native";
import baseStyle from "../../UI/Style";
import styles from "./Team.style"
import Header from "../../Components/Header/Header";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class TeamMembers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TeamMembersList: [
        { name: "Sandra Smith", type: "owner", active: false, Id: 0 },
        { name: "Victor Smith", type: "member", active: true, Id: 1 },
        { name: "Sandra Smith", type: "owner", active: false, Id: 2 },
        { name: "Sandra Smith", type: "owner", active: false, Id: 3 },
        { name: "Sandra Smith", type: "owner", active: false, Id: 4 },
      ],
      filterList: [
        { Title: " Manager", activeFilter: true, Id: 0 },
        { Title: "Employee", activeFilter: false, Id: 1 },
        { Title: "Pollo Tropical", activeFilter: false, Id: 2 },
      ],
      active: false,
      searchInput: "",
    };
  }
  // toggleSwitch(value, index) {
  //   const result = this.state.TeamMembersList.filter(({ Id }) => Id === index);
  //   console.log(result);
  //   this.setState({
  //     TeamMembersList: [
  //       ...this.state.TeamMembersList,
  //       (this.state.TeamMembersList[index].active = value),
  //     ],
  //   });
  // }
  toggle(value, index) {
    let TeamMembersList = [...this.state.TeamMembersList];
    TeamMembersList[index] = {
      ...TeamMembersList[index],
      active: value,
    };
    this.setState({ TeamMembersList }, () =>
      console.log(this.state.TeamMembersList[index].active, index)
    );
  }
  render() {
    return (
      <>
      {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Team Members"}
          textButton={false}
          RightIcon={require("../../../assets/images/plus-bluebg.png")}
          onPressRightButton={() =>
            this.props.navigation.navigate("AddTeamMember")
          }
        />
        <View style={styles.posContainer}>
          <View
            style={{
              paddingRight: "5%",
              paddingLeft: "5%",
              marginBottom: 5,
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
          <ScrollView overScrollMode="never">
            {this.state.TeamMembersList.map((data, index) => {
              return (
                <View style={styles.switchBlock} key={index}>
                  <View style={styles.switchInner}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 0.27 }}>
                        <Image
                          style={styles.memberImg}
                          source={require("../../../assets/images/team-member.png")}
                        />
                      </View>
                      <View style={{ flex: 0.73 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <View style={styles.introCol}>
                            <Text style={baseStyle.h4}>{data.name}</Text>
                          </View>
                          <View style={styles.rightCol}>
                            <Switch
                              style={{
                                transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                                height: 12,
                                marginTop: 5,
                              }}
                              trackColor={{ false: "#CFD8EB", true: "#CFD8EB" }}
                              thumbColor={"#292929"}
                              ios_backgroundColor="#292929"
                              value={data.active}
                              onValueChange={(value) =>
                                this.toggle(value, index)
                              }
                            ></Switch>

                            <Text style={[baseStyle.h3, { marginTop: 10 }]}>
                              (Location X)
                            </Text>
                            <Text style={baseStyle.h6}>({data.type})</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View
                      style={[
                        baseStyle.row,
                        {
                          marginTop: 10,
                          justifyContent: "flex-end",
                          width: "100%",
                        },
                      ]}
                    >
                      <Pressable
                        style={[baseStyle.editDelButton]}
                        onPress={() =>
                          this.props.navigation.navigate("EditTeamMember")
                        }
                      >
                        <Text style={baseStyle.blueBtnText}>Edit</Text>
                      </Pressable>
                      <Pressable
                        style={[baseStyle.editDelButton, { marginLeft: 12 }]}
                      >
                        <Text style={baseStyle.blueBtnText}>Delete</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </>
    );
  }
}

export default TeamMembers;

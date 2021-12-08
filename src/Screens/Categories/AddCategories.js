import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  CheckBox,
  TextInput,
} from "react-native";
import Header from "../../Components/Header/Header";
import baseStyle from "../../UI/Style";
import styles from "./Categories.style"

class AddCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: false,
      addSub: false,
      mainCategory: "",
      subCategory: "",
      size: "",
      input: "",
      moreInput: "",
      values: [],
      subCategories: [],
      index: 0,
    };
  }
  onDelete() {
    let newArr = this.state.subCategories;
    console.log(newArr);
    newArr.splice(-1);
    this.setState({ subCategories: newArr });
    if (newArr[0] == undefined) {
      this.setState({ addSub: false });
    }
  }
  appendChild(option) {
    console.log(this.state.values);
    let newArr = this.state.values.slice();
    if (option == "save") {
      console.log("saved", this.state.values);
      // if (newArr[this.state.index] == undefined) {
      //   alert("please enert value first");
      // } else {
      //   for (let i = -1; i < this.state.index; i++) {
      //     this.setState({ values: newArr });
      //   }
      //   console.log("saved", this.state.values);
      // }
    }
    // console.log(newArr[this.state.index]);
    if (option == "append") {
      // if (newArr[this.state.index] == undefined) {
      if (this.state.mainCategory == "") {
        alert("Please enter value first");
      } else {
        this.setState({
          subCategories: [
            ...this.state.subCategories,
            <TextInput
              key={this.state.index}
              style={[baseStyle.input, { marginBottom: 15 }]}
              value={this.state.values}
              onChangeText={(value) => {
                newArr[this.state.index] = value;

                this.setState({ values: newArr });
              }}
              placeholder="Sub Category"
              placeholderTextColor="#292929"
            />,
          ],
        });
        this.setState({ index: this.state.index + 1 });
        this.setState({ addSub: true });
      }
    }
  }

  render() {
    return (
      <>
      {/* Header Component */}
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={this.state.addSub ? "Add Sub Categories" : "Add Categories"}
          textButton={true}
          nextText={"Delete"}
          onPressRightText={() => this.onDelete()}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <TextInput
              style={[baseStyle.input, { marginBottom: 15 }]}
              value={this.state.mainCategory}
              onChangeText={(value) => this.setState({ mainCategory: value })}
              placeholder="Category"
              placeholderTextColor="#292929"
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox
                value={this.state.featured}
                onValueChange={(value) =>
                  this.setState({
                    featured: value,
                  })
                }
                style={styles.checkbox}
              />
              <Text style={baseStyle.h4}>Featured Category</Text>
            </View>

            <View style={styles.addMoreWrapp}>
              {this.state.subCategories.map((child) => {
                return child;
              })}
              <View style={[baseStyle.row, { marginTop: 10 }]}>
                <Pressable
                  style={[baseStyle.blueButton, styles.innerBtnStyle]}
                  onPress={() => {
                    this.appendChild("append");
                  }}
                >
                  <Text style={baseStyle.blueBtnText}>Sub Category</Text>
                </Pressable>
                <Pressable
                  style={[baseStyle.blueButton, styles.innerBtnStyle]}
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Text style={baseStyle.blueBtnText}>Save</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default AddCategories;


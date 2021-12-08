import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import baseStyle from "../../UI/Style";
import styles from './Attributes.style'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class AddAttributes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      input: "",
      moreInput: "",
      values: [],
      attribute: [],
      index: 0,
      addValue: false,
    };
  }

  onDelete() {
    let newArr = this.state.attribute;
    // console.log(newArr);
    newArr.splice(-1);
    this.setState({ attribute: newArr });
    if (newArr[0] == undefined) {
      this.setState({ addValue: false });
    }
  }
  _onSave = () => {
    const newArr = this.state.values.slice();
    for (let i = 0; i > this.state.index; i++) {
      if (newArr[i] == undefined) {
        alert("please enert value first");
      } else newArr.splice(i, this.state.index, newArr[i]);
      this.setState({ values: newArr }, () => console.log(this.state.values));
    }
    // if (!this.state.input == "") {
    //   this.state.values.push(this.state.input);
    //   // this.setState({ input: "" });
    // } else if (this.state.input == "") {
    //   alert("plese enter value");
    //   // this.setState({ values: [] });
    // }
    // // if (!this.state.moreInput == []) {
    // //   this.state.values.push(this.state.moreInput);
    // // }
    console.log(this.state.title);
    console.log(this.state.values, "Saved");
    // this.setState({ values: [] });
    this.props.navigation.goBack();
  };
  appendChild(option) {
    // console.log(this.state.values);
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
      if (this.state.title == "") {
        alert("Please enter value first");
      } else {
        this.setState({
          attribute: [
            ...this.state.attribute,
            <View style={baseStyle.row} key={this.state.index}>
              <TextInput
                style={[baseStyle.input, styles.inputStyle]}
                placeholder="Value"
                placeholderTextColor="#292929"
                value={this.state.values}
                onChangeText={(value) => {
                  newArr[this.state.index] = value;

                  this.setState({ values: newArr });
                }}
              />
              <TextInput
                style={[baseStyle.input, styles.inputStyle]}
                placeholder="Price"
                placeholderTextColor="#292929"
                value={this.state.values}
                keyboardType="phone-pad"
                onChangeText={(value) => {
                  newArr[this.state.index + 1] = value;

                  this.setState({ values: newArr });
                }}
              />
            </View>,
          ],
        });
        this.setState({ index: this.state.index + 1, addValue: true });
      }
    }
  }
  render() {
    const newArr = this.state.values.slice();
    return (
      <>
        <View style={baseStyle.topBar}>
          <Pressable
            style={baseStyle.backbtn}
            onPress={() => this.props.navigation.goBack()}
            hitSlop={20}
          >
            <Image
              style={baseStyle.backArrow}
              source={require("../../../assets/images/back-arrow.png")}
            />
          </Pressable>
          <Text style={baseStyle.h2}>Add Attributes</Text>
          {this.state.addValue && (
            <Pressable
              style={baseStyle.nextbtn}
              onPress={() => {
                // this.props.navigation.goBack();
                this.onDelete();
              }}
              hitSlop={20}
            >
              <Text style={baseStyle.h2}>Delete</Text>
            </Pressable>
          )}
        </View>
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <TextInput
              style={[baseStyle.input, { marginBottom: 15 }]}
              placeholder="Attribute Title"
              placeholderTextColor="#292929"
              value={this.state.title}
              onChangeText={(value) => this.setState({ title: value })}
            />
            {/* <TextInput
              style={[baseStyle.input, { marginBottom: 15 }]}
              placeholder="Values"
              placeholderTextColor="#292929"
              value={this.state.values}
              onChangeText={(value) => {
                // newArr[this.state.index] = value;

                // this.setState({ values: newArr });
                this.setState({
                  value: [
                    ...this.state.values,
                    ,
                    (this.state.values[this.state.index] = value),
                  ],
                });
              }}
            /> */}
            {this.state.attribute.map((child) => {
              return child;
            })}

            <View style={[baseStyle.row, { marginTop: 10 }]}>
              <Pressable
                style={[baseStyle.blueButton, styles.innerBtnStyle]}
                onPress={() => this.appendChild("append")}
              >
                <Text style={baseStyle.blueBtnText}>Add Values</Text>
              </Pressable>
              <Pressable
                style={[baseStyle.blueButton, styles.innerBtnStyle]}
                onPress={() => this._onSave()}
              >
                <Text style={baseStyle.blueBtnText}>Save</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default AddAttributes;


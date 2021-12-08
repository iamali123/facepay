import * as React from "react";
import {
  View,
  Pressable,
  Text,
  ScrollView,
  Switch,
  TextInput,
} from "react-native";
import baseStyle from "../../../UI/Style";
import Header from "../../../Components/Header/Header";
import MainButton from "../../../Components/Button/MainButton";

class EditTaxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, tax: "", taxRatio: "" };
  }

  render() {
    return (
      <>
        {/* Header Component */}
        <Header
          Title={"Edit Taxes"}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollView overScrollMode="never">
          <View style={baseStyle.themeContainer}>
            <View
              style={[
                baseStyle.row,
                { width: "100%", alignItems: "center", marginBottom: "8%" },
              ]}
            >
              {this.state.active && (
                <Text style={baseStyle.h4}>Deactivate</Text>
              )}
              {!this.state.active && <Text style={baseStyle.h4}>Activate</Text>}
              <Switch
                style={{
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
            <TextInput
              style={baseStyle.input}
              placeholder="State Name"
              placeholderTextColor="#292929"
              value={this.state.tax}
              onChangeText={(value) => this.setState({ tax: value })}
            />
            <View
              style={[baseStyle.row, { width: "50%", alignItems: "center" }]}
            >
              <Text style={[baseStyle.h4, { marginRight: 15 }]}>Tax ratio</Text>
              <TextInput
                style={[
                  baseStyle.input,
                  { maxWidth: 100, paddingLeft: 15, paddingRight: 15 },
                ]}
                placeholder="4.5%"
                placeholderTextColor="#292929"
                keyboardType="phone-pad"
                value={this.state.taxRatio}
                onChangeText={(value) => this.setState({ taxRatio: value })}
              />
            </View>
            <Text style={baseStyle.text}>
              Leave the tax at 0 to apply custom
            </Text>
            <MainButton
              onPress={() => this.props.navigation.goBack()}
              btnText={"Save"}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default EditTaxes;

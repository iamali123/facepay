import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import baseStyle from "../../UI/Style";
import Header from "../../Components/Header/Header";
import color from "../../UI/Colors";
import MainButton from "../../Components/Button/MainButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class ManualCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cardNumber: "",
      date: "",
      expireMonth: "",
      expireYear: "",
      cvv: "",
    };
  }
  render() {
    return (
      <>
        <Header
          Title={"Manual Card"}
          onPressLeft={() => this.props.navigation.goBack()}
        />

        <ScrollView overScrollMode="never">
          <View style={styles.formContainer}>
            <View style={{ width: "100%" }}>
              <TextInput
                style={baseStyle.input}
                value={this.state.name}
                onChangeText={(value) => this.setState({ name: value })}
                placeholder="Name"
                placeholderTextColor="#292929"
              />
              <TextInput
                style={baseStyle.input}
                value={this.state.cardNumber}
                onChangeText={(value) => this.setState({ cardNumber: value })}
                placeholder="Card Number"
                keyboardType="phone-pad"
                placeholderTextColor="#292929"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextInput
                  style={[baseStyle.input, styles.dualField]}
                  value={this.state.expireMonth}
                  onChangeText={(value) =>
                    this.setState({ expireMonth: value })
                  }
                  placeholder="Expire Month"
                  placeholderTextColor="#292929"
                  keyboardType="phone-pad"
                />
                <TextInput
                  style={[baseStyle.input, styles.dualField]}
                  value={this.state.expireYear}
                  onChangeText={(value) => this.setState({ expireYear: value })}
                  placeholder="Expire Year"
                  placeholderTextColor="#292929"
                  keyboardType="phone-pad"
                />
              </View>
              <TextInput
                style={baseStyle.input}
                value={this.state.cvv}
                onChangeText={(value) => this.setState({ cvv: value })}
                placeholder="CVV"
                placeholderTextColor="#292929"
                keyboardType="phone-pad"
              />
              <MainButton
                onPress={() =>
                  this.props.navigation.navigate("TransactionSuccessfull")
                }
                btnText={"Continue"}
              />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default ManualCard;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 20,
  },
  loginVector: {
    width: windowWidth - 40,
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "7%",
  },
  innerStyle: {
    textAlign: "center",
  },
  btnInnerStyle: {
    marginTop: 15,
    width: "100%",
  },
  dualField: {
    width: "46%",
  },
});

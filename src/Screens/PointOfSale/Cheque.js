import * as React from "react";
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
import DateTimePicker from "@react-native-community/datetimepicker";
import Moment from "moment";
import Colors from "../../UI/Colors";
import Header from "../../Components/Header/Header";
import MainButton from "../../Components/Button/MainButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Cheque extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      number: "",
      date: "",
      notes: "",
      showPicker: false,
    };
  }
  showDatepicker = () => {
    this.setState({ mode: "date", showPicker: true });
  };
  render() {
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Cheque"}
        />

        <ScrollView overScrollMode="never">
          <View style={styles.formContainer}>
            <Text style={[baseStyle.text, styles.innerStyle]}>
              Amount entered is for tracking purpose only. You will not recieve
              deposit for this transaction.
            </Text>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/cheque-banner.png")}
            />
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <TextInput
                style={baseStyle.input}
                value={this.state.name}
                onChangeText={(value) => this.setState({ name: value })}
                placeholder="Name"
                placeholderTextColor="#292929"
              />
              <TextInput
                style={baseStyle.input}
                value={this.state.amount}
                onChangeText={(value) => this.setState({ amount: value })}
                placeholder="Amount"
                keyboardType="phone-pad"
                placeholderTextColor="#292929"
              />
              <TextInput
                style={baseStyle.input}
                value={this.state.number}
                onChangeText={(value) => this.setState({ number: value })}
                keyboardType="phone-pad"
                placeholder="425-425-234-24534"
                placeholderTextColor="#292929"
              />
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
                  style={{
                    width: "100%",
                    paddingRight: "10%",
                    color: Colors.black,
                  }}
                  value={
                    this.state.date == ""
                      ? this.state.date
                      : Moment(this.state.date).format("MM/DD/YYYY")
                  }
                  editable={false}
                  placeholder="Date"
                  placeholderTextColor="#292929"
                  selectionColorr="#292929"
                />
                {this.state.showPicker && (
                  <DateTimePicker
                    // testID={this.state.field}
                    value={new Date()}
                    mode="date"
                    // is24Hour={true}
                    display="default"
                    onChange={(event, date) =>
                      this.setState({ date: date, showPicker: false })
                    }
                  />
                )}
                <Pressable
                  style={styles.faceButton}
                  onPress={() => this.showDatepicker()}
                >
                  <Image
                    style={styles.faceIcon}
                    source={require("../../../assets/images/date-icon.png")}
                  ></Image>
                </Pressable>
              </View>
              <TextInput
                style={[baseStyle.input, styles.textArea]}
                value={this.state.notes}
                onChangeText={(value) => this.setState({ notes: value })}
                placeholder="Add Notes"
                placeholderTextColor="#292929"
                multiline={true}
                numberOfLines={10}
              />
            </View>

            <MainButton
              onPress={() =>
                this.props.navigation.navigate("TransactionSuccessfull")
              }
              btnText={"Record"}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Cheque;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 20,
    marginBottom: 50,
  },
  loginVector: {
    width: windowWidth - 40,
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "5%",
  },
  innerStyle: {
    textAlign: "center",
  },
  btnInnerStyle: {
    marginTop: 15,
    width: "100%",
  },
  faceIcon: {
    width: 22,
    height: 22,
    alignSelf: "center",
    resizeMode: "contain",
  },
  faceButton: {
    position: "absolute",
    right: 20,
    alignSelf: "center",
  },
  textArea: {
    borderRadius: 10,
    height: 170,
    textAlignVertical: "top",
    paddingTop: 12,
  },
});

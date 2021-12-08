import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import { Picker } from "@react-native-picker/picker";
import baseStyle from "../../UI/Style";
import color from "../../UI/Colors";
import GlobalConstants from "../../Components/GlobalConstants";
import Header from "../../Components/Header/Header";
class Transactions extends React.Component {
  state = {
    activeSections: [],
    status: "",

    statusList: [
      { Title: "Pending", Id: 0 },
      { Title: "Completed", Id: 1 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
      { Title: "Status 3", Id: 2 },
    ],
    paymentMethod: "",
    paymentMethodList: [
      { Title: "Cash", Id: 0 },
      { Title: "Debit Card", Id: 1 },
      { Title: "Credit Crad", Id: 2 },
    ],
    transactions: [
      {
        title: "Robert Johnson",
        content: "US-3166",
        AC: "123456789",
        date: "01/10/21",
        time: "12:25 pm",
        amount: "246.8",
        TransID: " ID: 85965451",
      },
      {
        title: "Borak Obama",
        content: "US-54785",
        AC: "123456789",
        date: "02/10/21",
        time: "12:25 pm",
        amount: "246.8",
        TransID: " ID: 85965452",
      },
      {
        title: "Robert Johnson",
        content: "US-3166",
        AC: "123456789",
        date: "03/10/21",
        time: "12:25 pm",
        amount: "246.8",
        TransID: " ID: 85965453",
      },
      {
        title: "Robert Johnson",
        content: "US-3166",
        AC: "123456789",
        date: "04/10/21",
        time: "12:25 pm",
        amount: "246.8",
        TransID: " ID: 85965454",
      },
      {
        title: "Borak Obama",
        content: "US-54785",
        AC: "123456789",
        date: "05/10/21",
        time: "12:25 pm",
        amount: "246.8",
        TransID: " ID: 85965455",
      },
    ],
  };

  _renderHeader = (section) => {
    return (
      <View style={styles.switchRow}>
        <View style={styles.switchInner}>
          <View style={styles.leftCol}>
            <Text style={baseStyle.h2}>{section.title}</Text>
            <Text style={baseStyle.h5}>{section.content}</Text>
            <Text style={baseStyle.h5}>{section.AC}</Text>
          </View>
          <View style={styles.rightCol}>
            <View style={baseStyle.row}>
              <Text style={baseStyle.h6}>{section.date}</Text>
              <Text style={(baseStyle.h6, { paddingLeft: 10 })}>
                {section.time}
              </Text>
            </View>
            <Text style={[baseStyle.h3, styles.priceColor]}>
              ${section.amount}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  _renderContent = (section) => {
    return (
      <>
        <View style={styles.total}>
          <Text style={baseStyle.h5}>{section.TransID}</Text>
          <View style={{ paddingBottom: 15 }}>
            <View style={baseStyle.row}>
              <Text style={baseStyle.h5}>Amount</Text>
              <Text style={baseStyle.h5}>$10.00</Text>
            </View>
            <View style={baseStyle.row}>
              <Text style={baseStyle.h5}>Amount</Text>
              <Text style={baseStyle.h5}>$10.00</Text>
            </View>
            <View style={baseStyle.row}>
              <Text style={baseStyle.h5}>Amount</Text>
              <Text style={baseStyle.h5}>$10.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.totalAmount}>
          <Text style={[baseStyle.h5, styles.mr]}>Total Amount</Text>
          <Text style={baseStyle.h5}>$10.00</Text>
        </View>
      </>
    );
  };

  _updateSections = (activeSections) => {
    this.setState({ activeSections });
  };

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      // do something
      GlobalConstants.route = "PointOfSaleTab";
    });
  }
  componentWillUnmount() {
    this._unsubscribe;
  }

  render() {
    return (
      <>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          Title={"Transactions"}
          textButton={false}
          RightIcon={require("../../../assets/images/search-icon.png")}
          onPressRightButton={() =>
            this.props.navigation.navigate("TransactionsSearch")
          }
        />
        <View>
          <ScrollView
            overScrollMode="never"
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterOptions}
          >
            <View style={[baseStyle.dropdownWrapper, styles.dropdownStyle]}>
              <Picker style={baseStyle.dropdown}>
                <Picker.Item
                  style={baseStyle.pickerText}
                  label="Date"
                  value="Date"
                />
                <Picker.Item
                  style={baseStyle.pickerText}
                  label="Date"
                  value="Date"
                />
              </Picker>
              <Image
                style={baseStyle.bottomDrop}
                source={require("../../../assets/images/dropdown-icon.png")}
              ></Image>
            </View>
            <View style={[baseStyle.dropdownWrapper, styles.dropdownStyle]}>
              <Picker
                style={baseStyle.dropdown}
                selectedValue={this.state.status}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ status: itemValue })
                }
              >
                <Picker.Item
                  style={baseStyle.pickerText}
                  label="Status"
                  value={null}
                />
                {this.state.statusList.map((data) => {
                  return (
                    <Picker.Item
                      style={baseStyle.pickerText}
                      label={data.Title}
                      value={data.Id}
                      key={data.Id}
                    />
                  );
                })}
              </Picker>
              <Image
                style={baseStyle.bottomDrop}
                source={require("../../../assets/images/dropdown-icon.png")}
              ></Image>
            </View>
            <View style={[baseStyle.dropdownWrapper, styles.dropdownStyle]}>
              <Picker
                style={baseStyle.dropdown}
                selectedValue={this.state.paymentMethod}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ paymentMethod: itemValue })
                }
              >
                <Picker.Item
                  style={baseStyle.pickerText}
                  label="Payment Method"
                  value={null}
                />
                {this.state.paymentMethodList.map((data) => {
                  return (
                    <Picker.Item
                      style={baseStyle.pickerText}
                      label={data.Title}
                      value={data.Id}
                      key={data.Id}
                    />
                  );
                })}
              </Picker>
              <Image
                style={baseStyle.bottomDrop}
                source={require("../../../assets/images/dropdown-icon.png")}
              ></Image>
            </View>
          </ScrollView>
        </View>
        <ScrollView overScrollMode="never">
          <Accordion
            sections={this.state.transactions}
            activeSections={[0]}
            activeSections={this.state.activeSections}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            underlayColor="transparent"
          />
        </ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  switchRow: {
    borderColor: "#D8E0F3",
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  switchInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  total: {
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: "#D8E0F3",
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  totalAmount: {
    borderColor: "#D8E0F3",
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 15,
  },
  mr: {
    marginRight: 15,
  },

  switchWrapper: {
    borderColor: "#3F466F",
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  filterOptions: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
  },
  priceColor: {
    color: "#129516",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  dropdownStyle: {
    width: 150,
    marginLeft: 20,
    paddingLeft: 12,
    paddingRight: 5,
    // borderColor: color.black,
  },
});

export default Transactions;

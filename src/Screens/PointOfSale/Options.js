import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import baseStyle from "../../UI/Style";
import { Picker } from "@react-native-picker/picker";

const Options = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <>
      <View style={styles.ChargeContainer}>
        <Text style={[baseStyle.h4, styles.titleColor]}>Add Options</Text>
        <View style={styles.optionsTypes}>
          <Picker
            style={baseStyle.dropdown}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item
              style={baseStyle.pickerText}
              label="Size"
              value="Size"
            />
            <Picker.Item style={baseStyle.pickerText} label="XL" value="XL" />
          </Picker>
          <Picker
            style={baseStyle.dropdown}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item
              style={baseStyle.pickerText}
              label="Sugar"
              value="Sugar"
            />
            <Picker.Item
              style={baseStyle.pickerText}
              label="Salt"
              value="Salt"
            />
          </Picker>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  ChargeContainer: {
    flex: 1,
    marginTop: "20%",
    marginBottom: "20%",
    paddingRight: "10%",
    paddingLeft: "10%",
  },
  optionsTypes: {
    marginTop: 10,
  },
});

export default Options;

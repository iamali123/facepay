import * as React from "react";
import { TextInput } from "react-native";
import styles from "./ThemeTextInput.style";

class ThemeTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
        <TextInput
          style={styles.input}
          value={this.props.inputValue}
          placeholder={this.props.inputPlaceholder}
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ inputValue: value })}
        />
    );
  }
}

export default ThemeTextInput;

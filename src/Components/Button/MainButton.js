import * as React from "react";
import { Text, Pressable } from "react-native";
import styles from "./Button.style";

class MainButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Pressable
        disabled={this.props.disabled}
        style={[styles.blueButtonMain, styles.fullWidthBtn]}
        onPress={this.props.onPress}
      >
        <Text style={styles.blueBtnText}>{this.props.btnText}</Text>
      </Pressable>
    );
  }
}

export default MainButton;

import * as React from "react";
import { View, TextInput, Pressable, Image } from "react-native";
import baseStyle from "../../UI/Style";
import styles from "./Counter.style";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: "0",
    };
  }
  increment() {
    let stock = parseInt(this.state.stock);
    stock = stock + 1;
    this.setState({ stock: stock.toString() });
  }
  decrement() {
    let stock = parseInt(this.state.stock);
    if (stock < 1) {
      this.setState({ stock: this.state.stock });
    } else {
      stock = stock - 1;
      this.setState({ stock: stock.toString() });
    }
  }
  // componentDidMount() {
  //   this.setState({ stock: this.props.items });
  // }
  render() {
    return (
      <View style={styles.productQuantity}>
        <Pressable
          hitSlop={10}
          onPress={() => {
            this.decrement();
          }}
          style={styles.quantityIcon}
        >
          <Image
            style={
              this.props.active ? styles.minusIconWhite : styles.minusIconBlack
            }
            source={require("../../../assets/images/decrement-icon.png")}
          />
        </Pressable>
        <View style={styles.quantity}>
          <TextInput
            maxLength={5}
            style={[
              baseStyle.h6,
              this.props.active
                ? styles.quantityTextWhite
                : styles.quantityTextBlack,
            ]}
            value={this.state.stock}
            onChangeText={(value) => this.setState({ stock: value })}
            keyboardType="phone-pad"
          />
        </View>
        <Pressable
          hitSlop={10}
          onPress={() => {
            this.increment();
          }}
          style={styles.quantityIcon}
        >
          <Image
            style={
              this.props.active ? styles.plusIconWhite : styles.plusIconBlack
            }
            source={require("../../../assets/images/increment-icon.png")}
          />
        </Pressable>
      </View>
    );
  }
}

export default Counter;

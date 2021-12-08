import * as React from "react";
import { View, Text, Pressable, Image } from "react-native";
import baseStyle from "../../UI/Style";
import styles from "./Header.style";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.topBar}>
        <Pressable
          style={styles.backbtn}
          onPress={this.props.onPressLeft}
          hitSlop={20}
        >
          <Image
            style={styles.backArrow}
            source={
              this.props.leftIcon
                ? this.props.leftIcon
                : require("../../../assets/images/back-arrow.png")
            }
          />
          {this.props.badgeCounter ? (
            <View style={styles.iconBadge}>
              <Text style={[baseStyle.h5, styles.badgeTextColor]}>
                {this.props.badgeCounter}
              </Text>
            </View>
          ) : null}
        </Pressable>
        <Text style={baseStyle.h2}>{this.props.Title}</Text>
        {!this.props.textButton && (
          <Pressable
            style={styles.nextbtn}
            onPress={this.props.onPressRightButton}
            hitSlop={20}
          >
            <Image style={styles.backArrow} source={this.props.RightIcon} />
          </Pressable>
        )}
        {this.props.textButton && (
          <Pressable
            style={styles.nextbtn}
            onPress={this.props.onPressRightText}
            hitSlop={20}
          >
            <Text style={baseStyle.h2}>{this.props.nextText}</Text>
          </Pressable>
        )}
      </View>
    );
  }
}

export default Header;

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  topBar: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: "10%",
    paddingBottom: 10,
    backgroundColor: "#fff",
    position: "relative",
    zIndex: 1,
  },
  backbtn: {
    position: "absolute",
    left: 20,
    bottom: 12,
    zIndex: 2,
  },
  backArrow: {
    width: 20,
    height: 20,
    zIndex: 2,
  },
  nextbtn: {
    position: "absolute",
    right: 20,
    bottom: 12,
    zIndex: 2,
  },

  iconBadge: {
    // flexDirection: "row",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    // paddingBottom: 4,
    paddingLeft: 1,
    // paddingRight: 4,
    borderRadius: 12,
    position: "absolute",
    top: -12,
    right: -12,
    borderColor: "#fff",
    borderWidth: 2,
    minWidth: 24,
    minHeight: 24,
  },
  badgeTextColor: {
    color: "#ffffff",
  },
});

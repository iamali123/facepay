import { StyleSheet } from "react-native";
import themeFontSize from "../../UI/themeFontSizes"
import color from "../../UI/Colors"

export default StyleSheet.create({
    input: {
        height: 40,
        maxWidth: 595,
        width: "100%",
        marginBottom: 12,
        borderColor: "#CFD8EB",
        borderWidth: 2,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        fontSize: themeFontSize.medium,
        color: color.black,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 8,
        paddingBottom: 8,
        justifyContent: "center",
      },
});

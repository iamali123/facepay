import ResponsiveStylesheet from "react-native-responsive-stylesheet";
import color from "../../UI/Colors"

//Normal styles:
export default  ResponsiveStylesheet.create({
    filterSection: {
        marginTop: "5%",
        marginHorizontal: "5%",
        marginBottom: 5,
      },
      row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      productRow: {
        margin: 20,
      },
      btnRow: {
        flexDirection: "row",
        marginBottom: 30,
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: "space-between",
      },
    
      categoriesList: {
        flexDirection: "row",
        marginTop: 8,
      },
    
      textColor: {
        color: color.black,
      },
    
      btnStyle: {
        paddingTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 7,
      },
      active: {
        backgroundColor: color.black,
        borderColor: color.black,
      },
      activeTextColor: {
        color: "#fff",
      },
    
      priceColor: {
        color: "#129516",
      },
      RightCol: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
      },
      leftCol: {
        paddingRight: 20,
        alignItems: "flex-start",
      },
      posItem: {
        paddingTop: 15,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#ffffff",
        marginBottom: 20,
        borderRadius: 5,
      },
      normalRow: {
        flexDirection: "row",
      },
      delBtn: {
        position: "absolute",
        top: -12,
        right: -11,
      },
      delIcon: {
        resizeMode: "contain",
        width: 25,
        height: 25,
      },
  });
  
  //Media Queries styles:
export var responsiveStyles= ResponsiveStylesheet.createSized("max-width", {
    575: {
      normalRow: {
        flexWrap: "wrap",
        flexDirection: "column",
      },
      RightCol: {
        width: "100%",
      },
      leftCol: {
        width: "100%",
      },
    },
  });
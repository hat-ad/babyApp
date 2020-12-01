import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainBody: {
    position: "relative",
    height: "100%",
    backgroundColor: "white",
  },
  container: {
    marginHorizontal: 30,
  },
  helpTopBar: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  topHelpText: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginLeft: 10,
  },
  bannerHelp: {
    width: "100%",
    height: 180,
  },
  helperBanner: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  helperBannerTxt: {},
  problemQstn: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#292929",
  },
  problemSlvGuide: {
    textAlign: "center",
    fontSize: 10,
    fontStyle: "italic",
  },
  textInput: {
    height: 120,
    backgroundColor: "#DFF3FC",
    width: "100%",
    marginVertical: 20,
    padding: 15,
    borderRadius: 15,
    textAlignVertical: "top",
  },
});

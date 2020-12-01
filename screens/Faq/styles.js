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
  notificationTop: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  topNotiText: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginLeft: 10,
  },
  notificationIconBox: {
    height: 25,
    width: 25,
  },
  notificationIcon: {
    width: "100%",
    height: "100%",
  },
  typeKeywordToSearch: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 15,
    position: "relative",
  },
  topSeachBar: {
    width: "100%",
  },
  customInput: {
    width: 320,
    backgroundColor: "#DFF3FC",
    borderWidth: 1,
    borderColor: "#DFF3FC",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 0,
    margin: 0,
  },
  customDesignBtn: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    margin: 0,
    borderWidth: 0,
  },
  topSeachBarBtn: {
    position: "absolute",
    right: 0,
  },
  faqLiListBody: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
  },
  lastChild: {
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  blueDot: {
    width: 7,
    height: 7,
    backgroundColor: "#279ACC",
  },
  rightIcon: {
    width: 15,
    height: 15,
  },
  openClose: {
    display: "none",
  },
  currentShowSectionIcon: {
    display: "flex",
  },
  currenthideSection: {
    display: "none",
  },
  faqLiListTitle: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
    width: "90%",
    flexShrink: 1,
  },
  faqLiListBodyContent: {
    display: "none",
    paddingBottom: 10,
  },
  currentShowSection: {
    display: "flex",
    marginLeft: 17,
  },
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainBody: {
    position: "relative",
    height: "100%",
    backgroundColor: "white",
  },
  container: {
    marginHorizontal: 20,
  },
  selctChild: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  selctChildBoxTop: {
    height: 32,
    width: 21,
    padding: 1,
  },
  selectHandIcon: {
    width: "100%",
    height: "100%",
  },
  selectChildTextTop: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginLeft: 15,
    marginTop: 2,
  },
  singleProfBox: {
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  singleChildBox: {
    backgroundColor: "#DFF3FC",
    display: "flex",
    borderRadius: 15,
    padding: 15,
    margin : 5,
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
  },
  leftChildBox: {
    marginRight: "8%",
  },
  childProfilePic: {
    width: 100,
    height: 100,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 50,
  },
  eachChildProfilePic: {
    width: "100%",
    height: "100%",
  },
  checkedIcon: {
    position: "absolute",
    width: 15,
    height: 15,
    right: 12,
    top: 12,
  },
  eachChildName: {
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: 4,
  },
  secondRow: {
    marginTop: "7%",
  },
  informedContent: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  consentText: {
    fontSize: 18,
  },
  divider: {
    height: 2,
    width: "90%",
    backgroundColor: "#E9E9E9",
    margin: 20,
  },
  footerBtn: {
    display: "flex",
    marginHorizontal: 20,
    borderRadius: 15,
    flex: 1,
  },
  userAgreement: {
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  agreementIcon: {
    height: 20,
    width: 20,
  },
  userAgreementTxt: {
    fontStyle: "italic",
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
    flexShrink: 1,
  },
});

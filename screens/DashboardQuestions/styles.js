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
  topActions: {
    display: "flex",
    alignItems: "center",
  },
  menuSections: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
  },
  singleMenu: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: "33%",
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#E9E9E9",
  },
  customSection: {
    borderBottomColor: "#209FD8",
  },
  menutopDot: {
    backgroundColor: "#20A0D8",
    height: 10,
    width: 10,
    borderRadius: 50,
    textAlign: "center",
    opacity: 0.3,
  },
  currentActive: {
    opacity: 1,
  },
  menuText: {
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: 3,
    fontSize: 13,
    opacity: 0.3,
  },
  referredSection: {
    marginTop: 15,
  },
  referredByTxt: {
    fontWeight: "700",
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#DADADA",
    paddingBottom: 10,
  },
  referredFrom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  radioBtnIcon: {
    borderColor: "red",
  },
  referredFromTxt: {
    fontSize: 12,
  },
  referredByOther: {
    marginLeft: 8,
    backgroundColor: "#DFF3FC",
    padding: 4,
    paddingLeft: 15,
    borderRadius: 5,
    marginTop: 5,
    overflow: "hidden",
  },
  childNameInput: {
    flexDirection: "row",
    marginTop: 10,
    display: "flex",
  },
  childFirstName: {
    backgroundColor: "#DFF3FC",
    width: "48%",
    borderRadius: 5,
    marginLeft: 8,
    padding: 4,
    paddingLeft: 15,
    marginTop: 5,
    overflow: "hidden",
  },
  childLastName: {
    backgroundColor: "#DFF3FC",
    marginLeft: "auto",
    width: "48%",
    borderRadius: 5,
    marginLeft: 8,
    padding: 4,
    paddingLeft: 15,
    marginTop: 5,
    overflow: "hidden",
  },
  fullInput: {
    backgroundColor: "#DFF3FC",
    width: "98%",
    borderRadius: 5,
    marginLeft: 8,
    padding: 4,
    paddingLeft: 15,
    marginTop: 5,
    overflow: "hidden",
  },
  inputArea: {
    backgroundColor: "red",
  },
  multiTabBottomUl: {
    flexDirection: "row",
    marginVertical: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  multiTabBottomLi: {
    display: "flex",
    height: 3,
    width: "15%",
    marginRight: 11,
    borderColor: "#219FD9",
    borderWidth: 2,
    padding: 2,
    borderRadius: 10,
  },
  currentActiveBottom: {
    backgroundColor: "#219FD9",
  },
  continueBtnhalf:{
    width: '50%',
    paddingHorizontal: '4%'
  }
});

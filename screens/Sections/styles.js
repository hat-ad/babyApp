import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainBody: {
    position: "relative",
    height: "100%",
    backgroundColor: "white",
  },
  logoBox: {
    position: "absolute",
    top: 70,
    left: 10,
    width: 130,
    height: 82,
    // backgroundColor: "red",
    zIndex: 2,
    padding: 10,
    marginLeft: 20,
  },
  logoImg: {
    width: "100%",
    height: "100%",
  },
  allSections: {
    marginTop: 20,
  },
  sections: {
    marginVertical: 10,
    marginHorizontal: 30,
    flex: 1,
    flexDirection: "column",
    position: "relative",
    display: "flex",
  },
  eachSections: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    display: "flex",
  },
  sectionIconBox: {
    position: "relative",
    width: 90,
    height: 90,
    backgroundColor: "black",
    margin: 7,
    padding: 22,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "black",
    elevation: 11,
    zIndex: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  sectionBoxIcon: {
    width: "100%",
    height: "100%",
  },
  sectionBoxContent: {
    backgroundColor: "rgba(190,231,249,0.51)",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
  },
  sectionBgImg: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },

  sectionTopic: {
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "capitalize",
  },
});

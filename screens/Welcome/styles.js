import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    height: "100%",
    backgroundColor: "white",
    position: "relative",
  },
  topBlue: {
    height: 150,
    backgroundColor: "blue",
    borderBottomRightRadius: 40,
    // transform: [{ rotate: "10deg" }],
    position: "relative",
  },
  textSize: {
    fontSize: 10,
  },
  cheatBlue: {
    height: 100,
    zIndex: 2,
    width: 150,
    backgroundColor: "blue",
    position: "absolute",
    bottom: -50,
    left: 0,
  },
  whiteDiv: {
    backgroundColor: "white",
    // marginTop: 50,
    zIndex: 1,
    height: 500,
    width: "100%",
    borderRadius: 40,
    borderTopLeftRadius: 40,
    // position: "absolute",
    width: "100%",
    // top: 130,
  },
  topImg: {
    // position: "relative",
    // top: "-10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  userImg: {
    width: 150,
    height: 150,
    borderRadius: 15,
    zIndex: 2,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "black",
    marginTop: -40,
  },
  userImgPic: {
    margin: 10,
  },
  bottomCam: {
    position: "absolute",
    backgroundColor: "black",
    height: 35,
    width: 35,
    right: -15,
    bottom: -15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  cameraPic: {
    position: "absolute",
    zIndex: 1,
    width: 20,
    height: 20,
    top: "20%",
    left: "22%",
  },
  userName: {
    color: "black",
    zIndex: 2,
    textTransform: "capitalize",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 15,
  },
  place: {
    textAlign: "center",
  },
  userDetailsBox: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  userDetails: {
    backgroundColor: "#DFF3FC",
    width: "85%",
    padding: 10,
    borderRadius: 10,
  },
  emailIcon: {
    width: 17,
    height: 17,
    marginRight: 10,
  },
  userData: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, .08)",
    paddingTop: 8,
    paddingBottom: 8,
  },
  femaleIcon: {
    transform: [{ rotate: "235deg" }],
  },
  lastData: {
    borderBottomWidth: 0,
  },
  helpCenter: {
    marginTop: 20,
  },
  helpBox: {
    borderBottomWidth: 0,
  },
  helpText: {
    fontWeight: "bold",
    fontSize: 11,
  },
});

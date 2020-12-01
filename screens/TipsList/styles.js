import { StyleSheet } from "react-native";
import { Transition } from "react-native-reanimated";

export default StyleSheet.create({
  mainBody: {
    position: "relative",
    height: "100%",
    backgroundColor: "white",
  },
  container: {
    marginHorizontal: 30,
  },
  tipsUl: {
    marginVertical: 15,
  },
  tipsli: {
    backgroundColor: "#DFF3FC",
    padding: 15,
    position: "relative",
    borderRadius: 15,
    marginBottom: 20,
  },
  tipsliTitle: {
    fontWeight: "bold",
  },
  tipsliContent: {
    paddingVertical: 10,
  },
  tipsLiBottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  tipsLiBottomLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  tipsLiBottomLeftEach: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  tipsLiBottomLoved: {
    width: 21,
    height: 19,
    padding: 2,
    // backgroundColor: "red",
    marginRight: 2,
  },
  loveIcon: {
    width: "100%",
    height: "100%",
  },
  dot: {
    width: 7,
    height: 7,
    backgroundColor: "#1AA0D7",
    borderRadius: 50,
    position: "absolute",
    right: 10,
    top: 10,
  },
  topSectionPic: {
    width: "auto",
    height: 180,
    marginBottom: 10,
    resizeMode: "contain",
  },
  topHeroSection: {
    position: "relative",
  },
  topHeroPic: {
    // resizeMode: "contain",
    width: "100%",
    height: "100%",
    borderRadius: 7,
  },
  playVideo: {
    position: "absolute",
    width: 30,
    height: 30,
    top: "50%",
    left: "50%",
  },
  playVideoIcon: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});

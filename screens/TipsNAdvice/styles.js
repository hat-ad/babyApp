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
  topHeroSection: {
    marginVertical: 15,
    position: "relative",
  },
  topSectionPic: {
    borderRadius: 10,
    width: "auto",
  },
  topHeroPic: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  playVideo: {
    // width: 25,
    // height: 25,
    // position: "absolute",
    // top: "50%",
    // left: "50%",
  },
  titleSection: {
    fontSize: 15,
    fontWeight: "bold",
  },
  commentSection: {
    height: 120,
    backgroundColor: "#DFF3FC",
    width: "100%",
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    textAlignVertical: "top",
  },
  reactOnComment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  customBtn: {
    width: "auto",
    borderRadius: 7,
    paddingHorizontal: 25,
  },
  likedContent: {
    marginLeft: "auto",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  userCommented: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#DFF3FC",
    borderRadius: 10,
    padding: 15,
  },
  commentorPicSection: {
    width: 60,
    height: 60,
    backgroundColor: "black",
    padding: 3,
    marginRight: 10,
    borderRadius: 7,
  },
  commentorPic: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  commentorName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  commentedOn: {
    fontStyle: "italic",
    color: "#808D93",
    paddingVertical: 3,
  },
  actualCommentBox: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  actualComment: {
    fontSize: 12,
    width: "85%",
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
    width: 35,
    height: 35,
    top: "50%",
    left: "50%",
  },
  playVideoIcon: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  topSectionPic: {
    width: "auto",
    height: 180,
    marginBottom: 10,
    resizeMode: "contain",
  },
  commentStart: {
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});

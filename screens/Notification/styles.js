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
  countNotification: {
    backgroundColor: "#219FD9",
    width: "auto",
    height: 20,
    lineHeight: 20,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 5,
    paddingHorizontal: 3,
    borderRadius: 3,
  },
  countNotificationText: {
    fontWeight: "bold",
    color: "white",
  },
  scrollDesign: {},
  notificationUl: {
    marginBottom: 10,
    marginHorizontal: 20,
  },
  notificationLi: {
    backgroundColor: "#DFF3FC",
    padding: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  notificationLiIcon: {
    width: 45,
    height: 45,
    backgroundColor: "black",
    padding: 5,
    borderRadius: 5,
  },
  notificationReason: {
    paddingHorizontal: 10,
  },
  notificationTitle: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  notificationExplain: {
    fontSize: 12,
  },
  notificationRight: {
    width: 15,
    height: "100%",
    // backgroundColor: "red",
    position: "relative",
  },
  blueDot: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 50,
    backgroundColor: "#1FA0D9",
  },
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bodyTop: {},
  //Profile Top With Profile Picture On middle
  profileTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileBox: {
    width: 150,
    height: 150,
    borderColor: "white",
    backgroundColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    padding: 1,
    position: "relative",
    marginTop: -50,
  },
  profilePic: {
    width: "100%",
    height: "100%",
  },
  cameraIconBox: {
    backgroundColor: "black",
    position: "absolute",
    bottom: -15,
    right: -15,
    borderRadius: 8,
    borderWidth: 2,
    padding: 6,
    borderColor: "white",
    width: 30,
    height: 28,
  },
  cameraIcon: {
    width: "100%",
    height: "100%",
  },

  // Profile Name and City
  profileNameBox: {
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileName: {
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  profleAddTop: {
    display: "flex",
    flexDirection: "row",
  },
  profleAddCity: {
    textTransform: "capitalize",
  },
  profleAddState: {
    textTransform: "uppercase",
    marginLeft: 4,
  },
  //Profile Details Design
  userDetails: {
    backgroundColor: "#DFF3FC",
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  profileList: {
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, .08)",
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userDetailsIcons: {
    width: 22,
    height: 22,
    maxWidth: "100%",
    marginRight: 15,
  },
  userDetailsText: {},

  //Modal CSS

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: '22%'
  },
  modalView: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    paddingHorizontal: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

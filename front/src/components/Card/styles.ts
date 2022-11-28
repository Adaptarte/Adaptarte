import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginLeft: 7,
    marginRight: 7,
    width: 150,
    height: 150,
    marginTop: 7,
    marginBottom: 7,
  },
  containerImg: {
    flex: 1,
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
  img: {
    width: 60,
    height: 49.6,
  },
  checkbox: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  appButtonContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    textAlign: "center",
    elevation: 8,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    height: 30,
    width: "75%",
    justifyContent: "center",
  },
  appButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export { styles };

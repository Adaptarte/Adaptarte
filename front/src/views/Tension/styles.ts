import { StyleSheet } from "react-native";

import { lexendFamily } from "assets/fonts";
import { colors } from "styles";

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 1,
    position: "absolute",
    right: 0,
    width: 104,
  },
  closeButton: {
    borderRadius: 200,
    padding: 4,
    position: "absolute",
    right: 15,
    top: 15,
    zIndex: 1,
  },
  closeImage: {
    height: 28,
    position: "relative",
    resizeMode: "contain",
    tintColor: colors.BLACK,
    width: 28,
    zIndex: 0,
  },
  hour: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    position: "relative",
    zIndex: -1,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  modalTension: {
    alignItems: "center",
    backgroundColor: colors.BLACK_OPACITY,
    flex: 1,
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  numberInputMaximun: {
    color: "black",
    fontFamily: lexendFamily.Regular,
    fontSize: 14,
    height: "100%",
    padding: 1.5,
    position: "absolute",
    right: 5,
  },
  sectionInput: {
    marginBottom: 24,
  },
  sectionSubtitle: {
    fontFamily: lexendFamily.SemiBold,
    fontSize: 13,
    marginBottom: 6,
  },
  sectionTitle: {
    color: colors.GLAUCOUS,
    fontFamily: lexendFamily.Bold,
    fontSize: 20,
    marginBottom: 16,
  },
  selectButton: {
    padding: -5
  },
  selectedHour: {
    width: 75,
  },
  tensionContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 5,
    height: 340,
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: 340,
  },
});

export { styles };

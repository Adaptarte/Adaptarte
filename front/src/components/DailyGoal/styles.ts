import { StyleSheet } from "react-native";

import type { ImgName } from "components/Img/types";
import type { TextVariants } from "components/Text/types";
import { colors } from "styles";
import type { DailyGoalType } from "types/dailyGoals";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.YELLOW,
    borderRadius: 16,
    borderWidth: 1,
    display: "flex",
    elevation: 4,
    flexDirection: "row",
    marginBottom: 20,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  content: {
    flexBasis: 1,
    flexGrow: 1,
    marginHorizontal: 16
  },
  img: {
    borderRadius: 25,
    width: 50
  }
});

const imgs: Record<DailyGoalType, ImgName> = {
  Pill: "pills",
  Record: "diseaseRegister"
};

const textVars: TextVariants<"hour" | "title"> = {
  hour: {
    size: 1
  },
  title: {
    weight: "bold"
  }
};

export { imgs, styles, textVars };

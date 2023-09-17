import { View } from "react-native";

import { Img } from "components/Img";
import { Text } from "components/Text";

import type { TDataDose } from "../types";
import { styles, textVars } from "./styles";

const DataDoseCard = ({ details, img, tip }: TDataDose): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text variant={textVars.tip}>{tip}</Text>
        <Text variant={textVars.details}>{details}</Text>
      </View>
      <Img src={img} style={styles.img} />
    </View>
  );
};

export { DataDoseCard };

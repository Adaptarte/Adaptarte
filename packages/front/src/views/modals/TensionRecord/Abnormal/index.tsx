import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Icon } from "components/Icon";
import { Modal } from "components/Modal";
import { Text } from "components/Text";
import type { IAppParams } from "navigation/App/types";
import { colors } from "styles";

import { styles } from "./styles";
import { t } from "./translations";
import type { TensionAbnormalProps } from "./types";

const TensionAbnormal = ({
  onConfirm,
  setVisible,
  value,
  visible,
}: TensionAbnormalProps): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<IAppParams>>();

  const handleConfirm = useCallback(() => {
    onConfirm?.();
    setVisible?.(false);
    navigation.navigate("Panic");
  }, []);

  return (
    <Modal setVisible={setVisible} title={t().title} visible={visible}>
      <View style={styles.center}>
        <Icon color={colors.GLAUCOUS} name={"exclamation-circle"} size={64} />
        <Text variant={{ color: "GLAUCOUS", size: 4, weight: "bold" }}>
          {value}
        </Text>
      </View>
      <Text style={styles.message}>{t().message}</Text>
      <Button onPress={handleConfirm} variant={{ style: "solid" }}>
        {t().confirm}
      </Button>
    </Modal>
  );
};

export { TensionAbnormal };

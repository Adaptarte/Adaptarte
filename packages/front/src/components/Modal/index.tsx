import React, { useCallback } from "react";
import { Modal as NModal, View } from "react-native";

import { Button } from "components/Button";
import { Icon } from "components/Icon";
import { Text } from "components/Text";
import { colors } from "styles";

import { styles, titleVar } from "./styles";
import type { ModalProps } from "./types";

const Modal = ({
  children,
  setVisible,
  title,
  visible,
}: ModalProps): JSX.Element => {
  const handleClose = useCallback(() => {
    setVisible?.(false);
  }, [setVisible]);

  return (
    <NModal
      animationType={"none"}
      onRequestClose={handleClose}
      transparent
      visible={visible}
    >
      <View style={styles.modal}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text variant={titleVar}>{title}</Text>
            {setVisible === undefined ? null : (
              <Button onPress={handleClose}>
                <Icon color={colors.BLACK} name={"times"} size={20} />
              </Button>
            )}
          </View>
          {children}
        </View>
      </View>
    </NModal>
  );
};

export { Modal };

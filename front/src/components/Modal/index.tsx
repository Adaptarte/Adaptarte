import React, { useCallback } from "react";
import { Image, Modal as NModal, TouchableOpacity, View } from "react-native";

import { imgs } from "assets/imgs";
import { Text } from "components/Text";

import { styles, titleVar } from "./styles";
import type { ModalProps } from "./types";

const Modal = ({
  children,
  setVisible,
  title,
  visible
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
            <TouchableOpacity onPress={handleClose}>
              <Image source={imgs.close} style={styles.closeButtonImage} />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </NModal>
  );
};

export { Modal };

import { useCallback } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Column, Row } from "components/Grid";
import { Modal } from "components/Modal";
import { Text } from "components/Text";

import { styles } from "./styles";
import type { NoticeProps } from "./types";

const Notice = ({
  description,
  onConfirm,
  setVisible,
  visible,
}: NoticeProps): JSX.Element => {
  const handleClose = useCallback(() => {
    setVisible?.(false);
  }, [setVisible, visible]);

  return (
    <Modal setVisible={setVisible} title={"Confirmación"} visible={visible}>
      <Text style={styles.description}>{description}</Text>
      <View>
        <Row columns={2}>
          <Column>
            <Button onPress={handleClose} variant={{ style: "solid" }}>
              {"No"}
            </Button>
          </Column>
          <Column>
            <Button
              onPress={onConfirm}
              variant={{ color: "RED_LIGHT", style: "solid" }}
            >
              {"Si"}
            </Button>
          </Column>
        </Row>
      </View>
    </Modal>
  );
};

export { Notice };

import React, { useCallback, useState } from "react";

import { Button } from "components/Button";
import { CheckBox } from "components/CheckBox";
import { Modal } from "components/Modal";

import { styles } from "./styles";
import type { EditDiseasesProps } from "./types";

const EditDiseases = ({
  diseases: { epoc, hypertension },
  onSave,
  setVisible,
  visible
}: EditDiseasesProps): JSX.Element => {
  const [hasEpoc, setHasEpoc] = useState(epoc);
  const [hasHypertension, setHasHypertension] = useState(hypertension);

  const handleSave = useCallback(() => {
    onSave?.({
      epoc: hasEpoc,
      hypertension: hasHypertension
    });
  }, [hasEpoc, hasHypertension, onSave]);

  return (
    <Modal setVisible={setVisible} title={"Enfermedades"} visible={visible}>
      <CheckBox
        checked={hasHypertension}
        label={"Hipertensión"}
        onChange={setHasHypertension}
        style={styles.checkbox}
      />
      <CheckBox
        checked={hasEpoc}
        label={"Epoc"}
        onChange={setHasEpoc}
        style={styles.checkbox}
      />
      <Button
        disabled={hasEpoc === epoc && hasHypertension === hypertension}
        onPress={handleSave}
        variant={{ style: "solid" }}
      >
        {"Guardar"}
      </Button>
    </Modal>
  );
};

export { EditDiseases };

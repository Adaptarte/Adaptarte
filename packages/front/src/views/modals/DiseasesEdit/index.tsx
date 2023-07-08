import React, { useCallback, useState } from "react";

import { Button } from "components/Button";
import { CheckBox } from "components/CheckBox";
import { Modal } from "components/Modal";

import { styles } from "./styles";
import type { DiseasesEditProps } from "./types";

const DiseasesEdit = ({
  diseases: { diabetesMellitus, epoc, heartFailure, hypertension },
  onSave,
  setVisible,
  visible
}: DiseasesEditProps): JSX.Element => {
  const [hasDiabetesMellitus, setHasDiabetesMellitus] =
    useState(diabetesMellitus);
  const [hasEpoc, setHasEpoc] = useState(epoc);
  const [hasHeartFailure, setHasHeartFailure] = useState(heartFailure);
  const [hasHypertension, setHasHypertension] = useState(hypertension);

  const handleSave = useCallback(() => {
    onSave?.({
      diabetesMellitus: hasDiabetesMellitus,
      epoc: hasEpoc,
      heartFailure: hasHeartFailure,
      hypertension: hasHypertension
    });
  }, [hasDiabetesMellitus, hasEpoc, hasHeartFailure, hasHypertension, onSave]);

  return (
    <Modal setVisible={setVisible} title={"Enfermedades"} visible={visible}>
      <CheckBox
        checked={hasDiabetesMellitus}
        label={"Diabetes Mellitus"}
        onChange={setHasDiabetesMellitus}
        style={styles.checkbox}
      />
      <CheckBox
        checked={hasHypertension}
        label={"Hipertensión"}
        onChange={setHasHypertension}
        style={styles.checkbox}
      />
      <CheckBox
        checked={hasHeartFailure}
        label={"Deficiencia Cardiaca"}
        onChange={setHasHeartFailure}
        style={styles.checkbox}
      />
      <CheckBox
        checked={hasEpoc}
        label={"Epoc"}
        onChange={setHasEpoc}
        style={styles.checkbox}
      />
      <Button
        disabled={
          hasDiabetesMellitus === diabetesMellitus &&
          hasEpoc === epoc &&
          hasHeartFailure === heartFailure &&
          hasHypertension === hypertension
        }
        onPress={handleSave}
        variant={{ style: "solid" }}
      >
        {"Guardar"}
      </Button>
    </Modal>
  );
};

export { DiseasesEdit };

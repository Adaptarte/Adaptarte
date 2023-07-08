import React, { useCallback, useState } from "react";

import { Button } from "components/Button";
import { CheckBox } from "components/CheckBox";
import { Modal } from "components/Modal";

import { styles } from "./styles";
import { t } from "./translations";
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
    <Modal setVisible={setVisible} title={t().title} visible={visible}>
      <CheckBox
        checked={hasDiabetesMellitus}
        label={t().diabetesMellitus}
        onChange={setHasDiabetesMellitus}
        style={styles.checkbox}
      />
      <CheckBox
        checked={hasHypertension}
        label={t().hypertension}
        onChange={setHasHypertension}
        style={styles.checkbox}
      />
      <CheckBox
        checked={hasHeartFailure}
        label={t().heartFailure}
        onChange={setHasHeartFailure}
        style={styles.checkbox}
      />
      <CheckBox
        checked={hasEpoc}
        label={t().epoc}
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
        {t().save}
      </Button>
    </Modal>
  );
};

export { DiseasesEdit };

import React, { useState } from "react";

import { Button } from "components/Button";
import { Modal } from "components/Modal";
import { Switch } from "components/Switch";

import { t } from "./translations";
import type { EditPatientInfoProps } from "./types";

const styles = {
  field: "mb-1",
  header: "h6 mb-1",
};

const EditPatientInfo = ({
  data: { active = false, diseases },
  onClose,
  visible,
}: EditPatientInfoProps): JSX.Element => {
  const [status, setStatus] = useState(active);
  const [diabetesMellitus, setDiabetesMellitus] = useState(
    diseases?.diabetesMellitus ?? false,
  );
  const [epoc, setEpoc] = useState(diseases?.epoc ?? false);
  const [heartFailure, setHeartFailure] = useState(
    diseases?.heartFailure ?? false,
  );
  const [hypertension, setHypertension] = useState(
    diseases?.hypertension ?? false,
  );

  return (
    <Modal onClose={onClose} title={t().title} visible={visible}>
      <Switch
        checked={status}
        className={styles.field}
        label={t().status.label}
        onChange={setStatus}
      />
      <p className={styles.header}>{t().diseases.header}</p>
      <Switch
        checked={diabetesMellitus}
        className={styles.field}
        label={t().diseases.diabetesMellitus}
        onChange={setDiabetesMellitus}
      />
      <Switch
        checked={epoc}
        className={styles.field}
        label={t().diseases.epoc}
        onChange={setEpoc}
      />
      <Switch
        checked={heartFailure}
        className={styles.field}
        label={t().diseases.heartFailure}
        onChange={setHeartFailure}
      />
      <Switch
        checked={hypertension}
        className={styles.field}
        label={t().diseases.hypertension}
        onChange={setHypertension}
      />
      <Button className={"mt-2"}>{t().save}</Button>
    </Modal>
  );
};

export { EditPatientInfo };

import React, { useCallback, useState } from "react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { Modal } from "components/Modal";
import { useDBPatient } from "utils/contexts";

import { t } from "./translations";
import type { AddMedicineRecipeProps } from "./types";

const styles = {
  field: "mb-2",
};

const AddMedicineRecipe = ({
  onClose,
  visible,
}: AddMedicineRecipeProps): JSX.Element => {
  const db = useDBPatient();
  const [medicine, setMedicine] = useState("");
  const [interval, setInterval] = useState("");
  const [details, setDetails] = useState("");

  const handleSave = useCallback(() => {
    db.addDoc("MedicineRecipes", {
      date: new Date(),
      details,
      interval: parseInt(interval),
      medicine,
    });
    onClose(false);
  }, [db, details, interval, medicine]);

  return (
    <Modal onClose={onClose} title={t().title} visible={visible}>
      <Input
        className={styles.field}
        label={t().medicine.label}
        onChange={setMedicine}
        placeholder={t().medicine.placeholder}
        value={medicine}
      />
      <Input
        className={styles.field}
        label={t().interval.label}
        onChange={setInterval}
        placeholder={t().interval.placeholder}
        value={interval}
      />
      <Input
        className={styles.field}
        label={t().details.label}
        onChange={setDetails}
        placeholder={t().details.placeholder}
        value={details}
      />
      <Button
        disabled={medicine.length === 0 || isNaN(parseInt(interval))}
        onClick={handleSave}
      >
        {t().save}
      </Button>
    </Modal>
  );
};

export { AddMedicineRecipe };

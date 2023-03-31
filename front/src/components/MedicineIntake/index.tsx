import { useCallback, useEffect, useState } from "react";

import { Button } from "components/Button";
import { DatePicker } from "components/DatePicker";
import { Modal } from "components/Modal";
import { Text } from "components/Text";
import type { IMedicineIntake } from "types/medicine";
import { dbCreate, useRealm } from "utils/db/realm";

import type { MedicineIntakeProps } from "./types";

const MedicineIntake = ({
  recipe,
  setVisible,
  visible
}: MedicineIntakeProps): JSX.Element => {
  const realm = useRealm();
  const [date, setDate] = useState(new Date());

  const handleSave = useCallback(() => {
    const data: IMedicineIntake = {
      date,
      recipe: recipe.id
    };

    realm.write(() => {
      dbCreate(realm, "MedicineIntake", data);
    });
    setVisible?.(false);
  }, [date, recipe.id, realm, setVisible]);

  useEffect(() => {
    setDate(new Date());
  }, [visible]);

  return (
    <Modal
      setVisible={setVisible}
      title={"Registro de medicina"}
      visible={visible}
    >
      <Text>{`Medicina: ${recipe.medicine}`}</Text>
      <DatePicker
        date={date}
        label={"Hora"}
        mode={"time"}
        onDateChange={setDate}
      />
      <Button
        onPress={handleSave}
        variant={{ color: "GLAUCOUS", style: "solid" }}
      >
        {"Registrar"}
      </Button>
    </Modal>
  );
};

export { MedicineIntake };

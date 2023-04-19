import { useCallback, useEffect, useState } from "react";

import { Button } from "components/Button";
import { DatePicker } from "components/DatePicker";
import { Modal } from "components/Modal";
import { Text } from "components/Text";
import type { IMedicineIntake } from "types/medicine";
import { useUser } from "utils/auth";
import { addUserData } from "utils/db/firebase";
import { dbCreate, useRealm } from "utils/db/realm";
import { cancelMedicineNotification } from "utils/notifications";

import type { MedicineIntakeProps } from "./types";

const MedicineIntake = ({
  recipe,
  setVisible,
  visible
}: MedicineIntakeProps): JSX.Element => {
  const realm = useRealm();
  const [date, setDate] = useState(new Date());
  const user = useUser();

  const handleSave = useCallback(() => {
    const data: IMedicineIntake = {
      date,
      recipe: recipe.id
    };

    realm.write(() => {
      dbCreate(realm, "MedicineIntake", data);
    });
    addUserData(user.uid, "MedicineIntake", data).catch(console.error);
    cancelMedicineNotification(recipe.id);
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
        maxDate={new Date()}
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

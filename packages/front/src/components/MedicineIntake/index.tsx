import { useCallback, useEffect, useState } from "react";

import { Button } from "components/Button";
import { DatePicker } from "components/DatePicker";
import { Modal } from "components/Modal";
import { Text } from "components/Text";

import type { MedicineIntakeProps } from "./types";

const MedicineIntake = ({
  onSave,
  recipe,
  setVisible,
  visible
}: MedicineIntakeProps): JSX.Element => {
  const [date, setDate] = useState(new Date());

  const handleSave = useCallback(() => {
    onSave({
      date,
      recipe: recipe.id
    });

    setVisible?.(false);
  }, [date, recipe.id, setVisible]);

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

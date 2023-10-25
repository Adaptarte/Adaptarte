import { useCallback, useEffect, useState } from "react";

import { Button } from "components/Button";
import { DatePicker } from "components/DatePicker";
import { Modal } from "components/Modal";
import { Text } from "components/Text";
import { toast } from "utils/toast/toast";

import { t } from "./translations";
import type { MedicineIntakeProps } from "./types";

const MedicineIntakeRecord = ({
  onSave,
  recipe: { data, id },
  setVisible,
  visible,
}: MedicineIntakeProps): JSX.Element => {
  const [date, setDate] = useState(new Date());

  const handleSave = useCallback(() => {
    onSave({
      date,
      recipe: id,
    });
    toast("Medicamento registrado correctamente", "success");
    setVisible?.(false);
  }, [date, id, setVisible]);

  useEffect(() => {
    setDate(new Date());
  }, [visible]);

  return (
    <Modal setVisible={setVisible} title={t().title} visible={visible}>
      <Text>{`${t().medicine}: ${data.medicine}`}</Text>
      <DatePicker
        date={date}
        label={t().date}
        maxDate={new Date()}
        onDateChange={setDate}
      />
      <Button
        onPress={handleSave}
        variant={{ color: "GLAUCOUS", style: "solid" }}
      >
        {t().save}
      </Button>
    </Modal>
  );
};

export { MedicineIntakeRecord };

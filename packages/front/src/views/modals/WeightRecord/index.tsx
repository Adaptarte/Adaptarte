import React, { useCallback, useEffect, useState } from "react";

import { Button } from "components/Button";
import { DatePicker } from "components/DatePicker";
import { Input } from "components/Input";
import { Modal } from "components/Modal";
import { noNaN } from "utils/form/fields";

import { t } from "./translations";
import type { WeightRecordProps } from "./types";

const WeightRecord = ({
  onSave,
  setVisible,
  visible,
}: WeightRecordProps): JSX.Element => {
  const [date, setDate] = useState(new Date());
  const [weight, setWeight] = useState("");

  const handleSave = useCallback(() => {
    onSave?.({
      date,
      kg: parseFloat(weight),
    });
    setVisible?.(false);
  }, [date, onSave, setVisible, weight]);

  useEffect(() => {
    setDate(new Date());
  }, [visible]);

  return (
    <Modal setVisible={setVisible} title={t().title} visible={visible}>
      <Input
        label={t().weight.label}
        onChange={setWeight}
        placeholder={t().weight.placeholder}
        type={"numeric"}
        value={weight}
      />
      <DatePicker
        date={date}
        label={t().date}
        maxDate={new Date()}
        onDateChange={setDate}
      />
      <Button
        disabled={noNaN(weight)}
        onPress={handleSave}
        variant={{ style: "solid" }}
      >
        {t().save}
      </Button>
    </Modal>
  );
};

export { WeightRecord };

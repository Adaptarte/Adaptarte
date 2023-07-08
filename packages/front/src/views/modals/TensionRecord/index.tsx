import React, { useCallback, useEffect, useState } from "react";

import { Button } from "components/Button";
import { DatePicker } from "components/DatePicker";
import { Input } from "components/Input";
import { Modal } from "components/Modal";

import { t } from "./translations";
import type { TensionRecordProps } from "./types";

const TensionRecord = ({
  onSave,
  setVisible,
  visible
}: TensionRecordProps): JSX.Element => {
  const [diastolic, setDiastolic] = useState("");
  const [systolic, setSystolic] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSave = useCallback(() => {
    onSave({
      date,
      diastolic: parseInt(diastolic),
      systolic: parseInt(systolic)
    });
    setVisible?.(false);
  }, [date, diastolic, onSave, setVisible, systolic]);

  useEffect(() => {
    setDate(new Date());
  }, [visible]);

  return (
    <Modal setVisible={setVisible} title={t().title} visible={visible}>
      <Input
        label={t().systolic.label}
        onChange={setSystolic}
        placeholder={t().systolic.placeholder}
        type={"numeric"}
        value={systolic}
      />
      <Input
        label={t().diastolic.label}
        onChange={setDiastolic}
        placeholder={t().diastolic.placeholder}
        type={"numeric"}
        value={diastolic}
      />
      <DatePicker
        date={date}
        label={t().date}
        maxDate={new Date()}
        onDateChange={setDate}
      />
      <Button
        disabled={isNaN(parseFloat(diastolic)) || isNaN(parseFloat(systolic))}
        onPress={handleSave}
        variant={{ style: "solid" }}
      >
        {t().save}
      </Button>
    </Modal>
  );
};

export { TensionRecord };

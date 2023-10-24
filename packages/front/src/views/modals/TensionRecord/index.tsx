import React, { useCallback, useEffect, useReducer, useState } from "react";

import { Button } from "components/Button";
import { DatePicker } from "components/DatePicker";
import { Input } from "components/Input";
import { Modal } from "components/Modal";
import { noNaN } from "utils/form/fields";
import { toast } from "utils/toast/toast";

import { TensionAbnormal } from "./Abnormal";
import { t } from "./translations";
import type { TensionRecordProps } from "./types";

const isTensionAbnormal = (diastolic: number, systolic: number): boolean => {
  return diastolic > 80 || systolic > 120 || diastolic < 60 || systolic < 90;
};

const TensionRecord = ({
  onSave,
  setVisible,
  visible,
}: TensionRecordProps): JSX.Element => {
  const [diastolic, setDiastolic] = useState("");
  const [systolic, setSystolic] = useState("");
  const [date, setDate] = useState(new Date());
  const [showAlert, toggleShowAlert] = useReducer((val) => !val, false);

  const validateTension = useCallback(() => {
    if (isTensionAbnormal(parseInt(diastolic), parseInt(systolic))) {
      toggleShowAlert();
    } else {
      handleSave();
    }
  }, [diastolic, systolic]);

  const handleSave = useCallback(() => {
    onSave({
      date,
      diastolic: parseInt(diastolic),
      systolic: parseInt(systolic),
    });
    toast("Tensión registrada correctamente", "success");
    setVisible?.(false);
  }, [date, diastolic, onSave, setVisible, systolic]);

  useEffect(() => {
    setDate(new Date());
  }, [visible]);

  return showAlert ? (
    <TensionAbnormal
      onConfirm={handleSave}
      setVisible={toggleShowAlert}
      value={`${systolic}/${diastolic}`}
      visible={visible}
    />
  ) : (
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
        disabled={noNaN(diastolic, systolic)}
        onPress={validateTension}
        variant={{ style: "solid" }}
      >
        {t().save}
      </Button>
    </Modal>
  );
};

export { TensionRecord };

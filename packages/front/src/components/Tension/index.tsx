import React, { useCallback, useEffect, useState } from "react";

import { Button } from "components/Button";
import { DatePicker } from "components/DatePicker";
import { Input } from "components/Input";
import { Modal } from "components/Modal";

import type { TensionProps } from "./types";

const Tension = ({
  onSave,
  setVisible,
  visible
}: TensionProps): JSX.Element => {
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
    <Modal
      setVisible={setVisible}
      title={"Registro de Tensión"}
      visible={visible}
    >
      <Input
        label={"Presión diastólica"}
        onChange={setDiastolic}
        placeholder={"80"}
        type={"numeric"}
        value={diastolic}
      />
      <Input
        label={"Presión sistólica"}
        onChange={setSystolic}
        placeholder={"120"}
        type={"numeric"}
        value={systolic}
      />
      <DatePicker
        date={date}
        label={"Hora"}
        maxDate={new Date()}
        onDateChange={setDate}
      />
      <Button
        disabled={diastolic.length === 0 || systolic.length === 0}
        onPress={handleSave}
        variant={{ color: "GLAUCOUS", style: "solid" }}
      >
        {"Registrar"}
      </Button>
    </Modal>
  );
};

export { Tension };

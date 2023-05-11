import React, { useCallback, useEffect, useState } from "react";

import { Button } from "components/Button";
import { DatePicker } from "components/DatePicker";
import { Input } from "components/Input";
import { Modal } from "components/Modal";
import { registerMedicineGA } from "utils/analytics/analytics";
import { useUser } from "utils/auth";
import { addUserData } from "utils/db/firebase";
import { dbCreate, useRealm } from "utils/db/realm";
import type { DBTension } from "utils/db/types";

import type { TensionProps } from "./types";

const Tension = ({ setVisible, visible }: TensionProps): JSX.Element => {
  const [diastolic, setDiastolic] = useState("");
  const [systolic, setSystolic] = useState("");
  const [date, setDate] = useState(new Date());
  const realm = useRealm();
  const user = useUser();

  const handleSave = useCallback(() => {
    registerMedicineGA().catch(console.error);
    const data: DBTension = {
      date,
      diastolic: parseInt(diastolic),
      systolic: parseInt(systolic)
    };

    realm.write(() => {
      dbCreate(realm, "Tension", data);
    });
    addUserData(user.uid, "Tension", data).catch(console.error);
    setVisible?.(false);
  }, [diastolic, setVisible, systolic]);

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
        type={"numeric"}
        value={diastolic}
      />
      <Input
        label={"Presión sistólica"}
        onChange={setSystolic}
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

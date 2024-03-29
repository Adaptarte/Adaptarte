import React, { useCallback, useState } from "react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { Modal } from "components/Modal";
import { useDB } from "utils/db";
import { noEmpty } from "utils/form/fields";
import { toast } from "utils/toast/toast";

import { t } from "./translations";
import type { PatientInfoEditProps } from "./types";

const PatientInfoEdit = ({
  data,
  setVisible,
  visible,
}: PatientInfoEditProps): JSX.Element => {
  const [id, setId] = useState(data?.id ?? "");
  const [name, setName] = useState(data?.name ?? "");
  const [phone, setPhone] = useState(data?.phone ?? "");

  const db = useDB();
  const user = db.getUser();

  const handleSave = useCallback(() => {
    user === undefined
      ? db.addUser({
          active: false,
          basicInfo: { id, name, phone },
          diseases: {
            diabetesMellitus: false,
            epoc: false,
            heartFailure: false,
            hypertension: false,
          },
          score: 0,
        })
      : db.updateUser({
          basicInfo: { id, name, phone },
        });
    toast("Información actualizada correctamente", "success");
    setVisible?.(false);
  }, [db, id, name, phone, setVisible, user]);

  return (
    <Modal setVisible={setVisible} title={t().title} visible={visible}>
      <Input
        label={t().id.label}
        onChange={setId}
        placeholder={t().id.placeholder}
        type={"numeric"}
        value={id}
      />
      <Input
        label={t().name.label}
        onChange={setName}
        placeholder={t().name.placeholder}
        value={name}
      />
      <Input
        label={t().phone.label}
        maxLength={10}
        onChange={setPhone}
        placeholder={t().phone.placeholder}
        type={"phone-pad"}
        value={phone}
      />
      <Button
        disabled={
          id === data?.id &&
          name === data?.name &&
          !noEmpty(id, name) &&
          phone === data?.phone
        }
        onPress={handleSave}
        style={{ marginTop: 8 }}
        variant={{ style: "solid" }}
      >
        {t().save}
      </Button>
    </Modal>
  );
};

export { PatientInfoEdit };

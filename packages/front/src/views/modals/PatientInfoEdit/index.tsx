import React, { useCallback, useState } from "react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { Modal } from "components/Modal";
import { useDB } from "utils/db";
import { noEmpty } from "utils/form/fields";

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

  const handleSave = useCallback(() => {
    db.updateUser({
      basicInfo: { id, name, phone },
    });
    setVisible?.(false);
  }, [db, id, name, phone, setVisible]);

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
        onChange={setPhone}
        placeholder={t().phone.placeholder}
        type={"phone-pad"}
        value={phone}
      />
      <Button
        disabled={
          id === data?.id ||
          name === data?.name ||
          noEmpty(id, name) ||
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

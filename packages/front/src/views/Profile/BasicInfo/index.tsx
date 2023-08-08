import React, { useCallback, useState } from "react";

import { EditableText } from "components/EditableText";
import { Column, Row } from "components/Grid";
import { Text } from "components/Text";

import { styles, textVars } from "./styles";
import { t } from "./translations";
import type { BasicInfoProps } from "./types";

const BasicInfo = ({ data, onChange }: BasicInfoProps): JSX.Element => {
  const [id, setId] = useState(data?.id ?? "");
  const [phone, setPhone] = useState(data?.phone ?? "");

  const handleChangeId = useCallback(
    (id: string) => {
      setId(id);
      onChange?.({ id, phone });
    },
    [onChange, phone, setId],
  );
  const handleChangePhone = useCallback(
    (phone: string) => {
      setPhone(phone);
      onChange?.({ id, phone });
    },
    [id, onChange, setPhone],
  );

  return (
    <>
      <Text style={styles.title} variant={textVars.title}>
        {t().title}
      </Text>
      <Row columns={3}>
        <Column size={1}>
          <Text variant={textVars.info}>{t().id}</Text>
        </Column>
        <Column size={2}>
          <EditableText
            key={data?.id}
            onChange={handleChangeId}
            placeholder={t().id}
            type={"numeric"}
            value={data?.id}
          />
        </Column>
        <Column size={1}>
          <Text variant={textVars.info}>{t().phone}</Text>
        </Column>
        <Column size={2}>
          <EditableText
            key={data?.phone}
            onChange={handleChangePhone}
            placeholder={t().phone}
            type={"phone-pad"}
            value={data?.phone}
          />
        </Column>
      </Row>
    </>
  );
};

export { BasicInfo };

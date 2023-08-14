import React, { useReducer } from "react";

import { Button } from "components/Button";
import { Column, Row } from "components/Grid";
import { Text } from "components/Text";
import { PatientInfoEdit } from "views/modals/PatientInfoEdit";

import { styles, textVars } from "./styles";
import { t } from "./translations";
import type { BasicInfoProps } from "./types";

const BasicInfo = ({ data }: BasicInfoProps): JSX.Element => {
  const [edit, toggleEdit] = useReducer((val) => !val, false);

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
          <Text style={styles.value}>{data?.id}</Text>
        </Column>
        <Column size={1}>
          <Text variant={textVars.info}>{t().name}</Text>
        </Column>
        <Column size={2}>
          <Text style={styles.value}>{data?.name}</Text>
        </Column>
        <Column size={1}>
          <Text variant={textVars.info}>{t().phone}</Text>
        </Column>
        <Column size={2}>
          <Text style={styles.value}>{data?.phone}</Text>
        </Column>
      </Row>
      <Button
        onPress={toggleEdit}
        style={{ marginTop: 16 }}
        variant={{ style: "solid" }}
      >
        {t().edit}
      </Button>
      <PatientInfoEdit
        data={data}
        key={JSON.stringify(data)}
        setVisible={toggleEdit}
        visible={edit}
      />
    </>
  );
};

export { BasicInfo };

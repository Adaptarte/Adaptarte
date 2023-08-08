import { useReducer } from "react";

import { Button } from "components/Button";
import { Row } from "components/Grid";
import { Tag } from "components/Tag";
import { allDiseases } from "utils/db/types";
import { fillDiseases } from "utils/patient";
import { DiseasesEdit } from "views/modals/DiseasesEdit";

import { styles } from "./styles";
import { t } from "./translations";
import type { DiseasesProps } from "./types";

const Diseases = ({ diseases, onChange }: DiseasesProps): JSX.Element => {
  const [editing, toggleEditing] = useReducer((val) => !val, false);

  const fullDiseases = fillDiseases(diseases);

  return (
    <>
      <Row>
        {allDiseases.map((el) =>
          fullDiseases[el] ? (
            <Tag bg={"YELLOW_LIGHT"} key={el}>
              {t()[el]}
            </Tag>
          ) : null,
        )}
      </Row>
      <Button
        onPress={toggleEditing}
        style={styles.editBtn}
        variant={{ style: "outline" }}
      >
        {"Editar enfermedades"}
      </Button>
      <DiseasesEdit
        diseases={fullDiseases}
        onSave={onChange}
        setVisible={toggleEditing}
        visible={editing}
      />
    </>
  );
};

export { Diseases };

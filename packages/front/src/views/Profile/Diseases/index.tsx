import { useReducer } from "react";

import { Button } from "components/Button";
import { Row } from "components/Grid";
import { Tag } from "components/Tag";
import type { TDiseases } from "utils/db/types";
import { allDiseases } from "utils/db/types";

import { EditDiseases } from "../EditDiseases";
import { styles } from "./styles";
import { t } from "./translations";
import type { DiseasesProps } from "./types";

const defaultDiseases: TDiseases = {
  epoc: false,
  hypertension: false
};

const Diseases = ({ diseases, onChange }: DiseasesProps): JSX.Element => {
  const [editing, toggleEditing] = useReducer((val) => !val, false);

  const fullDiseases = Object.assign({}, defaultDiseases, diseases);

  return (
    <>
      <Row>
        {allDiseases.map((el) =>
          fullDiseases[el] ? (
            <Tag bg={"YELLOW"} key={el}>
              {t()[el]}
            </Tag>
          ) : null
        )}
      </Row>
      <Button
        onPress={toggleEditing}
        style={styles.editBtn}
        variant={{ style: "outline" }}
      >
        {"Editar enfermedades"}
      </Button>
      <EditDiseases
        diseases={fullDiseases}
        onSave={onChange}
        setVisible={toggleEditing}
        visible={editing}
      />
    </>
  );
};

export { Diseases };

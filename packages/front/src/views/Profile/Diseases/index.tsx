import { Row } from "components/Grid";
import { Tag } from "components/Tag";
import { allDiseases } from "utils/db/types";
import { fillDiseases } from "utils/patient";

import { t } from "./translations";
import type { DiseasesProps } from "./types";

const Diseases = ({ diseases }: DiseasesProps): JSX.Element => {
  const fullDiseases = fillDiseases(diseases);

  return (
    <Row>
      {allDiseases.map((el) =>
        fullDiseases[el] ? (
          <Tag bg={"YELLOW_LIGHT"} key={el}>
            {t()[el]}
          </Tag>
        ) : null,
      )}
    </Row>
  );
};

export { Diseases };

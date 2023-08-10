import React, { useCallback, useEffect, useState } from "react";

import { Select } from "components/Select";
import type { SelectOption } from "components/Select/types";
import type { DBDoc, DBUser } from "utils/db/types";
import { getCol } from "utils/firebase/firestore";

import type { PatientSearchProps } from "./types";

const PatientSearch = ({ onFind }: PatientSearchProps): JSX.Element => {
  const [patient, setPatient] = useState<string>();
  const [patients, setPatients] = useState<DBDoc<DBUser>[]>([]);

  useEffect(() => {
    getCol<DBUser>("Users")
      .then((res) => {
        setPatients(
          res.filter(
            (user) =>
              user.data?.basicInfo?.id !== undefined ||
              user.data?.basicInfo?.name !== undefined,
          ),
        );
      })
      .catch(console.error);
  }, []);

  const handleSelect = useCallback(
    (option?: SelectOption) => {
      setPatient(option?.id);
      onFind(option?.id);
    },
    [onFind],
  );

  const options = patients.map(({ data }) => {
    const id = data?.basicInfo?.id ?? "-";
    const name = data?.basicInfo?.name ?? "-";

    return {
      id,
      name: `CC: ${id} Nombre: ${name}`,
    };
  });

  return (
    <Select
      className={"mb-2"}
      onChange={handleSelect}
      options={options}
      value={patient}
    />
  );
};

export { PatientSearch };

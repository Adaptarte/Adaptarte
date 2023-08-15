import React, { useReducer } from "react";

import { Button } from "components/Button";
import { useDBPatient } from "utils/contexts";

import { AddMedicineRecipe } from "./Add";
import { MedicineRecipe } from "./Card";
import { t } from "./translations";

const MedicineRecipes = (): JSX.Element => {
  const [addMedicine, toggleAddMedicine] = useReducer((val) => !val, false);
  const db = useDBPatient();
  const recipes = db.getDocs("MedicineRecipes");

  return (
    <div>
      <p className={"h4 mb-2 mt-4"}>{t().title}</p>
      <Button onClick={toggleAddMedicine}>{t().add}</Button>
      <div className={"row"}>
        {recipes.map(({ data, id }) => (
          <MedicineRecipe data={data} id={id} key={id} />
        ))}
        <AddMedicineRecipe onClose={toggleAddMedicine} visible={addMedicine} />
      </div>
    </div>
  );
};

export { MedicineRecipes };

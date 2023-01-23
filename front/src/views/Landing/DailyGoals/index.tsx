import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { DailyGoals as DailyGoal } from "components/DailyGoals";
import type { IDailyGoal, IDailyGoalType } from "types/dailyGoals";
import { minuteToHour } from "utils/db/formatters";
import { getDB, read } from "utils/db/service";

const DailyGoals: FC = (): JSX.Element => {
  const [dailyGoals, setDailyGoals] = useState<IDailyGoal[]>([]);
  const [types, setTypes] = useState<IDailyGoalType[]>([]);
  const db = getDB();

  useEffect(() => {
    read<IDailyGoal>(db, "Select * from DailyGoals")
      .then((data) => {
        setDailyGoals(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setDailyGoals]);

  useEffect(() => {
    read<IDailyGoalType>(db, "Select * from DailyGoalTypes")
      .then((data) => {
        setTypes(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setTypes]);

  return(
    <View>
      {dailyGoals.map(({ done, id, time, title, type }) => (
        <DailyGoal 
          done={done}
          hour={minuteToHour(time)}
          key={id}
          title={title}
          type={types.filter((types) => types.id === parseInt(type))
            .map((ty) => ty.name)[0]}
        />
      ))}
      {/* <DailyGoal
        hour={"8:00 am - 6:00 pm"}
        img={imgs.pills}
        title={"Toma tu pastilla de la tensión"}
      />
      <DailyGoal 
        activeTensionRegister={true}
        hour={"12:00 pm"} 
        title={"Registra aquí tu tensión"} 
      />
      <DailyGoal 
        activeTensionRegister={true}
        hour={"6:00 pm"} 
        title={"¡Registro de tensión completado!"} 
      /> */}
    </View>
  );
};

export { DailyGoals };

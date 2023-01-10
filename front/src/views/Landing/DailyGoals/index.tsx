import type { FC } from "react";
import React from "react";
import { View } from "react-native";

import { imgs } from "assets/imgs";
import { DailyGoals as DailyGoal } from "components/DailyGoals";

const DailyGoals: FC = (): JSX.Element => {
  return(
    <View>
      <DailyGoal
        hour={"8:00 am - 6:00 pm"}
        img={imgs.pills}
        title={"Toma tu pastilla de la tensión"}
      />
      <DailyGoal 
        activeTensionRegister={true}
        hour={"12:00 pm"} 
        title={"Registra aquí tu tensión"} />
      <DailyGoal 
        activeTensionRegister={true}
        hour={"6:00 pm"} 
        title={"¡Registro de tensión completado!"} 
      />
    </View>
  );
};

export { DailyGoals };

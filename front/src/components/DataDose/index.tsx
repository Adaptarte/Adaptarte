import React from "react";
import {
  Image,
  Text,
  View,
} from "react-native";

import { dataDose } from "assets/imgs";

import { stylesData } from "./styles";
import type { IDataProps } from "./types";

const DataDose = ({ title, hour }: IDataProps): JSX.Element => {
  return (
    <View style={[stylesData.background]}>
      <View style={[stylesData.container]}>
        <View style={[stylesData.content]}>
          <Text style={[stylesData.title]}>{title}</Text>
          <Text style={[stylesData.hour]}>{hour}</Text>
        </View>
      </View>
      <Image 
        source={dataDose} 
        style={[stylesData.Img]} 
      />
    </View>
  );
};

export { DataDose };

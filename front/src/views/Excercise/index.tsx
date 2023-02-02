import type { FC } from "react";
import React from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

import { imgs } from "assets/imgs";
import { Carousel } from "components/Carousel";
import { data } from "components/Carousel/CarouselCard/data";
import type { TAppViewProps } from "navigation/App/types";

import { styles } from "./styles";
import { t } from "./translations";

const Excercise: FC<TAppViewProps<"Excercise">> = ({
  navigation: { canGoBack, goBack }
}: TAppViewProps<"Excercise">): JSX.Element => {
  return (
    <GestureRecognizer onSwipeDown={goBack} style={{ flex: 1 }}>
      <Modal
        animationType={"slide"}
        onRequestClose={goBack}
        transparent={true}
        visible={true}
      >
        <View style={styles.modalExercise}>
          <View style={styles.excercise}>
            {canGoBack() ? (
              <TouchableOpacity onPress={goBack} style={styles.closeButton}>
                <Image source={imgs.close} style={styles.closeImage} />
              </TouchableOpacity>
            ) : undefined}
            <Text style={styles.excerciseTitle}>{t().title}</Text>
            <Text style={styles.excerciseText}>{t().information}</Text>
            <Text style={styles.excerciseText}>{t().note}</Text>
            <Carousel data={data}></Carousel>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

export { Excercise };

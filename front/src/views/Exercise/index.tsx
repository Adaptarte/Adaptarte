import type { FC } from "react";
import React from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

import { imgs } from "assets/imgs";
import { Carousel } from "components/Carousel";
import { data } from "components/Carousel/CarouselCard/data";
import { Text } from "components/Text";
import type { TAppViewProps } from "navigation/App/types";

import { styles, textVars } from "./styles";
import { t } from "./translations";

const Exercise: FC<TAppViewProps<"Exercise">> = ({
  navigation: { canGoBack, goBack }
}: TAppViewProps<"Exercise">): JSX.Element => {
  return (
    <GestureRecognizer onSwipeDown={goBack} style={{ flex: 1 }}>
      <Modal
        animationType={"slide"}
        onRequestClose={goBack}
        transparent
        visible
      >
        <View style={styles.modalExercise}>
          <View style={styles.excercise}>
            {canGoBack() ? (
              <TouchableOpacity onPress={goBack} style={styles.closeButton}>
                <Image source={imgs.close} style={styles.closeImage} />
              </TouchableOpacity>
            ) : undefined}
            <Text style={styles.excerciseTitle} variant={textVars.title}>
              {t().title}
            </Text>
            <Text style={styles.excerciseText} variant={textVars.details}>
              {t().information}
            </Text>
            <Text style={styles.excerciseText} variant={textVars.details}>
              {t().note}
            </Text>
            <Carousel data={data}></Carousel>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

export { Exercise };
import type { FC } from "react";
import React from "react";
import { 
  Image, 
  Modal, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from "react-native";

import { imgs } from "assets/imgs";
import { Button } from "components/Button";

import { styles } from "./styles";
import type { ITensionProps } from "./types";

const Tension: FC<ITensionProps> = ({
  visible = false,
  setVisible,
}): JSX.Element => {
  return (
    <Modal
      animationType={"none"}
      onRequestClose={setVisible}
      transparent={true}
      visible={visible}
    >
      <View style={styles.modalTension}>
        <View style={styles.tensionContainer}>
          <TouchableOpacity 
            onPress={ setVisible } 
            style={styles.closeButton}
          >
            <Image source={imgs.close} style={styles.closeImage} />
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>{"Registro de Tensión"}</Text>
          <View style={styles.sectionInput}>
            <Text style={styles.sectionSubtitle}>{"Presión diastólica"}</Text>
            <View style={styles.numberInputContainer}>
              <TextInput 
                keyboardType={"numeric"}
                maxLength={2}
                style={styles.numberInput}
              />
              <Text style={styles.numberInputMaximun}>{"/80"}</Text>
            </View>
          </View>
          <View style={styles.sectionInput}>
            <Text style={styles.sectionSubtitle}>{"Presión sistólica"}</Text>
            <View style={styles.numberInputContainer}>
              <TextInput 
                keyboardType={"numeric"}
                maxLength={3}
                style={styles.numberInput}
              />
              <Text style={styles.numberInputMaximun}>{"/120"}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionSubtitle}>{"Hora actual"}</Text>
          </View>
          <View>
            <Button 
              color={"BLUE_PURPLE"}
              style={styles.buttonContainer}
            >
              {"Registrar"}
            </Button>
          </View>
        </View>
      </View>

    </Modal>
  );
};

export { Tension };

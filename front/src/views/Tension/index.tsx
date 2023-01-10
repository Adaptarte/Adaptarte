import { FC, useState } from "react";
import React from "react";
import { 
  Image, 
  Modal, 
  Switch, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from "react-native";

import { imgs } from "assets/imgs";
import { Button } from "components/Button";

import { styles } from "./styles";
import type { ITensionProps } from "./types";
import DatePicker from 'react-native-date-picker';
import { colors } from "styles";

const Tension: FC<ITensionProps> = ({
  visible = false,
  setVisible,
}): JSX.Element => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const styleSwitchContainer = isEnabled ? { 
    borderColor: colors.BLUE
  } : {
    borderColor: colors.GREY
  };

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
          <View style={styles.hour}>
            <Text style={styles.sectionSubtitle}>{"Hora actual"}</Text>
            <View style={[styles.switchContainer, styleSwitchContainer]}>
              <Switch 
                trackColor={{ 
                  false: colors.TRANSPARENT, 
                  true: colors.TRANSPARENT 
                }}
                thumbColor={isEnabled ? "#1F4BFF" : "#5A5A5A"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <View style={styles.selectedHour}>
            <Button 
            variant="outline" 
            onPress={() => setOpen(true)} 
            style={styles.selectButton}
            >
              {date.toLocaleString("en-US", { 
                hour: 'numeric', 
                minute: 'numeric', 
                hour12: true 
              })}
            </Button>
            <DatePicker
              modal
              open={open}
              date={date}
              mode={"time"}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                console.log(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
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

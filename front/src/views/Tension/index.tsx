import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-date-picker";

import { imgs } from "assets/imgs";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Switch } from "components/Switch";
import { Text } from "components/Text";

import { styles, textVars } from "./styles";
import type { ITensionProps } from "./types";

const Tension: FC<ITensionProps> = ({
  completeRegister,
  visible = false,
  setVisible
}): JSX.Element => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [diastolicP, setDiastolicP] = useState("");
  const [systolicP, setSystolicP] = useState("");

  useEffect(() => {
    updateCurrentTime();
  }, []);

  const updateCurrentTime = (): void => {
    const options: Intl.DateTimeFormatOptions = {
      hour12: false,
      timeZone: "America/Bogota"
    };

    const CT = new Date().toLocaleTimeString("en-US", options);
    const timeCT = CT.split(":")
      .map((a) => a.split(" "))
      .flat();
    date.setHours(parseInt(timeCT[0]));
    date.setMinutes(parseInt(timeCT[1]));
  };

  const toggleSwitch = (): void => {
    setIsEnabled((previousState) => !previousState);
    !isEnabled ? updateCurrentTime() : null;
  };

  const openDatePicker = (): void => {
    !isEnabled ? setOpen(true) : null;
  };

  const checkInputs = (): void => {
    if (diastolicP.length > 0 && systolicP.length > 0) {
      setVisible();
      completeRegister();
    }
  };

  return (
    <Modal
      animationType={"none"}
      onRequestClose={setVisible}
      transparent
      visible={visible}
    >
      <View style={styles.modalTension}>
        <View style={styles.tensionContainer}>
          <TouchableOpacity onPress={setVisible} style={styles.closeButton}>
            <Image source={imgs.close} style={styles.closeImage} />
          </TouchableOpacity>
          <Text style={styles.sectionTitle} variant={textVars.title}>
            {"Registro de Tensión"}
          </Text>
          <View style={styles.sectionInput}>
            <Text style={styles.sectionSubtitle}>{"Presión diastólica"}</Text>
            <View style={styles.inputContainer}>
              <Input
                keyboardType={"numeric"}
                onChange={(value: React.SetStateAction<string>): void => {
                  setDiastolicP(value);
                }}
                value={diastolicP}
              />
              <Text style={styles.numberInputMaximun} variant={textVars.input}>
                {"/80"}
              </Text>
            </View>
          </View>
          <View style={styles.sectionInput}>
            <Text style={styles.sectionSubtitle}>{"Presión sistólica"}</Text>
            <View style={styles.inputContainer}>
              <Input
                keyboardType={"numeric"}
                maxLength={3}
                onChange={(value: React.SetStateAction<string>): void => {
                  setSystolicP(value);
                }}
                value={systolicP}
              />
              <Text style={styles.numberInputMaximun} variant={textVars.input}>
                {"/120"}
              </Text>
            </View>
          </View>
          <View style={styles.hour}>
            <Text style={styles.sectionSubtitle}>{"Hora actual"}</Text>
            <Switch isEnabled={isEnabled} onChange={toggleSwitch} />
          </View>
          <View style={styles.selectedHour}>
            <Button
              onPress={openDatePicker}
              style={styles.selectButton}
              variant={"outline"}
            >
              {date.toLocaleString("en-US", {
                hour: "numeric",
                hour12: true,
                minute: "numeric"
              })}
            </Button>
            <DatePicker
              date={date}
              modal
              mode={"time"}
              onCancel={(): void => {
                setOpen(false);
              }}
              onConfirm={(date: Date): void => {
                setOpen(false);
                setDate(date);
              }}
              open={open}
            />
          </View>
          <View>
            <Button
              color={"BLUE_PURPLE"}
              onPress={checkInputs}
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

import React, { useCallback, useState } from "react";
import { Linking, TouchableOpacity, View } from "react-native";

import { Button } from "components/Button";
import { EditableText } from "components/EditableText";
import { Icon } from "components/Icon";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import { useUser } from "utils/auth";
import { addUserData, useDbUserData } from "utils/db/firebase";

import { styles, textVars } from "./styles";
import { t } from "./translations";

const Panic = (): JSX.Element => {
  const user = useUser();
  const data = t();

  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const directory = useDbUserData(user.uid, "EmergencyContacts");

  const emergencyContacts = directory;

  const handleCall = useCallback(async (phoneNumber: string): Promise<void> => {
    await Linking.openURL(`tel:${phoneNumber}`);
  }, []);

  const handleSaveContact = useCallback(() => {
    if (contactName !== "" && contactPhone !== "") {
      const data = {
        name: contactName,
        phone: contactPhone
      };
      addUserData(user.uid, "EmergencyContacts", data).catch(console.error);
      setContactName("");
      setContactPhone("");
    } else {
      console.error("Por favor, relleno los campos");
    }
  }, [contactName, contactPhone, setContactName, setContactPhone]);

  return (
    <Screen>
      <View>
        <Text style={styles.title} variant={textVars.title}>
          {"Signos de alarma"}
        </Text>
        <Text style={styles.description}>{data.information}</Text>
        {data.signals.map((signal, index) => {
          return <Text key={index}>{`• ${signal}`}</Text>;
        })}
        <View style={styles.noteContainer}>
          <Text style={styles.note} variant={textVars.note}>
            {data.note}
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.title} variant={textVars.title}>
          {"Contactos de emergencia"}
        </Text>

        {emergencyContacts.map((contact, index) => {
          return (
            <TouchableOpacity
              onPress={(): void => {
                handleCall(contact.data.phone).catch(console.error);
              }}
              key={index}
              style={styles.contacts}
            >
              <Text style={styles.textContacts} variant={textVars.textContact}>
                {contact.data.name}
              </Text>
              <Text style={styles.textContacts}>{contact.data.phone}</Text>
              <View style={styles.iconContainer}>
                <Icon name={"phone"} size={22} />
              </View>
            </TouchableOpacity>
          );
        })}
        <View style={styles.contacts}>
          <EditableText
            onChange={setContactName}
            placeholder={"Nombre (Ocupación)"}
            value={contactName}
          />
          <EditableText
            maxLength={10}
            onChange={setContactPhone}
            placeholder={"Número de télefono"}
            type={"numeric"}
            value={contactPhone}
          />
          <Button onPress={handleSaveContact} variant={textVars.textContact}>
            {"Guardar contacto de emergencia"}
          </Button>
        </View>
      </View>
    </Screen>
  );
};

export { Panic };

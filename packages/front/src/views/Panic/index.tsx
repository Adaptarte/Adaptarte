import React, { useCallback, useReducer, useState } from "react";
import { Linking, TouchableOpacity, View } from "react-native";

import { Button } from "components/Button";
import { EditableText } from "components/EditableText";
import { Icon } from "components/Icon";
import { Notice } from "components/Notice";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import { useDB } from "utils/db";
import { useScore } from "utils/engagement/score";

import { deleteDuplicates, getSymptoms } from "./data";
import { styles, textVars } from "./styles";
import { t } from "./translations";

const Panic = (): JSX.Element => {
  const db = useDB();
  const score = useScore();
  const userData = db.getUser();
  const data = t();

  const signal = deleteDuplicates(getSymptoms(userData?.diseases ?? {}));
  !signal.length ? null : (data.signals = signal);

  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [edit, toggleEdit] = useReducer((val) => !val, false);
  const [contactToDelete, setContactToDelete] = useState({ id: "", name: "" });

  const directory = db.getDocs("EmergencyContacts");
  const emergencyContacts = directory;

  const handleCall = useCallback(async (phoneNumber: string): Promise<void> => {
    await Linking.openURL(`tel:${phoneNumber}`);
  }, []);

  const handleSaveContact = useCallback(() => {
    if (contactName !== "" && contactPhone !== "") {
      const data = {
        name: contactName,
        phone: contactPhone,
      };
      db.addDoc("EmergencyContacts", data);
      setContactName("");
      setContactPhone("");
    } else {
      console.error("Por favor, relleno los campos");
    }
  }, [contactName, contactPhone, setContactName, setContactPhone]);

  const handleDelete = useCallback(
    (id: string): void => {
      db.delDoc("EmergencyContacts", id);
      toggleEdit();
    },
    [score.add],
  );

  const handleNotice = (id: string, name: string): void => {
    setContactToDelete({ id, name });
    toggleEdit();
  };

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
        <Notice
          description={
            `¿Está seguro de eliminar a ${contactToDelete.name} ` +
            `de tus contactos de emergencia?`
          }
          setVisible={toggleEdit}
          onConfirm={(): void => {
            handleDelete(contactToDelete.id);
          }}
          visible={edit}
        />
        {emergencyContacts.map((contact, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={(): void => {
                handleCall(contact.data.phone).catch(console.error);
              }}
              style={styles.contacts}
            >
              <TouchableOpacity
                onPress={(): void => {
                  handleNotice(contact.id, contact.data.name);
                }}
                style={styles.delete}
              >
                <Icon name={"trash"} size={24} />
              </TouchableOpacity>
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

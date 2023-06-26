import React, { useCallback } from "react";
import { Linking, TouchableOpacity, View } from "react-native";

import { IconF } from "components/Icon";
import { Screen } from "components/Screen";
import { Text } from "components/Text";

import { contactDirectory } from "./data";
import { styles, textVars } from "./styles";
import { t } from "./translations";

const Panic = (): JSX.Element => {
  const data = t();

  const handleCall = useCallback(async (phoneNumber: string): Promise<void> => {
    await Linking.openURL(`tel:${phoneNumber}`);
  }, []);

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
          <Text style={styles.note}>{data.note}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title} variant={textVars.title}>
          {"Contactos de emergencia"}
        </Text>
        {contactDirectory.map((contact, index) => {
          return (
            <View key={index} style={styles.contacts}>
              <Text style={styles.textContacts} variant={textVars.textContact}>
                {`${contact.name} (${contact.occupation})`}
              </Text>
              <Text style={styles.textContacts}>{contact.phone}</Text>
              <TouchableOpacity
                onPress={(): void => {
                  handleCall(contact.phone).catch(console.error);
                }}
                style={styles.callBtn}
              >
                <IconF name={"phone"} size={25} />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </Screen>
  );
};

export { Panic };

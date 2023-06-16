import React from "react";
import { View } from "react-native";

import { Screen } from "components/Screen";
import { Text } from "components/Text";
import { colors } from "styles";

import { contactDirectory } from "./data";
import { styles, textVars } from "./styles";
import { t } from "./translations";

const Panic = (): JSX.Element => {
  const data = t();
  const colorsContacts: string[][] = [
    ["Acompañante", "EPS", "Médico"],
    [colors.ORANGE_LIGHT, colors.GREEN_LIGHT, colors.BLUE_PURPLE]
  ];

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
            <View
              key={index}
              style={[
                styles.contacts,
                {
                  backgroundColor:
                    colorsContacts[1][
                      colorsContacts[0].indexOf(contact.occupation)
                    ]
                }
              ]}
            >
              <Text variant={textVars.textContact}>
                {`${contact.name} (${contact.occupation}) - ${contact.phone}`}
              </Text>
            </View>
          );
        })}
      </View>
    </Screen>
  );
};

export { Panic };

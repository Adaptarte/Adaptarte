import { useReducer } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Icon } from "components/Icon";
import { Input } from "components/Input";
import { Text } from "components/Text";
import { colors } from "styles";

import { styles } from "./styles";
import type { EditableTextProps } from "./types";

const EditableText = ({
  maxLength,
  onChange,
  placeholder,
  style,
  type,
  value
}: EditableTextProps): JSX.Element => {
  const [editing, toggleEditing] = useReducer((val) => !val, false);

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        {editing ? (
          <Input
            maxLength={maxLength}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
          />
        ) : (
          <Text style={[styles.text, style]}>{value}</Text>
        )}
      </View>
      <Button onPress={toggleEditing} style={styles.button}>
        <Icon
          color={colors.GLAUCOUS}
          name={editing ? "save" : "edit"}
          size={20}
        />
      </Button>
    </View>
  );
};

export { EditableText };

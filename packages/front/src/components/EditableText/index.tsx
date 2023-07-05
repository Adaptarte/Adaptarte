import { useCallback, useReducer, useState } from "react";
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
  value = ""
}: EditableTextProps): JSX.Element => {
  const [editing, toggleEditing] = useReducer((val) => !val, false);
  const [input, setInput] = useState(value);

  const handleChange = useCallback(() => {
    if (input !== value) {
      onChange?.(input);
    }
    toggleEditing();
  }, [input, onChange, toggleEditing]);

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        {editing ? (
          <Input
            maxLength={maxLength}
            onChange={setInput}
            placeholder={placeholder}
            type={type}
            value={input}
          />
        ) : (
          <Text style={[styles.text, style]}>{value}</Text>
        )}
      </View>
      <Button
        onPress={editing ? handleChange : toggleEditing}
        style={styles.button}
      >
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

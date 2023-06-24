import React, { useCallback, useState } from "react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { Modal } from "components/Modal";

import type { ExercisesProps } from "./types";

const Exercises = ({
  onSave,
  setVisible,
  visible
}: ExercisesProps): JSX.Element => {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");

  const handleSave = useCallback(() => {
    onSave({
      date: new Date(),
      duration: parseInt(duration),
      exercise: exercise
    });
    setVisible?.(false);
  }, [exercise, duration, setVisible]);

  return (
    <Modal
      setVisible={setVisible}
      title={"Registro de Ejercicios"}
      visible={visible}
    >
      <Input
        label={"Actividad realizada"}
        onChange={setExercise}
        value={exercise}
      />
      <Input
        label={"Tiempo de duración en minutos"}
        type={"numeric"}
        onChange={setDuration}
        value={duration}
      />
      <Button
        disabled={exercise.length === 0 || duration.length === 0}
        onPress={handleSave}
        style={{ marginTop: 10 }}
        variant={{ color: "GLAUCOUS", style: "solid" }}
      >
        {"Registrar"}
      </Button>
    </Modal>
  );
};

export { Exercises };

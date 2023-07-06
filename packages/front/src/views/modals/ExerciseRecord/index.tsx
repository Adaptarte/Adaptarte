import React, { useCallback, useEffect, useState } from "react";

import { Button } from "components/Button";
import { DatePicker } from "components/DatePicker";
import { Input } from "components/Input";
import { Modal } from "components/Modal";

import { t } from "./translations";
import type { ExerciseRecordProps } from "./types";

const ExerciseRecord = ({
  onSave,
  setVisible,
  visible
}: ExerciseRecordProps): JSX.Element => {
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSave = useCallback(() => {
    onSave?.({
      date,
      duration: parseInt(duration),
      exercise: activity
    });
    setVisible?.(false);
  }, [activity, duration, setVisible]);

  useEffect(() => {
    setDate(new Date());
  }, [visible]);

  return (
    <Modal setVisible={setVisible} title={t().title} visible={visible}>
      <Input
        label={t().activity.label}
        onChange={setActivity}
        placeholder={t().activity.placeholder}
        value={activity}
      />
      <Input
        label={t().duration.label}
        onChange={setDuration}
        placeholder={t().duration.placeholder}
        type={"numeric"}
        value={duration}
      />
      <DatePicker
        date={date}
        label={t().date}
        maxDate={new Date()}
        onDateChange={setDate}
      />
      <Button
        disabled={activity.length === 0 || isNaN(parseFloat(duration))}
        onPress={handleSave}
        style={{ marginTop: 10 }}
        variant={{ color: "GLAUCOUS", style: "solid" }}
      >
        {t().save}
      </Button>
    </Modal>
  );
};

export { ExerciseRecord };

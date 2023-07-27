import type { NotificationSettings } from "@notifee/react-native";
import Notifee from "@notifee/react-native";
import React, { useCallback, useEffect, useState } from "react";

import { Button } from "components/Button";
import { Modal } from "components/Modal";
import { Text } from "components/Text";

import { styles } from "./styles";
import { t } from "./translations";

const NotificationsPermission = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const handleSettings = useCallback(
    (promise: Promise<NotificationSettings>) => {
      promise
        .then((settings) => {
          const authorized = settings.authorizationStatus > 0;
          setVisible(!authorized);
        })
        .catch(console.error);
    },
    []
  );

  useEffect(() => {
    handleSettings(Notifee.getNotificationSettings());
  }, []);

  const handlePermission = useCallback(() => {
    handleSettings(Notifee.requestPermission());
  }, []);

  return (
    <Modal setVisible={setVisible} title={t().title} visible={visible}>
      <Text style={styles.message}>{t().message}</Text>
      <Button onPress={handlePermission} variant={{ style: "solid" }}>
        {t().accept}
      </Button>
    </Modal>
  );
};

export { NotificationsPermission };

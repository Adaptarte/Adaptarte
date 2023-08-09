import React, { useCallback, useState } from "react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { signIn } from "utils/auth";

import { t } from "./translations";

const styles = {
  field: "mb-2",
};

const Authentication = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = useCallback(() => {
    signIn(email, password);
  }, [email, password]);

  return (
    <div>
      <p className={"h3"}>{t().title}</p>
      <Input
        className={styles.field}
        label={t().email.label}
        onChange={setEmail}
        placeholder={t().email.placeholder}
        type={"email"}
        value={email}
      />
      <Input
        className={styles.field}
        label={t().password.label}
        onChange={setPassword}
        placeholder={t().password.placeholder}
        type={"password"}
        value={password}
      />
      <Button onClick={handleSignIn}>{t().signIn}</Button>
    </div>
  );
};

export { Authentication };

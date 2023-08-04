import React, { useCallback, useEffect } from "react";

import { Button } from "components/Button";
import { Paper } from "components/Paper";

import { t } from "./translations";
import type { ModalProps } from "./types";

const styles = {
  center: "d-flex align-items-center justify-content-center",
  cover: "overflow-hidden position-fixed start-0 top-0 vh-100 vw-100",
};

const Modal = ({
  children,
  onClose,
  title,
  visible,
}: ModalProps): JSX.Element | null => {
  const handleClose = useCallback(() => {
    onClose?.(false);
  }, [onClose]);

  useEffect(() => {
    const { classList } = document.body;
    if (visible) {
      classList.add("overflow-hidden");
    } else {
      classList.remove("overflow-hidden");
    }

    return () => {
      classList.remove("overflow-hidden");
    };
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`bg-dark bg-opacity-50 ${styles.cover} ${styles.center}`}
      style={{
        zIndex: 9999,
      }}
    >
      <Paper>
        <div className={"d-flex justify-content-between"}>
          <p className={"fw-bold h4 mb-0 me-2"}>{title}</p>
          <Button className={"btn-sm"} onClick={handleClose}>
            {t().close}
          </Button>
        </div>
        <hr />
        {children}
      </Paper>
    </div>
  );
};

export { Modal };

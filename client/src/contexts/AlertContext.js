import React from "react";
import { v4 as uuidv4 } from "uuid";

const AlertContext = React.createContext();

function AlertProvider({ children }) {
  const [alert, setAlert] = React.useState("");

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

function useAlertContext() {
  const { alert, setAlert } = React.useContext(AlertContext);

  const addAlert = React.useCallback(
    ({ title, msg }) => {
      setAlert({
        id: uuidv4(),
        title,
        msg,
      });

      setTimeout(() => {
        setAlert("");
      }, 5000);
    },
    [setAlert]
  );

  return {
    alert,
    addAlert,
  };
}

export { AlertProvider, useAlertContext };

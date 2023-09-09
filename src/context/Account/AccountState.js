import AccountReducer from "./AccountReducer";
import React, { useReducer, useState } from "react";
import accountContext from "./AccountContext";

const AccountState = (props) => {
  const initialState = { count: 500, myAge: 25, lg: "EN" };
  const [firstState, setFirstState] = useState(initialState);
  const [state, dispatch] = useReducer(AccountReducer, initialState);
  return (
    <accountContext.Provider value={{ state, dispatch }}>
      {props.children}
    </accountContext.Provider>
  );
};
export default AccountState;

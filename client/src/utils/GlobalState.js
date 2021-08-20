// delete old context code
import React from "react";
import { Provider } from "react";
import store from "./store";

const StoreProvider = ({ ...props }) => {
  return <Provider store={store} {...props} />;
};

export { StoreProvider };

import React from "react";
import { useColorScheme } from "react-native";
import themePallate from "../config/theme";

const Context = React.createContext();

export function useMainContext() {
  return React.useContext(Context);
}

const MainContextProvider = ({ children, setStatusBar }) => {
  const scheme = useColorScheme();
  const theme = themePallate[useColorScheme()];
  const value = { theme, scheme, setStatusBar };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default MainContextProvider;

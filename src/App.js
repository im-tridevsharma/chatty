import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import themePallate from "./config/theme";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./navigation/Stack/MainStack";
import MainContextProvider from "./context";

export default function App() {
  const theme = themePallate[useColorScheme()];
  const [statusBar, setStatusBar] = React.useState(true);

  return (
    <>
      <StatusBar
        barStyle="default"
        translucent={!statusBar}
        animated={true}
        backgroundColor={statusBar ? theme.primary : "transparent"}
      />
      <NavigationContainer>
        <MainContextProvider setStatusBar={setStatusBar}>
          <MainStack />
        </MainContextProvider>
      </NavigationContainer>
    </>
  );
}

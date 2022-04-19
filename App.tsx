import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import AppLoading from "expo-app-loading";

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { GlobalTheme } from "./src/global/Styles/theme";
import { Dashboard } from "./src/screens/Dashboard";

export default function App() {
  const [fontsLoaded] = useFonts({ 
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={GlobalTheme}>
      <Dashboard />
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Main from "./screens/ main";
import { GluestackUIProvider, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function App() {
  return (
    <GluestackUIProvider config={config} colorMode="dark">
      <SafeAreaProvider>
        <SafeAreaView
          edges={["top", "left", "right"]}
          style={{
            flex: 1,
            backgroundColor: "black",
            borderWidth: 2,
            borderColor: "red",
          }}
        >
          <StatusBar style="auto" />
          <Main />
        </SafeAreaView>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}

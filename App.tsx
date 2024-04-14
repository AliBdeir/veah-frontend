import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./screens/ main";

const client = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={client}>
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
    </QueryClientProvider>
  );
}

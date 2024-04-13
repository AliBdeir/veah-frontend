import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Main from "./screens/ main";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-black border-2 border-red-500">
      <StatusBar style="auto" />
      <Main />
    </SafeAreaView>
  );
}

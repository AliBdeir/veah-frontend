import { View, Text } from "react-native";

export default function Main() {
  return (
    <View className="flex-1">
      <View className="h-64 w-full justify-center items-center mt-3">
        <View className="h-40 w-40 bg-red-500 rounded-full justify-center items-center">
          <Text className="text-white text-4xl font-bold">SOS</Text>
        </View>
      </View>
    </View>
  );
}

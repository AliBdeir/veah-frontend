import { View, Text, TouchableOpacity } from "react-native";
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup,
} from "@gluestack-ui/themed";
import QuickOptions from "../components/quick-options";

export default function Main() {
  return (
    <View className="flex-1">
      {/* SOS button container */}
      <View className="h-64 w-full justify-center items-center mt-3">
        {/* SOS button */}
        <TouchableOpacity
          className="h-40 w-40 bg-red-500 rounded-full justify-center items-center"
          onPress={() => {
            /* SOS button press handler */
          }}
        >
          <Text className="text-white text-4xl font-bold">SOS</Text>
        </TouchableOpacity>
      </View>

      {/* Options container */}
      <QuickOptions options={[]} />

      {/* Additional options container */}
      <View className="my-4 mx-3">
        <Text className="text-white mb-2">Other</Text>
        <View className="border-2 border-white p-3">
          {/* Placeholder for additional options */}
        </View>
      </View>

      {/* Call to action button container */}
      <View className="my-4 mx-3">
        <Button className="bg-purple-600">
          {/* Replace with an actual ButtonIcon or ButtonSpinner if needed */}
          <ButtonText className="text-white">MAKE THE CALL</ButtonText>
        </Button>
      </View>
    </View>
  );
}

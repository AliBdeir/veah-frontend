import { View } from "react-native";
import { useState } from "react";
import QuickButton from "./quick-button";
import useCall from "../hooks/use-call";
import usePersistedState from "../hooks/state";

export const dataList = [
  {
    btn_id: "medical",
    label: "MEDICAL",
    emoji: "🏥",
    colour: "#3B3355",
  },
  {
    btn_id: "intruder",
    label: "INTRUDER",
    emoji: "🚨",
    colour: "#5D5D81",
  },
  {
    btn_id: "car_accident",
    label: "CAR ACCIDENT",
    emoji: "🚗💥",
    colour: "#3B3355",
  },
  {
    btn_id: "fire",
    label: "FIRE",
    emoji: "🔥",
    colour: "#5D5D81",
  },
  // ... add more buttons as needed
];

export default function QuickOptions() {
  const [buttonList] = useState(dataList);
  const call = useCall();
  const currentUserInput = usePersistedState((state) => state.state);
  return (
    <View className="flex-row flex-wrap justify-around my-4 px-2">
      {/* All the quick options here */}
      {buttonList.map((button, index) => (
        <QuickButton
          key={index}
          btn_id={button.btn_id}
          label={button.label}
          emoji={button.emoji}
          colour={button.colour}
          onPress={() =>
            call.mutate({
              ...currentUserInput,
              emergencyInformation: button.label,
            })
          }
        />
      ))}
    </View>
  );
}

import { View } from "react-native";
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from "@gluestack-ui/themed";

export default function QuickButton({
  label,
  emoji,
  colour,
  onPress,
}: {
  btn_id: string;
  label: string;
  emoji: string;
  colour: string;
  onPress: () => void;
}) {
  return (
    <Button
      style={{
        marginTop: 12,
        width: 180,
        height: 69,
      }}
      onPress={() => onPress()}
    >
      <ButtonText>
        {emoji} {label}
      </ButtonText>
    </Button>
  );
}

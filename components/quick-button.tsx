import { View } from "react-native";
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup,
} from "@gluestack-ui/themed";

export default function QuickButton({
  label,
  emoji,
  colour,
}: {
  btn_id: string;
  label: string;
  emoji: string;
  colour: string;
}) {
  return (
    <Button
      style={{
        backgroundColor: colour,
        marginTop: 12,
        width: 180,
        height: 69,
      }}
    >
      <ButtonText>
        {emoji} {label}
      </ButtonText>
    </Button>
  );
}

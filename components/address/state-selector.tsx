import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectItem } from "@gluestack-ui/themed";
import { states } from "./states";
import { StyleProp } from "react-native";

type Props = {
  value: string;
  onChange: (value: string) => void;
  style: StyleProp<ViewStyle>;
};

const StateSelectorComponent = (props: Props) => {
  return (
    <Select onValueChange={props.onChange} selectedValue={props.value} style={props.style}>
      <SelectTrigger>
        <SelectInput placeholder="State" />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          {states.map((state) => (
            <SelectItem key={state} value={state} label={state} />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default StateSelectorComponent;

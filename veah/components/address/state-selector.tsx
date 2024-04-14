import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectItem } from "@gluestack-ui/themed";
import { states } from "./states";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const StateSelectorComponent = (props: Props) => {
  return (
    <Select onValueChange={props.onChange} selectedValue={props.value}>
      <SelectTrigger>
        <SelectInput />
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

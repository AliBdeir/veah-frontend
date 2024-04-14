import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectItem,
} from "@gluestack-ui/themed";

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
          <SelectItem label="India" value="India" />
          <SelectItem label="Sri Lanka" value="Sri Lanka" />
          <SelectItem label="Uganda" value="Uganda" />
          <SelectItem label="Japan" value="Japan" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

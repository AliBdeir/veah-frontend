import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  ChevronDownIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@gluestack-ui/themed";

type Props = {
  value: string;
  onChange: (value: string) => void;
};
const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const BloodTypeComponent = (props: Props) => {
  return (
    <Select selectedValue={props.value} onValueChange={props.onChange}>
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Blood type" />
        <SelectIcon mr="$3" as={ChevronDownIcon} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {bloodTypes.map((type) => (
            <SelectItem key={type} label={type} value={type} />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default BloodTypeComponent;

import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectItem,
  ChevronDownIcon,
  Icon,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
} from "@gluestack-ui/themed";
import { states } from "./states";
import { ScrollView, StyleProp, ViewStyle } from "react-native";
import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  style: StyleProp<ViewStyle>;
};

const StateSelectorComponent = (props: Props) => {
  return (
    <Select onValueChange={props.onChange} selectedValue={props.value} style={props.style}>
      {/* <SelectTrigger>
        <SelectInput placeholder="State" />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          {states.map((state) => (
            <SelectItem key={state} value={state} label={state} />
          ))}
        </SelectContent>
      </SelectPortal> */}
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="State" />
        <SelectIcon mr="$3" as={ChevronDownIcon} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <ScrollView>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {states.map((state) => (
              <SelectItem key={state} value={state} label={state} />
            ))}
          </ScrollView>
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default StateSelectorComponent;

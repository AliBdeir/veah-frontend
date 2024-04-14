import React from "react";
import { View } from "react-native";
import {
  Input,
  InputField,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Select,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectItem,
  SelectBackdrop,
  SelectContent,
} from "@gluestack-ui/themed";
import { Controller, useFormContext } from "react-hook-form";
import { UserInput } from "../../types/types";
import StateSelectorComponent from "./state-selector";

export default function AddressForm() {
  const { control } = useFormContext<UserInput>();
  return (
    <View className="flex flex-col">
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Address 1</FormControlLabelText>
        </FormControlLabel>
        <Controller
          defaultValue=""
          name="address.addressLn1"
          control={control}
          render={({ field }) => (
            <Input>
              <InputField
                value={field.value}
                onChangeText={(text) => {
                  console.log(text);
                  field.onChange(text);
                }}
              />
            </Input>
          )}
        />
        <FormControlLabel>
          <FormControlLabelText>Address 2</FormControlLabelText>
        </FormControlLabel>
        <Controller
          defaultValue=""
          name="address.addressLn2"
          control={control}
          render={({ field }) => (
            <Input>
              <InputField
                value={field.value}
                onChangeText={(text) => {
                  console.log(text);
                  field.onChange(text);
                }}
              />
            </Input>
          )}
        />
        <FormControlLabel>
          <FormControlLabelText>State</FormControlLabelText>
        </FormControlLabel>
        <Controller
          defaultValue=""
          control={control}
          name="address.state"
          render={({ field }) => <StateSelectorComponent value={field.value} onChange={field.onChange} />}
        />
        <FormControlLabel>
          <FormControlLabelText>Zip</FormControlLabelText>
        </FormControlLabel>

        <Controller
          defaultValue=""
          name="address.zip"
          control={control}
          render={({ field }) => (
            <Input>
              <InputField
                keyboardType="numeric"
                value={field.value}
                onChangeText={(text) => {
                  console.log(text);
                  field.onChange(text);
                }}
              />
            </Input>
          )}
        />
      </FormControl>
    </View>
  );
}

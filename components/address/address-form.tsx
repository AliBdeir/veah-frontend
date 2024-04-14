import { FormControl, Heading, Input, InputField } from "@gluestack-ui/themed";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { View } from "react-native";
import { UserInput } from "../../types/types";
import StateSelectorComponent from "./state-selector";

export default function AddressForm() {
  const { control } = useFormContext<UserInput>();
  return (
    <View className="flex flex-col">
      <FormControl style={{ gap: 14 }}>
        <Heading>Address</Heading>
        <Controller
          defaultValue=""
          name="address.addressLn1"
          control={control}
          render={({ field }) => (
            <Input variant="outline">
              <InputField
                value={field.value}
                onChangeText={(text) => {
                  console.log(text);
                  field.onChange(text);
                }}
                placeholder="Address"
              />
            </Input>
          )}
        />
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
                placeholder="Suite/Apt./Dept."
              />
            </Input>
          )}
        />
        <Controller
          defaultValue=""
          name="address.city"
          control={control}
          render={({ field }) => (
            <Input>
              <InputField
                value={field.value}
                onChangeText={(text) => {
                  console.log(text);
                  field.onChange(text);
                }}
                placeholder="City"
              />
            </Input>
          )}
        />
        <FormControl style={{ flexDirection: "row", gap: 8 }}>
          <Controller
            defaultValue=""
            control={control}
            name="address.state"
            render={({ field }) => <StateSelectorComponent value={field.value} onChange={field.onChange} style={{ width: "50%" }} />}
          />
          <Controller
            defaultValue=""
            name="address.zip"
            control={control}
            render={({ field }) => (
              <Input style={{ width: "50%" }}>
                <InputField
                  keyboardType="numeric"
                  value={field.value}
                  onChangeText={(text) => {
                    console.log(text);
                    field.onChange(text);
                  }}
                  placeholder="Zip"
                />
              </Input>
            )}
          />
        </FormControl>
      </FormControl>
    </View>
  );
}

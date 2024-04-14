import { Controller, useFormContext } from "react-hook-form";
import { UserInput } from "../../types/types";
import { View, TextInput } from "react-native";
import {
  FormControl,
  Input,
  InputField,
  Heading,
  CircleIcon,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  VStack,
} from "@gluestack-ui/themed";

const BasicInformationForm = () => {
  const { control } = useFormContext<UserInput>();
  return (
    <FormControl style={{ gap: 14, marginBottom: 14 }}>
      <Heading>Basic Info</Heading>
      <Controller
        defaultValue=""
        name="basic.name"
        control={control}
        render={({ field }) => (
          <Input variant="outline">
            <InputField
              value={field.value}
              onChangeText={(text) => {
                console.log(text);
                field.onChange(text);
              }}
              placeholder="Name"
            />
          </Input>
        )}
      />
      <FormControl style={{ flexDirection: "row", gap: 8 }}>
        <Controller
          defaultValue=""
          name="basic.age"
          control={control}
          render={({ field }) => (
            <Input variant="outline" style={{ width: "50%" }}>
              <InputField
                keyboardType="numeric"
                value={field.value}
                onChangeText={(text) => {
                  console.log(text);
                  field.onChange(text);
                }}
                placeholder="Age"
              />
            </Input>
          )}
        />
        <Controller
          defaultValue=""
          name="basic.sex"
          control={control}
          render={({ field }) => (
            <RadioGroup
              onChange={(val) => {
                console.log(val);
                field.onChange(val);
              }}
            >
              <VStack space="sm">
                <Radio value="Male">
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Male</RadioLabel>
                </Radio>
                <Radio value="Female">
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Female</RadioLabel>
                </Radio>
                <Radio value="Other">
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Other</RadioLabel>
                </Radio>
              </VStack>
            </RadioGroup>
          )}
        />
      </FormControl>
    </FormControl>
  );
};

export default BasicInformationForm;
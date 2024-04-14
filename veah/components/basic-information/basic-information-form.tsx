import { Controller, useFormContext } from "react-hook-form";
import { UserInput } from "../../types/types";
import { View, TextInput } from "react-native";
import { FormControl, Input } from "@gluestack-ui/themed";

const BasicInformationForm = () => {
  const methods = useFormContext<UserInput>();
  return <FormControl></FormControl>;
};

export default BasicInformationForm;

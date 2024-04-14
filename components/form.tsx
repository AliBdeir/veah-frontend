import { Button, ButtonText, Divider } from "@gluestack-ui/themed";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import { DefaultUserInput, UserInput } from "../types/types";
import AddressForm from "./address/address-form";
import BasicInformationForm from "./basic-information/basic-information-form";
import HealthInformationForm from "./health-information/health-information-form";

export default function Form() {
  const form = useForm<UserInput>({
    defaultValues: DefaultUserInput,
  });
  console.log(form.watch());
  const onSubmit = (data: UserInput) => {
    console.log(data);
  };
  return (
    <FormProvider {...form}>
      <View className="flex-1 px-6 w-full">
        <BasicInformationForm />
        <Divider />
        <AddressForm />
        <View className="mt-4">
          <Divider />
        </View>
        <HealthInformationForm />
        <View className="mt-6 w-full">
          <Button onPress={form.handleSubmit(onSubmit)}>
            <ButtonText>Save</ButtonText>
          </Button>
        </View>
      </View>
    </FormProvider>
  );
}

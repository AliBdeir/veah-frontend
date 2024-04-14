import { Button, ButtonText } from "@gluestack-ui/themed";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import { UserInput } from "../types/types";
import AddressForm from "./address/address-form";

export default function Form() {
  const form = useForm<UserInput>();
  const onSubmit = (data: UserInput) => {
    console.log(data);
  };
  return (
    <FormProvider {...form}>
      <View className="flex-1 px-6 w-full">
        <AddressForm />
        <View className="mt-6 w-full">
          <Button onPress={form.handleSubmit(onSubmit)}>
            <ButtonText>Save</ButtonText>
          </Button>
        </View>
      </View>
    </FormProvider>
  );
}

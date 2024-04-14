import { View } from "react-native";
import { Input, Button, ButtonText } from "@gluestack-ui/themed";
import AddressForm from "./address/address-form";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { UserInput } from "../types/types";

export default function Form() {
  const form = useForm<UserInput>();
  const onSubmit = (data: UserInput) => {
    console.log(data);
  };
  return (
    <FormProvider {...form}>
      <View className="flex-1 px-6">
        <AddressForm />
        <View className="mt-6">
          <Button onPress={form.handleSubmit(onSubmit)}>
            <ButtonText>Save</ButtonText>
          </Button>
        </View>
      </View>
    </FormProvider>
  );
}

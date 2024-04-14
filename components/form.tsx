import { Button, ButtonText } from "@gluestack-ui/themed";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import { UserInput } from "../types/types";
import AddressForm from "./address/address-form";
import BasicInformationForm from "./basic-information/basic-information-form";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Form() {
  const form = useForm<UserInput>();
  const onSubmit = async (data: UserInput) => {
    try {
      await AsyncStorage.setItem("formData", JSON.stringify(data));
      console.log("Data saved:", data);
    } catch (error) {
      console.error("Error saving data", error);
    }
  };
  return (
    <FormProvider {...form}>
      <View className="flex-1 px-6 w-full">
        <BasicInformationForm />
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

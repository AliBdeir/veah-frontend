import { Button, ButtonText, Divider } from "@gluestack-ui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { UserInput } from "../types/types";
import { useEffect } from "react";
import AddressForm from "./address/address-form";
import BasicInformationForm from "./basic-information/basic-information-form";
import HealthInformationForm from "./health-information/health-information-form";
import useLoadFromStorage from "../hooks/useLoadFromStorage";

export default function Form() {
  // const form = useForm<UserInput>();
  const { newData, form } = useLoadFromStorage();
  useEffect(() => {
    console.log("load called");
    console.log("new fetched as: ", newData);
  }, [newData]);
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
      <ScrollView className="flex-1 px-6 w-full">
        <View className="pb-6">
          <BasicInformationForm />
          <Divider />
          <AddressForm />
          <View className="mt-4">
            <Divider />
          </View>
          <HealthInformationForm />
          <View className="mt-4">
            <Divider />
          </View>
          <View className="mt-6 w-full">
            <Button onPress={form.handleSubmit(onSubmit)}>
              <ButtonText>Save</ButtonText>
            </Button>
          </View>
        </View>
      </ScrollView>
    </FormProvider>
  );
}

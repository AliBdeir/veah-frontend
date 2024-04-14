import { Button, ButtonText, Divider } from "@gluestack-ui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { DefaultUserInput, UserInput } from "../types/types";
import { useEffect } from "react";
import AddressForm from "./address/address-form";
import BasicInformationForm from "./basic-information/basic-information-form";
import HealthInformationForm from "./health-information/health-information-form";
import usePersistedState from "../hooks/state";

export default function Form() {
  const { setState, state } = usePersistedState();
  const form = useForm<UserInput>({
    defaultValues: DefaultUserInput,
  });
  useEffect(() => {
    if (state) {
      form.reset(state);
    }
  }, [state]);
  const onSubmit = async (data: UserInput) => {
    setState(data);
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

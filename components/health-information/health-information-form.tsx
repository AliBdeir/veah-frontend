import { FormControl, Heading, View } from "@gluestack-ui/themed";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Item, UserInput } from "../../types/types";
import MultiItemInput from "../multiitem-input/multiitem-input";
import BloodTypeComponent from "./blood-type";

const HealthInformationForm = () => {
  const form = useFormContext<UserInput>();
  const { fields, append, update, remove } = useFieldArray<UserInput>({
    control: form.control,
    name: "healthInformation.conditions",
  });
  return (
    <View className="flex flex-col">
      <FormControl style={{ gap: 14 }}>
        <Heading>Health Information</Heading>
        <Controller
          control={form.control}
          name="healthInformation.bloodType"
          render={({ field }) => <BloodTypeComponent value={field.value} onChange={field.onChange} />}
        />
        <FormControl>
          <Heading>Conditions</Heading>
          <MultiItemInput
            values={fields.map((x) => (x as Item).value)}
            onValueUpdate={(index, value) =>
              update(index, {
                id: index.toString(),
                value: value,
              })
            }
            onValueAdd={(value) =>
              append({
                id: fields.length.toString(),
                value: value,
              })
            }
            onValueRemove={(index) => remove(index)}
          />
        </FormControl>
      </FormControl>
    </View>
  );
};

export default HealthInformationForm;

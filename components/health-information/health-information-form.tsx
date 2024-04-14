import { FormControl, Heading, View } from "@gluestack-ui/themed";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Item, UserInput } from "../../types/types";
import MultiItemInput from "../multiitem-input/multiitem-input";
import BloodTypeComponent from "./blood-type";

const HealthInformationForm = () => {
  const form = useFormContext<UserInput>();
  const conditionsArray = useFieldArray<UserInput>({
    control: form.control,
    name: "healthInformation.conditions",
  });
  const medicationsArray = useFieldArray<UserInput>({
    control: form.control,
    name: "healthInformation.medications",
  });
  const allergiesArray = useFieldArray<UserInput>({
    control: form.control,
    name: "healthInformation.allergies",
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
            values={conditionsArray.fields.map((x) => (x as Item).value)}
            onValueUpdate={(index, value) =>
              conditionsArray.update(index, {
                id: index.toString(),
                value: value,
              })
            }
            onValueAdd={(value) =>
              conditionsArray.append({
                id: conditionsArray.fields.length.toString(),
                value: value,
              })
            }
            onValueRemove={(index) => conditionsArray.remove(index)}
          />
        </FormControl>
        <FormControl>
          <Heading>Medication</Heading>
          <MultiItemInput
            values={medicationsArray.fields.map((x) => (x as Item).value)}
            onValueUpdate={(index, value) =>
              medicationsArray.update(index, {
                id: index.toString(),
                value: value,
              })
            }
            onValueAdd={(value) =>
              medicationsArray.append({
                id: medicationsArray.fields.length.toString(),
                value: value,
              })
            }
            onValueRemove={(index) => medicationsArray.remove(index)}
          />
        </FormControl>
        <FormControl>
          <Heading>Allergies</Heading>
          <MultiItemInput
            values={allergiesArray.fields.map((x) => (x as Item).value)}
            onValueUpdate={(index, value) =>
              allergiesArray.update(index, {
                id: index.toString(),
                value: value,
              })
            }
            onValueAdd={(value) =>
              allergiesArray.append({
                id: allergiesArray.fields.length.toString(),
                value: value,
              })
            }
            onValueRemove={(index) => allergiesArray.remove(index)}
          />
        </FormControl>
      </FormControl>
    </View>
  );
};

export default HealthInformationForm;

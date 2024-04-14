import { AddIcon, Button, ButtonIcon, ButtonText, Input, InputField, TrashIcon } from "@gluestack-ui/themed";
import { View } from "react-native";

type Props = {
  values: string[];
  onValueAdd: (value: string) => void;
  onValueUpdate: (index: number, value: string) => void;
  onValueRemove: (index: number) => void;
  label?: string;
};

export default function MultiItemInput(props: Props) {
  return (
    <View className="flex flex-col w-full space-y-4">
      {props.values.map((value, index) => (
        <View key={index} className="w-full flex flex-row gap-4">
          <View className="flex-1">
            <Input>
              <InputField
                value={value}
                placeholder={props.label}
                onChangeText={(text) => {
                  props.onValueUpdate(index, text);
                }}
              />
            </Input>
          </View>
          <View>
            <Button variant="solid" action="negative" onPress={() => props.onValueRemove(index)}>
              <ButtonIcon as={TrashIcon} />
            </Button>
          </View>
        </View>
      ))}
      <View>
        <Button variant="solid" action="primary" onPress={() => props.onValueAdd("")}>
          <ButtonIcon as={AddIcon} />
          <ButtonText>Add</ButtonText>
        </Button>
      </View>
    </View>
  );
}

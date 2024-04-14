import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup,
} from "@gluestack-ui/themed";
import QuickOptions from "../components/quick-options";
import Profile from "../components/profile";
const profileCog = require("../assets/cog.png");
const cancel = require("../assets/cancel.png");

export default function Main() {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <View className="flex-1">
      {/* header */}
      <View className="flex flex-row justify-between items-center px-6">
        <Text className="text-white text-4xl font-bold">
          {showProfile ? "Profile" : ""}
        </Text>

        <TouchableOpacity
          onPress={() => setShowProfile(!showProfile)}
          className=" p-2 rounded"
        >
          {/* <Text className="text-white text-lg">Profile</Text> */}

          <Image
            resizeMode="contain"
            style={{ height: 50, width: 50 }}
            source={showProfile ? cancel : profileCog}
          />
        </TouchableOpacity>
      </View>
      {/* Stuff below header */}
      <View className="flex-1">
        {!showProfile ? (
          <>
            {/* SOS button container */}
            <View className="h-64 w-full justify-center items-center mt-3">
              {/* SOS button */}
              <TouchableOpacity
                className="h-40 w-40 bg-red-500 rounded-full justify-center items-center"
                onPress={() => {
                  /* SOS button press handler */
                }}
              >
                <Text className="text-white text-4xl font-bold">SOS</Text>
              </TouchableOpacity>
            </View>

            {/* Options container */}
            <QuickOptions options={[]} />

            {/* Additional options container */}
            <View className="my-4 mx-3">
              <Text className="text-white mb-2">Other</Text>
              <View className="border-2 border-white p-3">
                {/* Placeholder for additional options */}
              </View>
            </View>

            {/* Call to action button container */}
            <View className="my-4 mx-3">
              <Button className="bg-purple-600">
                {/* Replace with an actual ButtonIcon or ButtonSpinner if needed */}
                <ButtonText className="text-white">MAKE THE CALL</ButtonText>
              </Button>
            </View>
          </>
        ) : (
          <Profile />
        )}
      </View>
    </View>
  );
}

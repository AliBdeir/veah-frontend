import { Button, ButtonText, Input, InputField } from "@gluestack-ui/themed";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import Profile from "../components/profile";
import QuickOptions from "../components/quick-options";
import usePersistedState from "../hooks/state";
// @ts-expect-error png stuff
import profileCog from "../assets/cog.png";
// @ts-expect-error png stuff
import cancel from "../assets/cancel.png";
import useCall from "../hooks/use-call";
import clsx from "clsx";
import { useChatSession } from "../hooks/chat";
import ChatComponent from "../components/chat-component/chat-component";

export default function Main() {
  const [showProfile, setShowProfile] = useState(false);
  const [otherText, setOtherText] = useState("");
  const { state, success, setSuccess, session } = usePersistedState();
  const call = useCall(() => setSuccess(true));
  useChatSession();
  const onSos = () => {
    call.mutate({
      ...state,
      emergencyInformation: otherText ? otherText : "No emergency information provided. General emergency.",
    });
  };
  return (
    <ScrollView className="flex-1">
      {/* header */}
      <View className="flex flex-row justify-between items-center px-6">
        <Text className="text-white text-4xl font-bold">{showProfile ? "Profile" : ""}</Text>

        <TouchableOpacity onPress={() => setShowProfile(!showProfile)} className=" p-2 rounded">
          {/* <Text className="text-white text-lg">Profile</Text> */}

          <Image resizeMode="contain" style={{ height: 35, width: 35 }} source={showProfile ? cancel : profileCog} />
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
                className={clsx(
                  `h-40 w-40 rounded-full justify-center items-center`,
                  session?.sent ? "bg-blue-900" : success ? "bg-green-700" : "bg-red-500"
                )}
                onPress={onSos}
                disabled={(session?.id || success) === true}
              >
                <Text className="text-white text-4xl font-bold">{session?.sent ? "HELP IS COMING" : success ? "On the call..." : "SOS"}</Text>
              </TouchableOpacity>
            </View>

            {!session?.id ? (
              <>
                {/* Options container */}
                <QuickOptions />

                {/* Additional options container */}
                <View className="my-4 mx-3">
                  <Text className="text-white mb-2">Other</Text>
                  <Input>
                    <InputField placeholder="Type emergency..." value={otherText} onChangeText={(text) => setOtherText(text)} />
                  </Input>
                </View>

                {/* Call to action button container */}
                <View className="my-4 mx-3">
                  <Button className="bg-purple-600" onPress={onSos}>
                    {/* Replace with an actual ButtonIcon or ButtonSpinner if needed */}
                    <ButtonText className="text-white">MAKE THE CALL</ButtonText>
                  </Button>
                </View>
              </>
            ) : (
              <ChatComponent />
            )}
          </>
        ) : (
          <Profile />
        )}
      </View>
    </ScrollView>
  );
}

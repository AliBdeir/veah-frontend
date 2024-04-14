import { View, Text } from "react-native";
import usePersistedState from "../../hooks/state";
import ChatBubble from "react-native-chat-bubble";

const ChatComponent = () => {
  const session = usePersistedState((x) => x.session);
  if (!session) {
    return null;
  }
  return (
    <View>
      {session.messages.map((message, index) => (
        <ChatBubble isOwnMessage={message.senderId === "VEAH"} withTail key={index}>
          <Text>{message.text}</Text>
        </ChatBubble>
      ))}
    </View>
  );
};

export default ChatComponent;

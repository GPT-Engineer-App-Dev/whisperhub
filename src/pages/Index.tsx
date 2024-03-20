import { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  Input,
  Button,
  Divider,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

interface Message {
  id: number;
  text: string;
  sender: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        sender: "You",
      };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  return (
    <Box maxW="600px" mx="auto" p={4}>
      <Heading mb={4}>WhatsApp Clone</Heading>
      <Box border="1px" borderColor="gray.200" borderRadius="md" p={4}>
        <VStack spacing={4} align="stretch">
          {messages.map((message) => (
            <HStack key={message.id} justify={message.sender === "You" ? "flex-end" : "flex-start"}>
              {message.sender !== "You" && (
                <Avatar size="sm" name="John Doe" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMDk1MzEwNXww&ixlib=rb-4.0.3&q=80&w=1080" />
              )}
              <Box
                bg={message.sender === "You" ? "blue.500" : "gray.100"}
                color={message.sender === "You" ? "white" : "black"}
                px={3}
                py={2}
                borderRadius="md"
              >
                <Text>{message.text}</Text>
              </Box>
            </HStack>
          ))}
        </VStack>
      </Box>
      <Divider my={4} />
      <HStack>
        <Input
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Spacer />
        <Button colorScheme="blue" onClick={handleSendMessage}>
          <FaPaperPlane />
        </Button>
      </HStack>
    </Box>
  );
};

export default Index;
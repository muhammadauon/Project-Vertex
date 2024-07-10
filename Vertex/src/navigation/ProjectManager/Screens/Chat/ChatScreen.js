import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Box, Text, Input, Button, VStack, HStack } from 'native-base';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { id: messages.length.toString(), text: message }]);
      setMessage('');
    }
  };

  const renderItem = ({ item }) => (
    <Box bg="primary.500" borderRadius="md" p={3} my={1} alignSelf="flex-start">
      <Text color="white">{item.text}</Text>
    </Box>
  );

  return (
    <VStack flex={1} bg="#fff" px={3} pb={3}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
      />
      <HStack alignItems="center" px={2} py={1} space={2}>
        <Input
          flex={1}
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
          borderRadius="md"
          px={3}
          h={10}
          _focus={{ borderColor: 'primary.500' }}
        />
        <Button
          borderRadius="md"
          px={4}
          py={2}
          bg="primary.500"
          _text={{ color: 'white', fontWeight: 'bold' }}
          onPress={handleSend}
        >
          Send
        </Button>
      </HStack>
    </VStack>
  );
};

export default ChatScreen;

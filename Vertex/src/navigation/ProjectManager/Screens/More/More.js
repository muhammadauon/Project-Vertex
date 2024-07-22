import React from 'react';
import { Box, Button, Center, Heading, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const More = () => {
  const navigation = useNavigation();

  return (
    <Box flex={1} safeArea p="4" bg="white">
      <Center flex={1}>
        <Heading mb="5">More Options</Heading>
        <VStack space={4} w="90%" maxW="300px">
          <Button
            onPress={() => navigation.navigate('AddProjects')}
            bg="primary.500"
            _text={{ fontWeight: 'bold' }}
          >
            Project Management
          </Button>
          <Button
            onPress={() => navigation.navigate('TeamManagement')}
            bg="primary.500"
            _text={{ fontWeight: 'bold' }}
          >
            Team Management
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default More;

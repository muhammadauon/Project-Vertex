import React from 'react';
import { Box, Text, Button, Heading, VStack, HStack, Divider } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProjectsCardMember = ({ project, onDelete, onUpdate }) => {
  return (
    <Box borderWidth={1} borderColor="coolGray.200" borderRadius="lg" p={4} shadow={2} bg="white" w="100%" mb={4}>
      <VStack space={3}>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading size="md">{project.name}</Heading>
        </HStack>
        <Divider />
        <Text fontSize="sm" color="coolGray.600">{project.description}</Text>
        <Button >View Details</Button>
      </VStack>
    </Box>
  );
};

export default ProjectsCardMember;

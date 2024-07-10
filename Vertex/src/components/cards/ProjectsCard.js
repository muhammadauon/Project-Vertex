import React from 'react';
import { Box, Text, Button, Heading, VStack, HStack, Divider } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProjectsCard = ({ project, onDelete, onUpdate }) => {
  return (
    <Box borderWidth={1} borderColor="coolGray.200" borderRadius="lg" p={4} shadow={2} bg="white" w="100%" mb={4}>
      <VStack space={3}>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading size="md">{project.name}</Heading>
          <HStack space={2}>
            <Icon name="edit" size={24} color="#007bff" onPress={() => onUpdate(project)} />
            <Box/>
            <Icon name="delete" size={24} color="#dc3545" onPress={() => onDelete(project.id)} />
          </HStack>
        </HStack>
        <Divider />
        <Text fontSize="sm" color="coolGray.600">{project.description}</Text>
          <Button >View Details</Button>
      </VStack>
    </Box>
  );
};

export default ProjectsCard;

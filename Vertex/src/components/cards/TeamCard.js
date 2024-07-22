// import React from 'react';
// import { Box, Text, Button, HStack, VStack } from 'native-base';

// const TeamCard = ({ team, onDelete, onEdit }) => {
//   return (
//     <Box borderWidth={1} borderColor="coolGray.300" borderRadius="md" p={4} mb={4} bg="coolGray.100">
//       <VStack space={2}>
//         <Text fontSize="lg" fontWeight="bold">
//           {team.name}
//         </Text>
//         <Text>
//           {team.description}
//         </Text>
//         <HStack space={2}>
//           <Button size="sm" colorScheme="primary" onPress={onEdit}>
//             Edit
//           </Button>
//           <Button size="sm" colorScheme="danger" onPress={onDelete}>
//             Delete
//           </Button>
//         </HStack>
//       </VStack>
//     </Box>
//   );
// };

// export default TeamCard;


import React from 'react';
import { Box, Text, Button, Heading, VStack, HStack, Divider } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TeamCard = ({ team, onDelete, onEdit }) => {
  return (
    <Box borderWidth={1} borderColor="coolGray.200" borderRadius="lg" p={4} shadow={2} bg="white" w="100%" mb={4}>
      <VStack space={3}>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading size="md">{team.name}</Heading>
          <HStack space={2}>
            <Icon name="edit" size={24} color="#007bff" onPress={onEdit}/>
            <Box/>
            <Icon name="delete" size={24} color="#dc3545" onPress={onDelete}/>
          </HStack>
        </HStack>
        <Divider />
        <Text fontSize="sm" color="coolGray.600">{team.description}</Text>
          <Button >View Details</Button>
      </VStack>
    </Box>
  );
};

export default TeamCard;

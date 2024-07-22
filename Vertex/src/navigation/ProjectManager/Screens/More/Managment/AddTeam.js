import React, { useState, useEffect } from 'react';
import { Box, Input, Button, VStack, Heading } from 'native-base';
import { useDispatch } from 'react-redux';
import { addTeam, updateTeam } from '../../../../../redux/actions/ManagerActions';


const AddTeam = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { team } = route.params || {};
  const [name, setName] = useState(team ? team.name : '');
  const [description, setDescription] = useState(team ? team.description : '');

  useEffect(() => {
    if (team) {
      setName(team.name);
      setDescription(team.description);
    }
  }, [team]);

  const handleSave = () => {
    if (team) {
      const updatedTeam = { ...team, name, description };
      dispatch(updateTeam(updatedTeam));
    } else {
      const newTeam = { id: Date.now(), name, description };
      dispatch(addTeam(newTeam));
    }
    navigation.goBack();
  };

  return (
    <Box flex={1} p={4} bg="white">
      <Heading mb={4}>{team ? 'Edit Team' : 'Add Team'}</Heading>
      <VStack space={4}>
        <Input
          value={name}
          onChangeText={setName}
          placeholder="Team Name"
          variant="outline"
        />
        <Input
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
          variant="outline"
        />
        <Button colorScheme="primary" onPress={handleSave}>
          Save
        </Button>
      </VStack>
    </Box>
  );
};

export default AddTeam;

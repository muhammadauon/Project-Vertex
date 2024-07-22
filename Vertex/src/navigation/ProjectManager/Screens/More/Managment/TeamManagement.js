import React, { useEffect } from 'react';
import { Box, FlatList, Button, Heading, Center } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTeam, loadTeams } from '../../../../../redux/actions/ManagerActions';
import TeamCard from '../../../../../components/cards/TeamCard';

const TeamManagement = ({ navigation }) => {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.projectManager.teams);

  useEffect(() => {
    dispatch(loadTeams());
  }, [dispatch]);

  const handleDelete = (teamId) => {
    dispatch(deleteTeam(teamId));
  };

  return (
    <Box flex={1} p={4} bg="white">
        <Heading mb={4}>Team Management</Heading>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TeamCard
            team={item}
            onDelete={() => handleDelete(item.id)}
            onEdit={() => navigation.navigate('AddTeam', { team: item })}
          />
        )}
      />
      <Button
          onPress={() => navigation.navigate('AddTeam')}
        >
          Add Team
        </Button>
    </Box>
  );
};

export default TeamManagement;


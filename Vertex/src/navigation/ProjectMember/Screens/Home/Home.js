import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Box, Text, VStack, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import ProjectsCardMember from '../../../../components/cards/ProjectrCardMember';

const Home = () => {
  const navigation = useNavigation();

  // Sample project data
  const projects = [
    { id: '1', name: 'Project Alpha', description: 'Description for Project Alpha' },
    { id: '2', name: 'Project Beta', description: 'Description for Project Beta' },
    // Add more projects as needed
  ];

  const renderItem = ({ item }) => (
    <ProjectsCardMember project={item}  />
  );

  return (
    <VStack style={styles.container}>
      <Text fontSize="2xl" fontWeight="bold" mb={5}>Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.flatList}
      />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  flatList: {
    flexGrow: 1,
  },
});

export default Home;

import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProjectsCard from '../../../../components/cards/ProjectsCard';
import { TextStyles } from '../../../../theme/Theme';

const Home = () => {
  const navigation = useNavigation();

  // Sample project data
  const projects = [
    { id: '1', name: 'Project Alpha', description: 'Description for Project Alpha' },
    { id: '2', name: 'Project Beta', description: 'Description for Project Beta' },
    // Add more projects as needed
  ];

  const handleViewDetails = (projectId) => {
    // Navigate to project details screen
    console.log('View details for project:', projectId);
  };

  const renderItem = ({ item }) => (
    <ProjectsCard project={item} onViewDetails={handleViewDetails} />
  );

  return (
    <View style={styles.container}>
      <Text style={TextStyles.MainHeading}>Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00b4d8',
  },
  flatList: {
    flexGrow: 1,
  },
});

export default Home;

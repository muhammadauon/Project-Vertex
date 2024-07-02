import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProjectsCard from '../../../../components/cards/ProjectsCard';
import { ButtonStyles, TextStyles } from '../../../../theme/Theme';

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
  flatList: {
    flexGrow: 1,
  },
  Buttons: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    marginTop: '5%',
    alignSelf: 'center',
  },
});

export default Home;

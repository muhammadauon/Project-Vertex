import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Box, Text, VStack, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { loadProjects, deleteProject } from '../../../../redux/actions/ManagerActions';
import ProjectsCard from '../../../../components/cards/ProjectsCard';
import ProjectrCardMember from '../../../../components/cards/ProjectrCardMember';

const Home = ({ projects, loadProjects, deleteProject }) => {
  const navigation = useNavigation();

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);


  const handleUpdateProject = (project) => {
    navigation.navigate('Add Project', { project }); // Pass the project to the AddProjects screen for updating
  };

  const handleDeleteProject = (projectId) => {
    deleteProject(projectId);
  };

  const renderItem = ({ item }) => (
    <ProjectrCardMember
      project={item}
      onDelete={handleDeleteProject}
      onUpdate={handleUpdateProject} // Pass the update handler function
    />
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

const mapStateToProps = (state) => ({
  projects: state.projectManager.projects,
});

const mapDispatchToProps = (dispatch) => ({
  loadProjects: () => dispatch(loadProjects()),
  deleteProject: (projectId) => dispatch(deleteProject(projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { useState, useEffect } from 'react';
import { VStack, Box, Input, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { addProject, updateProject } from '../../../../redux/actions/ManagerActions';
import { useNavigation, useRoute } from '@react-navigation/native';

const AddProjects = ({ addProject, updateProject }) => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [projectId, setProjectId] = useState(null);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params?.project) {
      const { project } = route.params;
      setProjectName(project.name);
      setDescription(project.description);
      setProjectId(project.id);
      setIsUpdate(true);
    }
  }, [route.params]);

  const handleAddOrUpdateProject = () => {
    const project = {
      id: projectId || Date.now().toString(),
      name: projectName,
      description,
    };

    if (isUpdate) {
      updateProject(project);
    } else {
      addProject(project);
    }

    // Reset the form and navigate back
    setProjectName('');
    setDescription('');
    setIsUpdate(false);
    setProjectId(null);
    navigation.goBack();
  };

  return (
    <VStack flex={1} justifyContent="center" alignItems="center" px={5}>
      <Text fontSize="2xl" mb={5}>{isUpdate ? 'Update Project' : 'Add Project'}</Text>
      <Input
        height={10}
        borderWidth={1}
        mb={3}
        px={3}
        borderRadius="md"
        placeholder="Project Name"
        value={projectName}
        onChangeText={setProjectName}
      />
      <Input
        height={10}
        borderWidth={1}
        mb={3}
        px={3}
        borderRadius="md"
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button width="80%" onPress={handleAddOrUpdateProject}>
        <Text fontWeight="bold" color="white">{isUpdate ? 'Update Project' : 'Add Project'}</Text>
      </Button>
    </VStack>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProject: (project) => dispatch(addProject(project)),
  updateProject: (project) => dispatch(updateProject(project)),
});

export default connect(null, mapDispatchToProps)(AddProjects);

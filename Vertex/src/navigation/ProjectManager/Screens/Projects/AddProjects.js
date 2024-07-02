import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddProjects = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProject = () => {
    // Implement add project logic here
    console.log('Project Name:', projectName);
    console.log('Description:', description);
    // Reset the form
    setProjectName('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Project</Text>
      <TextInput
        style={styles.input}
        placeholder="Project Name"
        value={projectName}
        onChangeText={setProjectName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddProject}>
        <Text style={styles.addButtonText}>Add Project</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  addButton: {
    backgroundColor: '#00b4d8',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
    marginTop: '5%',
  },
  addButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AddProjects;

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_PROJECT, SET_PROJECTS, DELETE_PROJECT, UPDATE_PROJECT } from './ActionsTypes';

export const addProject = (project) => async (dispatch) => {
  try {
    const currentProjects = await AsyncStorage.getItem('projects');
    const projects = currentProjects ? JSON.parse(currentProjects) : [];

    projects.push(project);

    await AsyncStorage.setItem('projects', JSON.stringify(projects));

    dispatch({ type: ADD_PROJECT, payload: project });
  } catch (error) {
    console.error('Failed to add project', error);
  }
};

export const loadProjects = () => async (dispatch) => {
  try {
    const projects = await AsyncStorage.getItem('projects');
    dispatch({ type: SET_PROJECTS, payload: projects ? JSON.parse(projects) : [] });
  } catch (error) {
    console.error('Failed to load projects', error);
  }
};

export const deleteProject = (projectId) => async (dispatch) => {
  try {
    const currentProjects = await AsyncStorage.getItem('projects');
    let projects = currentProjects ? JSON.parse(currentProjects) : [];

    projects = projects.filter(project => project.id !== projectId);

    await AsyncStorage.setItem('projects', JSON.stringify(projects));

    dispatch({ type: DELETE_PROJECT, payload: projectId });
  } catch (error) {
    console.error('Failed to delete project', error);
  }
};

export const updateProject = (updatedProject) => async (dispatch) => {
  try {
    const currentProjects = await AsyncStorage.getItem('projects');
    let projects = currentProjects ? JSON.parse(currentProjects) : [];

    projects = projects.map(project =>
      project.id === updatedProject.id ? updatedProject : project
    );

    await AsyncStorage.setItem('projects', JSON.stringify(projects));
console.log(projects)
    dispatch({ type: UPDATE_PROJECT, payload: updatedProject });
  } catch (error) {
    console.error('Failed to update project', error);
  }
};

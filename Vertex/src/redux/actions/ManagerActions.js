import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_PROJECT, SET_PROJECTS, DELETE_PROJECT, UPDATE_PROJECT, ADD_TEAM, SET_TEAM, DELETE_TEAM, UPDATE_TEAM } from '../actions/ActionsTypes';

export const addProject = (project) => async (dispatch) => {
  try {
    const response = await fetch('http://172.31.224.1:7281/api/Project/AddProject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });

    if (response.ok) {
      dispatch({ type: ADD_PROJECT, payload: project });
    } else {
      const errorData = await response.json();
      console.error('Failed to add project', errorData);
    }
  } catch (error) {
    console.error('Failed to add project', error);
  }
};

export const loadProjects = () => async (dispatch) => {
  try {
    const response = await fetch('http://172.31.224.1:7281/api/Project/GetProjects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const projects = await response.json();
      dispatch({ type: SET_PROJECTS, payload: projects });
    } else {
      console.error('Failed to load projects', await response.text());
    }
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

    dispatch({ type: UPDATE_PROJECT, payload: updatedProject });
  } catch (error) {
    console.error('Failed to update project', error);
  }
};

export const addTeam = (team) => async (dispatch) => {
  try {
    const currentTeams = await AsyncStorage.getItem('teams');
    const teams = currentTeams ? JSON.parse(currentTeams) : [];

    teams.push(team);

    await AsyncStorage.setItem('teams', JSON.stringify(teams));

    dispatch({ type: ADD_TEAM, payload: team });
  } catch (error) {
    console.error('Failed to add team', error);
  }
};

export const loadTeams = () => async (dispatch) => {
  try {
    const teams = await AsyncStorage.getItem('teams');
    dispatch({ type: SET_TEAM, payload: teams ? JSON.parse(teams) : [] });
  } catch (error) {
    console.error('Failed to load teams', error);
  }
};

export const deleteTeam = (teamId) => async (dispatch) => {
  try {
    const currentTeams = await AsyncStorage.getItem('teams');
    let teams = currentTeams ? JSON.parse(currentTeams) : [];

    teams = teams.filter(team => team.id !== teamId);

    await AsyncStorage.setItem('teams', JSON.stringify(teams));

    dispatch({ type: DELETE_TEAM, payload: teamId });
  } catch (error) {
    console.error('Failed to delete team', error);
  }
};

export const updateTeam = (updatedTeam) => async (dispatch) => {
  try {
    const currentTeams = await AsyncStorage.getItem('teams');
    let teams = currentTeams ? JSON.parse(currentTeams) : [];

    teams = teams.map(team =>
      team.id === updatedTeam.id ? updatedTeam : team
    );

    await AsyncStorage.setItem('teams', JSON.stringify(teams));

    dispatch({ type: UPDATE_TEAM, payload: updatedTeam });
  } catch (error) {
    console.error('Failed to update team', error);
  }
};

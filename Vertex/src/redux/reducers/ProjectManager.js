import { ADD_PROJECT, SET_PROJECTS, DELETE_PROJECT, UPDATE_PROJECT, ADD_TEAM, SET_TEAM, DELETE_TEAM, UPDATE_TEAM } from "../actions/ActionsTypes";

const initialState = {
  projects: [],
  teams :[],
};

const projectManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload),
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === action.payload.id ? action.payload : project
        ),
      };
      case ADD_TEAM:
        return {
          ...state,
          teams: [...state.teams, action.payload],
        };
      case SET_TEAM:
        return {
          ...state,
          teams: action.payload,
        };
      case DELETE_TEAM:
        return {
          ...state,
          teams: state.teams.filter(team => team.id !== action.payload),
        };
      case UPDATE_TEAM:
        return {
          ...state,
          teams: state.teams.map(team =>
            team.id === action.payload.id ? action.payload : team
          ),
        };
    default:
      return state;
  }
};

export default projectManagerReducer;

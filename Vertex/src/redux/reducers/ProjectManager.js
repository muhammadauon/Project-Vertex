import { ADD_PROJECT, SET_PROJECTS, DELETE_PROJECT, UPDATE_PROJECT } from "../actions/ActionsTypes";

const initialState = {
  projects: [],
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
    default:
      return state;
  }
};

export default projectManagerReducer;

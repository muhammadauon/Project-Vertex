import { combineReducers } from 'redux';
import projectManagerReducer from './ProjectManager';

const rootReducer = combineReducers({
  projectManager: projectManagerReducer,
});

export default rootReducer;

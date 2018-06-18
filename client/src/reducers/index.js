import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';

import employees from './employees_organizer/employees'
import departments from './employees_organizer/departments'

export default combineReducers({
  auth, employees, departments,
  form: formReducer
});

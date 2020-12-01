import constants from '../constants';
import createReducer from './createReducer';

const {
  TOKEN
} = constants;

const initialValues = {
  token: ''
};

export default createReducer(initialValues, {

  [TOKEN]: (state, { token }) => {
    console.log('token hrerer ----------------->');
    console.log(token);
    return {
      token: token,
    };
  },
  
});
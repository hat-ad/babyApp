
import constants from '../constants';

const {
  TOKEN
} = constants;

export const setToken = (token) => ({
  type: TOKEN,
  token
});


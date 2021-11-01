import axios from 'axios';

export const apiGateway = (options = {}) => {
  return axios.create({
    baseURL: `${process.env.API_URL}/api`,
    ...options
  });
};

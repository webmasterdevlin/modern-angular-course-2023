import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

api.interceptors.request.use((config) => {
  // do something before request is sent
  return config;
});

export const EndPoints = {
  todos: 'todos',
  posts: 'posts',
} as const;

export type EndPointsKeys = keyof typeof EndPoints;

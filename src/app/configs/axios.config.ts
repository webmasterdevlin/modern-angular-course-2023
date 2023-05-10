import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

api.interceptors.request.use((config: any) => {
  // do something before request is sent
  const token = localStorage.getItem('token');
  if (token && token.length) {
    config.headers['token'] = token;
  }
  return config;
});

export const EndPoints = {
  todos: 'todos',
  posts: 'posts',
} as const;

export type EndPointsKeys = keyof typeof EndPoints;

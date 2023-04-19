import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const EndPoints = {
  todos: 'todos',
  users: 'users',
  posts: 'posts',
} as const;

export type EndPointsKeys = keyof typeof EndPoints;

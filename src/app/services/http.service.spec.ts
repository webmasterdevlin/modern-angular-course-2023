import { HttpService } from './http.service';
import { api, EndPoints } from '../configs/axios.config';
import { expect, jest } from '@jest/globals';
import { Post, Todo } from '../models';
import * as exp from 'constants';

jest.mock('../configs/axios.config');

const mockedApi = jest.mocked(api, { shallow: true });

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    service = new HttpService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get method', async () => {
    const getSpy = jest.spyOn(mockedApi, 'get');
    await service.get<Post[]>(EndPoints.posts);
    expect(getSpy).toHaveBeenCalled();
  });

  it('should call delete method', async () => {
    const deleteSpy = jest.spyOn(mockedApi, 'delete');
    await service.delete<void>(EndPoints.todos, 1);
    expect(deleteSpy).toHaveBeenCalled();
  });

  it('should call post method', async () => {
    const postSpy = jest.spyOn(mockedApi, 'post');
    await service.post<Todo>(EndPoints.todos, {
      userId: 1,
      title: 'my title',
      completed: false,
    });
    expect(postSpy).toHaveBeenCalled();
  });

  it('should call put method', async () => {
    const putSpy = jest.spyOn(mockedApi, 'put');
    await service.put<void, Todo>(EndPoints.todos, 1, {
      userId: 1,
      id: 1,
      title: 'my updated title',
      completed: false,
    });
    expect(putSpy).toHaveBeenCalled();
  });
});

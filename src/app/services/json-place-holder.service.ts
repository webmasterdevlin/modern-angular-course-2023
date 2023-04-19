import { Injectable } from '@angular/core';
import { api } from '../configs/axios.config';
import type { EndPointsKeys } from '../configs/axios.config';

@Injectable()
export class JsonPlaceHolderService {
  async getAxios<T>(endpoint: EndPointsKeys) {
    return await api.get<T>(endpoint);
  }

  async deleteAxios<T>(endpoint: EndPointsKeys, id: string) {
    return await api.delete<T>(`${endpoint}/${id}`);
  }

  async postAxios<T>(endpoint: EndPointsKeys, arg: T) {
    return await api.post<T>(`${endpoint}`, arg);
  }

  async putAxios<RT, BT>(endpoint: EndPointsKeys, id: string, arg: BT) {
    return await api.put<RT>(`${endpoint}/${id}`, arg);
  }
}

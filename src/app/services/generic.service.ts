import { EndPointsKeys, api } from '../configs/axios.config';

export async function getAxios<T>(endpoint: EndPointsKeys) {
  return await api.get<T>(endpoint);
}

export async function deleteAxios<T>(endpoint: EndPointsKeys, id: string) {
  return await api.delete<T>(`${endpoint}/${id}`);
}

export async function postAxios<T>(endpoint: EndPointsKeys, arg: T) {
  return await api.post<T>(`${endpoint}`, arg);
}

export async function putAxios<RT, BT>(endpoint: EndPointsKeys, id: string, arg: BT) {
  return await api.put<RT>(`${endpoint}/${id}`, arg);
}

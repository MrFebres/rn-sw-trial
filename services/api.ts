import axios from 'axios';

export type ApiResponse<T> = {
   count: number;
   next?: string;
   previous?: string;
   results: T[];
};

const instance = axios.create({ baseURL: 'https://swapi.dev/api/' });

export async function apiFetch(method: 'GET' | 'POST' | 'DELETE ', url: string, axiosConfig = {}) {
   const { data } = await instance({
      ...axiosConfig,
      method,
      url
   });

   return data;
}

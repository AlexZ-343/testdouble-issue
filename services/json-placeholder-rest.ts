import {axiosGet} from './rest-service.js';

export function getPostById(id: string): Promise<string> {
  return axiosGet('https://jsonplaceholder.typicode.com/posts/' + id);
}

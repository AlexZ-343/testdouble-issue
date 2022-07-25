import axios, {AxiosError, AxiosResponse} from 'axios';
const axiosInstance = axios.default;

axiosInstance.defaults.withCredentials = true;

export function axiosGet(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(url)
      .then(function (axiosResponse: AxiosResponse) {
        resolve(axiosResponse.data);
      })

      .catch(function (axiosError: AxiosError) {
        reject(axiosError.response);
      });
  });
}

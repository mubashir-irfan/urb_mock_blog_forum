import axios, { AxiosError, AxiosRequestConfig } from 'axios';


const baseURL = 'https://67f908e8094de2fe6ea034b8.mockapi.io/api/';

const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleAxiosError = (error: AxiosError): never => {
  if (axios.isAxiosError(error)) {
    console.error('API error:', error.response?.data || error.message);
    throw {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    };
  } else {
    console.error('Unexpected API error:', error);
    throw { message: 'An unexpected error occurred.' };
  }
};

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const ServerAPI = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await instance.get<T>(url, config);
      return response.data;
    } catch (error) {
      return handleAxiosError(error as AxiosError);
    }
  },

  post: async <T, U>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await instance.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      return handleAxiosError(error as AxiosError);
    }
  },

  put: async <T, U>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await instance.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      return handleAxiosError(error as AxiosError);
    }
  },

  patch: async <T, U>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await instance.patch<T>(url, data, config);
      return response.data;
    } catch (error) {
      return handleAxiosError(error as AxiosError);
    }
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await instance.delete<T>(url, config);
      return response.data;
    } catch (error) {
      return handleAxiosError(error as AxiosError);
    }
  },
};

export default ServerAPI;
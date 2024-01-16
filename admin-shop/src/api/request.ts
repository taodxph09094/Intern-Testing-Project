// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import type { AxiosRequestConfig, Method } from "axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const axiosInstance = axios.create({
  timeout: 60000,
});
const navigateTo = (path: string) => {
  const navigate = useNavigate();
  navigate(path);
};
axiosInstance.interceptors.request.use(
  (config) => {
    const storedUser = localStorage.getItem("user_token");
    if (storedUser && storedUser) {
      config.headers.Authorization = `Bearer ${
        JSON.parse(storedUser).access_token
      }`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (config) => {
    return {
      status: true,
      message: config?.data?.message || "success",
      result: config.data,
      headers: config.headers,
    };
  },
  (error) => {
    // let errorMessage = "Lỗi hệ thống";
    // let errorStatus = "";
    // let message = error.response.data.detail;
    if (error?.response?.status === 401) {
      localStorage.clear();
      return navigateTo("/login");
    }
    // console.log(error)
    // if (error?.message?.includes("Network Error")) {
    //   errorMessage = "";
    // } else {
    //   errorStatus = error?.message;
    // }
    return {
      status: false,
      message: error?.response?.data?.message,
    };
  }
);

export type Response<T = any> = {
  [x: string]: any;
  status: boolean;
  message: string;
  result: T;
};

export type MyResponse<T = any> = Promise<Response<T>>;

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const request = <T = any>(
  method: Lowercase<Method>,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): MyResponse<T> => {
  const prefix = "";

  url = prefix + url;
  if (method === "post") {
    return axiosInstance.post(url, data, config);
  } else if (method === "delete") {
    return axiosInstance.delete(url);
  } else if (method === "put") {
    return axiosInstance.put(url, data, config);
  } else {
    return axiosInstance.get(url, {
      params: data,
      ...config,
    });
  }
};

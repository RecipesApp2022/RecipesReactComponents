import * as axios from "axios";
import SystemInfo from "../util/SystemInfo";
import { deleteAuth, getAuth } from "./auth";
import { toast } from "react-toastify";


const host = SystemInfo?.api;

const defaultOpts = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export const createAxios = () => {

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  const axiosInstance = axios.default.create({
    baseURL: host,
    headers
  });

  axiosInstance.interceptors.request.use(
    async (request) => {
      const authInfo = JSON.parse(`${getAuth()}`);

      if (authInfo?.token) {
        request.headers = {
          ...headers,
          Authorization: `Bearer ${authInfo?.token}`
        };
      }

      return request;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance?.interceptors?.response?.use?.(handleResponse, handleResponseError);

  return axiosInstance;
}

const handleResponse = (response) => {
  return response;
}

const handleResponseError = (error) => {

  if (error?.response) {
    const errorInfo = error?.response;
    const { data, status } = errorInfo;
    if (status === 400) {
      handleValidationErrors(data);
    }

    if (status === 401) {
      handleUnAuthorizeUser(data);
    }

    if (status === 403) {
      toast.error(`Error 403: You do not have permission to perform this action.`, defaultOpts)
    }

    if (status === 404) {
      toast.error(`Error 404: The path does not exist on the server.`, defaultOpts)
    }

    if (status === 500) {
      toast.error(`An error has occurred on the server.`, defaultOpts);
    }
  }
  return Promise.reject(error);
}


const handleValidationErrors = (errorData) => {
  if (errorData?.message?.length > 0) {
    errorData?.message?.forEach((error, i) => {
      setTimeout(() => {
        toast.error(`Error: ${error}`, defaultOpts);
      }, Number(`${i}000`));
    });
  }
}

const handleUnAuthorizeUser = (data) => {
  toast.error(`Error: ${data?.message}`, defaultOpts)
  if (data?.error === 'Unauthorized.') {
    deleteAuth();
    window.location.pathname = '/?showLogin=true';
  }
}

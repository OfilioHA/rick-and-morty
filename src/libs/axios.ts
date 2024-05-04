import Axios, { AxiosInstance } from "axios";

export const axios: AxiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

export const createAxiosSubInstance = (subroute: string): AxiosInstance => {
  return Axios.create({
    baseURL: `${axios.defaults.baseURL}/${subroute}`,
    ...axios.defaults,
  });
};

export const characterAxios: AxiosInstance = createAxiosSubInstance("character");
export const locationAxios: AxiosInstance = createAxiosSubInstance("location");
export const episodeAxios: AxiosInstance = createAxiosSubInstance("episode");

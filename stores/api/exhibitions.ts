import axios, { AxiosError } from 'axios';
import { isServer, backendAddress } from '../../libs';
import { AddImagesDTO } from '../../models';
import {
  IFetchYearsFailurePayload,
  IFetchYearsPayload,
  IFetchYearsSuccessPayload,
} from '../exhibitions';
import { IUploadFailurePayload, IUploadSuccessPayload } from '../upload';

export const fetchYearsAPI = (
  payload: IFetchYearsPayload
): Promise<IFetchYearsSuccessPayload | IFetchYearsFailurePayload> => {
  const url = `${isServer() ? backendAddress : ''}/api/exhibitions/years`;
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => err);
};

export const addImagesAPI = (
  payload: AddImagesDTO
): Promise<IUploadSuccessPayload | IUploadFailurePayload> => {
  const url = `${isServer() ? backendAddress : ''}/api/exhibitions/images`;
  return axios
    .post(url, payload)
    .then((res) => res.data)
    .catch((err) => err);
};

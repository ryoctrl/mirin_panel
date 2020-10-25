import { IYears } from 'models/exhibitions.interface';

export interface IUploadState {
  image: string;
  imageFile?: File;
  title: string;
  name: string;
  caption: string;
}

export const UploadInitialState: IUploadState = {
  image: '',
  title: '',
  name: '',
  caption: '',
};

export interface IDetail {
  message: string;
  path: string[];
  value: string;
}

export interface IError {
  code: string;
  message: string;
  details?: IDetail[];
}

export interface iApiResponseModel<T> {
  data: Array<T>;
  statusCode: number;
  message: string;
}

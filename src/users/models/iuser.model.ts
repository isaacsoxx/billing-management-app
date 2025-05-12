import { iGenericRowModel } from '../../common';

export interface iUser extends iGenericRowModel {
  userId: string;
  name: string;
  lastName: string;
  email?: string;
  phone?: string;
}

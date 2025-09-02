import { iGenericRowModel } from '../../common';

export interface iUser extends iGenericRowModel {
  uuid: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  isActive: boolean;
  role: string;
}

export interface iStaff extends iUser {
  sponsor: string;
}

import {Education} from './education';
import {Division} from './division';
import { Position} from './position';

export interface Employee {
  id?: number;
  name?: string;
  code?: string;
  birthday?: string;
  gender?: string;
  email?: string;
  salary?: number;
  idCard?: string;
  phone?: string;
  address?: string;
  positions?:Position;
  educations?:Education;
  divisions?:Division;
}


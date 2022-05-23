import {Category} from './category';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  quantity?: number;
  color?: string;
  category?: Category
}

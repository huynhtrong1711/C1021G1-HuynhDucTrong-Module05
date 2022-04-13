import {CategoryList} from "./categoryList";

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  category?: CategoryList
}

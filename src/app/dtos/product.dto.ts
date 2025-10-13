import type { Category } from "../models/category.model.js";
import type { Product } from "../models/product.model.js";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: Category['id'];
}


export interface UpdateProductDto extends Partial<CreateProductDto> {}




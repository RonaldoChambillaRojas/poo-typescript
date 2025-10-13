import { IsUrl } from "class-validator";
import type { AccessType, Category } from "../models/category.model.js";
import type { Product } from "../models/product.model.js";

export interface ICreateCategoryDto extends Omit<Category, 'id' | 'createdAt' | 'updatedAt'>{}

export class CreateCategoryDto implements ICreateCategoryDto {
    name!: string;
    slug!: string;
    image!: string;
    acces!: AccessType;

}


// export interface UpdateProductDto extends Partial<CreateProductDto> {}

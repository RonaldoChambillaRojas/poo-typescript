import type { CreateProductDto, UpdateProductDto } from "../dtos/product.dto.js";
import type { Product } from "./product.model.js";

export interface ProductService {
    getAll(): Product[] | Promise<Product[]>;
    update(id: Product['id'], changes: UpdateProductDto): Product | undefined | Promise<Product>;
    create(dto: CreateProductDto): Product | Promise<Product>;
    findOne(id: Product['id']): Product | undefined | Promise<Product>;

}
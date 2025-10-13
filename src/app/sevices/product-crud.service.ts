import type { UpdateProductDto } from "../dtos/product.dto.js";
import type { Product } from "../models/product.model.js";
import { BaseHttpService } from "./base-http.service.js";

export class ProductCRUDService {
   private URL = 'https://api.escuelajs.co/api/v1/products';
   private HTTP = new BaseHttpService<Product>(this.URL);

   async update(id: Product['id'], dto: UpdateProductDto){
    // Validaciones...
    // Y mas validaciones...
    return this.HTTP.update(id, dto)
   }
}
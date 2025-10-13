import { faker } from '@faker-js/faker';
import type { Product } from '../models/product.model.js'; 
import type { CreateProductDto, UpdateProductDto } from '../dtos/product.dto.js';
import type { ProductService } from '../models/product-service.model.js';

export class ProductMemoryService implements ProductService {
    private products: Product[] = [];

    getAll(): Product[]{
        return this.products;
    }

    create(data: CreateProductDto): Product {
    const newProduct = {
        ...data,
        id: faker.number.int({max: 100, min: 1}),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
            slug: faker.lorem.slug(3),
            image: faker.image.url(),
    }
  }
  
  return this.add(newProduct);
}
    add(product: Product){
        this.products.push(product);
        return product;
    }


    update(id: Product['id'], changes: UpdateProductDto ): Product | undefined {
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
        if(prevData){
        this.products[index] = {
        ...prevData,
        ...changes
        }
    

  }
  return this.products[index];
}


    findOne(id: Product['id']): Product | undefined{
    const product =  this.products.find(item => item.id === id);
    if(product){
        return product;
    }
}

}

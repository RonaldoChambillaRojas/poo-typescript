
import axios from "axios";

import type { Category } from "../models/category.model.js";
import type { Product } from "../models/product.model.js";

export class BaseHttpService<TypeClass> {
    // data: TypeClass[] = [];

    constructor(
        private url: string,
    ){}
    async getAll(): Promise<TypeClass[]>{
        const {data} = await axios.get<TypeClass[]>(this.url);
        return data;
    }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service2 = new BaseHttpService<Category>();
// service2.getAll()
(async() => {
    const url1 = 'https://api.escuelajs.co/api/v1/products'
    const productService = new BaseHttpService<Product>(url1);
    const products = await productService.getAll()
    console.log('products:::::::::::::::::', products.length);


    const url2 = 'https://api.escuelajs.co/api/v1/categories'
    const productService2 = new BaseHttpService<Product>(url2);
    const categorys = await productService2.getAll()
    console.log('Categories:::::::::::::::::::::::::', categorys);
})();

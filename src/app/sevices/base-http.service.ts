
import axios from "axios";

import type { Category } from "../models/category.model.js";
import type { Product } from "../models/product.model.js";
import type { UpdateProductDto } from "../dtos/product.dto.js";

export class BaseHttpService<TypeClass> {
    // data: TypeClass[] = [];

    constructor(
        protected url: string,
    ){}
    async getAll(): Promise<TypeClass[]>{
        const {data} = await axios.get<TypeClass[]>(this.url);
        return data;
    }

    async update<ID, DTO>(id: ID, changes: DTO){
        const { data } = await axios.put(`${this.url}/${id}`, changes);
        return data;
    }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service2 = new BaseHttpService<Category>();
// service2.getAll()
// ! ESTA FUNCION SE LLAMA ASI MISMA, LA USAMOS PARA PODER USAR FUNCIONES ASINCRIONAS
(async() => {
    const url1 = 'https://api.escuelajs.co/api/v1/products'
    const productService = new BaseHttpService<Product>(url1);
    const products = await productService.getAll()
    console.log('products:::::::::::::::::', products.length);

    productService.update<Product['id'], UpdateProductDto>(1,{
        title: 'hola nuevo title',
    });


    const url2 = 'https://api.escuelajs.co/api/v1/categories'
    const productService2 = new BaseHttpService<Product>(url2);
    const categorys = await productService2.getAll()
    console.log('Categories:::::::::::::::::::::::::', categorys);

    // productService2.update<Category['id',]>();
})();

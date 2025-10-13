import axios = require("axios");
import type productModel = require("./models/product.model");


(async() => {

    async function getProducts(): Promise<productModel.Product[]>{
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        const data = rta.data as productModel.Product[];
        return data;
    }


    console.log('------'.repeat(10))

    const products = await getProducts();
    console.log(products.map( item => `${item.id} - ${item.title}`));






})();
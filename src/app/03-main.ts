import { ProductHttpService } from "./sevices/product-http.service.js";
(async()=>{

    try {
        const productService = new ProductHttpService();
    
    console.log('---'.repeat(10));
    
    const products = await productService.getAll();
    
    console.log(products.length);

    console.log(products.map(item => item.price));
    
    const productId = products[0]?.id;

    if(productId){
        const findProduct = await productService.findOne(productId)
        console.log('product with findOne: ', findProduct);


        const newProduct = await  productService.update(productId,{
            price: 1000,
            title: 'new title',
            description: 'otra descripcion',
        })

        console.log(`This is new product update: ${newProduct}`);

    }
    } catch (error) {
        console.error(error);
    }

})();
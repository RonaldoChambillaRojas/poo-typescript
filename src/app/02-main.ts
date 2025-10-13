import { ProductMemoryService } from "./sevices/product.service.js";

const productService = new ProductMemoryService;

productService.create({
    categoryId: 12,
    title: 'prodcto-tiel',
    slug: 'producto-avion-de-line',
    price: 100,
    description: 'bla bla bla',
    images: [],
})

const products = productService.getAll();
const productId = products[0]?.id;
if(productId){
    productService.updateProduct(productId,{
    title: 'change product title'
    });


    const rta = productService.findOne(productId)
    console.log(rta);
}


(async() => {
    

    function delay (time: number) {
        const promise = new Promise<boolean>((resolve) => {
            setTimeout(() => {
                resolve(true)
            }, time);
        });
        return promise;
    }

    function getProducts(){
        const promise = fetch('https://api.escuelajs.co/api/v1/products');
        return promise;
    }

    async function getProductsAsync(){
        const rta = await fetch('https://api.escuelajs.co/api/v1/products',{
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            }
        });
        return rta;
    }

    console.log('------'.repeat(10))
    const rta = await delay(3000);
    console.log(rta);

    console.log('------'.repeat(10))

    const products1 = await getProductsAsync();
    console.log(products1);

    console.log('------'.repeat(10))

    const products2 = await getProductsAsync();
    console.log(products2);



})();
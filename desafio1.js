class ProductManage {
    constructor() {
        this.product = [];
    }

    static id = 0;

    addProduct(title, description, price, thumbnail, code, stock) {
        for (let i = 0; i < products.length; index++) {
            if (this.products[i].code === code) {
                console.error(` el codigo: ${code} , ya exitste`)
            }
        }

        let newProduct = {
            title, description, price, thumbnail, code, stock
        }


        if (!Object.values(newProduct).includes(undefined)) {
            ProductManage.id++;
            this.products.push({
                ...newProduct, id: ProductManage.id,
            });
        } else { console.error("Campos invalidos") }
    }
  

    getProducts(){
        
    }

}
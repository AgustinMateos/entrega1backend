class ProductManage {
    constructor() {
        this.products = [];
    }

    static id = 0;
    addProduct(title, description, price, thumbnail, code, stock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code == code) {
                console.error(` el codigo: ${code} , ya existe`);
                break;
            }
        }

        let newProduct = {
            title, description, price, thumbnail, code, stock,
        }


        if (!Object.values(newProduct).includes(undefined)) {
            ProductManage.id++;
            this.products.push({
                ...newProduct, id: ProductManage.id,
            });
        } else { console.error("Campos invalidos, completar faltantes") }
    }
  

    getProducts(){
        return this.products
    }
   

    exist(id){
        return this.products.find((product)=>product.id === id);
    }

    getProductById(id){
        !this.exist(id)? console.error("not found") : console.log(this.exist(id))
    }
}


const productos= new ProductManage;

console.log(productos.getProducts()); //mostrar array vacio

//agregar dos productos
productos.addProduct(
    "camiseta boca",
    " titular 2023",
     50,
     "https:/imagen",
     "abc123",
     1
);

productos.addProduct(
    "camiseta boca",
    " titular 2020",
     20,
     "https:/imagen",
     "abc124",
     4
);

console.log(productos.getProducts());

//agregar producto con el mismo codigo

productos.addProduct(
    "camiseta boca",
    " titular 2020",
     20,
     "https:/imagen",
     "abc124",
     2,
);


//agregar producto con un  campo menos


productos.addProduct(
    "camiseta boca",
    " titular 2007",
     90,
     "https:/imagen",
     "abc124",
     
);

//buscar por id

productos.getProductById(1);
productos.getProductById(4);

console.log(productos.getProducts());

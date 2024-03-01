class ProductManager {
    static lastId = 0;
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock) {
        if (!title || !description || !price || !img || !code || !stock) {
            console.log("Favor llenar todos los campos");
            return;
        }

        if (this.products.some(item => item.code === code)) {
            console.log("El código debe ser único");
            return;
        }

        const newProduct = {
            id: ++ProductManager.lastId,
            title,
            description,
            price,
            img,
            code,
            stock,
        };

        this.products.push(newProduct);
    }

    getProduct() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);
        if (!product) {
            console.log("Producto no encontrado");
        } else {
            console.log("Producto encontrado:", product);
        }
    }
}

//Testing
const manager = new ProductManager();
console.log(manager.getProduct());
manager.addProduct("Ps4", "Consola", 35000000, "Ps4.jpg", "001", 35);

manager.addProduct("Ps5", "Consola", 4000000, "Ps5.jpg", "002", 14);

manager.addProduct("Ps5", "Consola", 4000000, "Ps5.jpg", "002", 14);

console.log(manager.getProduct());
console.log(manager.getProductById(3));


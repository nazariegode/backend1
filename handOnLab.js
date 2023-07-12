class ProductManager {
    constructor (){
        this.products = [] 
    }

    getProduct(){
        return this.products
    }

    getProductById(id){
        const busqueda = this.products.find(idProduct => idProduct.id == id)
            console.log(busqueda)
       
    }

    addProduct(id, title, description, price, thumbnail, code, stock){
        if(!title||!description||!price||!thumbnail||!code||!stock){
            console.log('todos los campos deben ser requeridos')
            return 
        }
        if(this.products.find(valorProducto => valorProducto.code == code)){
            console.log('Su producto esta repetido')
        }
        const newProduct = {
            id, title, description, price, thumbnail, code, stock
        }
        this.products.push(newProduct)
    }
}

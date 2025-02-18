import { generateId, productsDatabase } from "../database/database";
import { IProduct } from "../interfaces/products.interfaces";

export class ProductServices{
    createProduct(data: Omit<IProduct, 'id'>){
        const newProduct: IProduct = {
            id: generateId(),
            name: data.name,
            description: data.description,
            price: data.price,
            category: data.category
        }

        productsDatabase.push(newProduct);

        return newProduct;
    }

    getProduct() {
        return productsDatabase
    }

    getOneProduct(id: string) {
        const findProduct = productsDatabase.find(product => product.id == Number(id))

        return findProduct
    }
}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.model';

@Injectable()
export class ProductsService {

    constructor(@InjectModel('product') private readonly productModel: Model<Product>) {}

    // Param: id del diseño
    async sameNameDesign(id) {
        let products = await this.productModel.find({design: id})
       return products
    }

    // Param: id del diseño
    async getProduct(id: String) {
        let products = await this.productModel.findOne({_id: id})
        return products
    }


    async getProducts(page: number) {
        let limit = 1
        let products = await this.productModel.find().skip(page*limit).limit(limit).populate('design')
        return products
    }

    async buscarProducts(busqueda,page) {
        let limit = 1
        let products = await this.productModel.find({"tipo": {$regex: busqueda, $options: 'i'}}).skip(page*limit).limit(limit).populate('design')
        return products
    }

    async addProduct(precio,design,image,tipo,description): Promise<any> {
        const newProduct = new this.productModel({
            precio,
            design,
            image,
            tipo,
            description

        })
        await newProduct.save()
        return newProduct
    }

}


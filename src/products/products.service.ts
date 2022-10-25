import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.model';

@Injectable()
export class ProductsService {

    constructor(@InjectModel('product') private readonly productModel: Model<Product>) {}

    async getHomeProducts(page: number) {
        let limit = 1
        let products = await this.productModel.find().skip(page*limit).limit(limit).populate('design')
        return products
    }

    async getHomeProductsByPrice(min,max) {
        let products = await this.productModel.find({"precio": {$gte: min, $lte: max}}).populate('design')
        return products
    }

    async getHomeProductsByType(typeID) {
        let type = null
        if(typeID == 1)
            type = 'Camiseta'
        else if(typeID == 2)
            type = 'Pantalon'
        else if(typeID == 3)
            type = 'Sudadera'
        else
            return null

        let products = await this.productModel.find({"tipo": type}).populate('design')
        return products
    }

    async searchProducts(name,page) {
        let limit = 1
        let products = await this.productModel.find({"tipo": {$regex: name, $options: 'i'}}).skip(page*limit).limit(limit).populate('design')
        return products
    }

    async searchProductsByPrice(name,min,max) {
        let products = await this.productModel.find({"tipo": {$regex: name, $options: 'i'},
                                                     "precio": {$gte: min, $lte: max}}).populate('design')
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


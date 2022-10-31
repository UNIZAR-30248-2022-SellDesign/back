import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fav } from './fav.model';
import { Product } from './products.model';

@Injectable()
export class ProductsService {

    constructor(@InjectModel('product') private readonly productModel: Model<Product>,
                @InjectModel('fav') private readonly favModel: Model<Fav>) {}

    async getProductByID(id) {
        let product = await this.productModel.findOne({"_id": id}).populate('design')
        return product
    }

    async getHomeProducts(page: number) {
        let limit = 1
        let products = await this.productModel.find().skip(page*limit).limit(limit).populate('design')
        return products
    }

    async getHomeProductsByPrice(min,max) {
        let products = await this.productModel.find({"price": {$gte: min, $lte: max}}).populate('design')
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

        let products = await this.productModel.find({"type": type}).populate('design')
        return products
    }

    async getHomeProductsByPrice_Type(min,max,typeID) {
        let type = null
        if(typeID == 1)
            type = 'Camiseta'
        else if(typeID == 2)
            type = 'Pantalon'
        else if(typeID == 3)
            type = 'Sudadera'
        else
            return null

        let products = await this.productModel.find({"type": type,
                                                     "price": {$gte: min, $lte: max}})
                                              .populate('design')
        return products
    }

    async getUserFavProducts(id, page) {
        let fav_products = await this.favModel.find({"user": id})
        return fav_products
        
    }
    async getUserProducts(id, page) {
        // TODO AÑADIR PAGE
        let products = await this.productModel.find({"seller": id})
        return products
        
    }



    async searchProducts(name,page) {
        let limit = 1
        let products = await this.productModel.find({"type": {$regex: name, $options: 'i'}}).skip(page*limit).limit(limit).populate('design')
        return products
    }

    async searchProductsByPrice(name,min,max) {
        let products = await this.productModel.find({"type": {$regex: name, $options: 'i'},
                                                     "price": {$gte: min, $lte: max}}).populate('design')
        return products
    }

    async addProduct(price,design,image,type,description,seller): Promise<any> {
        const newProduct = new this.productModel({
            price,
            design,
            image,
            type,
            description,
            seller

        })
        await newProduct.save()
        return newProduct
    }



}


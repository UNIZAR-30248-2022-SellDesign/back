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

    async getProductByDesign(designId) {
        let products = await this.productModel.find({"design": designId}).populate('design')
        return products
    }

    async getHomeProducts(page: number) {
        let limit = 8
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
        let limit = 8
        let fav_products = await this.favModel.find({"user": id}).skip(page*limit).limit(limit).populate('product')
        return fav_products   
    }

    async getUserProducts(id, page) {
        let limit = 8
        let products = await this.productModel.find({"seller": id}).skip(page*limit).limit(limit).populate('design')
        return products
    }

    async searchProducts(name,page) {
        let limit = 8
        let products = await this.productModel.find({"type": {$regex: name, $options: 'i'}}).skip(page*limit).limit(limit).populate('design')
        return products
    }

    async searchProductsByPrice(name,min,max) {
        let products = await this.productModel.find({"type": {$regex: name, $options: 'i'},
                                                     "price": {$gte: min, $lte: max}}).populate('design')
        return products
    }

    async newProduct(price,design,image,typeID,description,seller): Promise<any> {
        let type = null
        if(typeID == 1)
            type = 'Camiseta'
        else if(typeID == 2)
            type = 'Pantalon'
        else if(typeID == 3)
            type = 'Sudadera'
        else
            return null
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

    async updateProduct(_id: string, price: string, design: string, image: string, typeID, description: string): Promise<any> {
        let type = null
        if(typeID == 1)
            type = 'Camiseta'
        else if(typeID == 2)
            type = 'Pantalon'
        else if(typeID == 3)
            type = 'Sudadera'
        else
            return null
        const filter = {"_id": _id}
        const update = {price,design,image,type,description}
        let product = await this.productModel.findOneAndUpdate(filter,update)
        product = await this.productModel.findOne({_id})
        return product
    }

    async deleteProduct(_id: any, seller: any): Promise<boolean> {
        let result = await this.productModel.deleteOne({_id,seller})
        return result.deletedCount == 1
    }

}


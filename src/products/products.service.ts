import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('user') private readonly productModel: Model<Product>) {}

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

        // Param: id del diseño
        async getProducts(id: String) {
            let products = await this.productModel.findOne({_id: id})
            return products
        }

}


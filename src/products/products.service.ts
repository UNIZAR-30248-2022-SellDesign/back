import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Design } from 'src/designs/designs.model';
import { Fav } from './fav.model';
import { Product } from './products.model';

enum Type {
    ".*",
    "Camiseta",
    "Pantalon",
    "Sudadera"
}

@Injectable()
export class ProductsService {

    constructor(@InjectModel('product') private readonly productModel: Model<Product>,
                @InjectModel('fav') private readonly favModel: Model<Fav>,
                @InjectModel('design') private readonly designModel: Model<Design>) {}

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
        let products = await this.productModel.find().sort({"updatedAt": -1}).skip(page*limit).limit(limit).populate('design')
        return products
    }

    async getHomeProductsByPrice(min,max) {
        let products = await this.productModel.find({"price": {$gte: min, $lte: max}}).sort({"updatedAt": -1}).populate('design')
        return products
    }

    async getHomeProductsByType(typeID: number) {
        if(typeID in Type) {
            var type: String = Type[typeID]
            let products = await this.productModel.find({"type": {$regex: type, $options: 'i'}}).sort({"updatedAt": -1}).populate('design')
            return products
        } else {
            return "No existen productos de este tipo"
        }
    }

    async getHomeProductsByPrice_Type(min,max,typeID) {
        if(typeID in Type) {
            var type: String = Type[typeID]
            let products = await this.productModel.find({"type": {$regex: type, $options: 'i'},"price": {$gte: min, $lte: max}})
                                              .sort({"updatedAt": -1})
                                              .populate('design')
            return products
        } else {
            return "No existen productos de este tipo"
        }
    }

    async getUserFavProducts(id, page) {
        let limit = 8
        //let fav_products = await this.favModel.find({"user": id}).sort({"updatedAt": -1}).skip(page*limit).limit(limit).populate('product')
        let fav_products = await this.favModel.find({"user": id}).limit(limit)
        return fav_products   
    }

    async getIfUserFavProduct(id,product) {
        let fav_product = await this.favModel.find({"user":id,"product":product}).limit(1)
        return fav_product
    }
    async postIfUserFavProduct(id,product) {
        const newFav = new this.favModel({
            user:id,
            product:product,
        })
        let isFavorite = await this.getIfUserFavProduct(id,product)
        if(isFavorite.length==0){
            await newFav.save()
            return newFav
        }
        return isFavorite
    }
    async deleteIfUserFavProduct(id,product) {
        let result = await this.favModel.deleteOne({id,product})
        return result.deletedCount == 1
    }
    async getUserProducts(id, page) {
        let limit = 8
        let products = await this.productModel.find({"seller": id}).sort({"updatedAt": -1}).skip(page*limit).limit(limit).populate('design')
        return products
    }

    async searchProducts(search_name,page) {
        let limit = 8
        let products = await this.productModel.find({"search_name": {$regex: search_name, $options: 'i'}}).sort({"updatedAt": -1}).skip(page*limit).limit(limit).populate('design')
        return products
    }

    async searchProductsByPrice(search_name,min,max) {
        let products = await this.productModel.find({"search_name": {$regex: search_name, $options: 'i'},
                                                     "price": {$gte: min, $lte: max}}).sort({"updatedAt": -1}).populate('design')
        return products
    }

    async newProduct(price,design,image,typeID,description,seller): Promise<any> {
        if(typeID >= 1 && typeID <= 3) {
            var type: String = Type[typeID]
            var search_name: String = ""
            let search_design = await this.designModel.findOne({ design })
            if(search_design) {
                search_name = type + " " + search_design.name
            } else {
                return "El diseño no existe en la base de datos"
            }
            const newProduct = new this.productModel({
                search_name,
                price,
                design,
                image,
                type,
                description,
                seller
            })
            await newProduct.save()
            return newProduct
        } else {
            return "No se puede crear un producto con el tipo proporcionado"
        }
    }

    async updateProduct(_id: string, price: string, design: string, image: string, typeID, description: string): Promise<any> {
        if(typeID >= 1 && typeID <= 3) {
            var type: String = Type[typeID]
            
            var search_name: String = ""
            let search_design = await this.designModel.findOne({ design })
            if(search_design) {
                search_name = type + " " + search_design.name
            } else {
                return "El diseño no existe en la base de datos"
            }

            const filter = {"_id": _id}
            const update = {search_name,price,design,image,type,description}
            let product = await this.productModel.findOneAndUpdate(filter,update)
            product = await this.productModel.findOne({_id})
            return product
        } else {
            return "No se puede cambiar el producto con el tipo proporcionado"
        }
    }

    async deleteProduct(_id: any, seller: any): Promise<boolean> {
        let result = await this.productModel.deleteOne({_id,seller})
        if(result.deletedCount == 1) {
            await this.favModel.deleteMany({"product":_id})
            return true
        } else {
            return false
        }
    }

}

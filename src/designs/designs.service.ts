import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fav } from 'src/products/fav.model';
import { Product } from 'src/products/products.model';
import { Design } from './designs.model';

@Injectable()
export class DesignsService {

    constructor(@InjectModel('design') private readonly designModel: Model<Design>,
                @InjectModel('product') private readonly productModel: Model<Product>,
                @InjectModel('fav') private readonly favModel: Model<Fav>) {}

    async getDesign(req: any): Promise<Design> {
        const design = await this.designModel.findOne({ name: req})
        return design
    }

    async getDesignByID(_id: any): Promise<Design> {
      const design = await this.designModel.findOne({ _id})
      return design
  }

    async newDesign(designer: string, image: string, name: string): Promise<any> {
      const newDesign = new this.designModel({
        name,
        designer,
        image
      })
      await newDesign.save()
      return newDesign
    }

    async updateDesign(id: string, image: string, name: string): Promise<any> {
      const filter = {"_id": id}
      const update = {"name": name, "image": image}
      let design = await this.designModel.findOneAndUpdate(filter,update)
      design = await this.designModel.findOne({"_id": id});
      return design
    }

    async deleteDesign(id: any, designer: any): Promise<boolean> {
      let products_with_design = await this.productModel.find({"design": id})
      for await (const product of products_with_design) {
        await this.favModel.deleteMany({"product": product._id})
        await this.productModel.deleteOne({"_id": product._id,"seller": product.seller})
      }

      let result = await this.designModel.deleteOne({"_id": id, "designer": designer})
      return result.deletedCount == 1
    }

    async getUserDesigns(designer: any, page: any): Promise<any> {
      let limit = 8
      let designs = await this.designModel.find({"designer": designer}).sort({"updatedAt": -1}).skip(page*limit).limit(limit)
      return designs
    }

}

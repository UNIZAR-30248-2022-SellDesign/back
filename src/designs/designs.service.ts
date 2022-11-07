import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Design } from './designs.model';

@Injectable()
export class DesignsService {

    constructor(@InjectModel('design') private readonly designModel: Model<Design>) {}

    async getDesign(req: any): Promise<Design> {
        const design = await this.designModel.findOne({ name: req})
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

}

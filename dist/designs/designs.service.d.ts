import { Model } from 'mongoose';
import { Fav } from 'src/products/fav.model';
import { Product } from 'src/products/products.model';
import { Design } from './designs.model';
export declare class DesignsService {
    private readonly designModel;
    private readonly productModel;
    private readonly favModel;
    constructor(designModel: Model<Design>, productModel: Model<Product>, favModel: Model<Fav>);
    getDesign(req: any): Promise<Design>;
    getDesignByID(_id: any): Promise<Design>;
    newDesign(designer: string, image: string, name: string): Promise<any>;
    updateDesign(id: string, image: string, name: string): Promise<any>;
    deleteDesign(id: any, designer: any): Promise<boolean>;
    getUserDesigns(designer: any, page: any): Promise<any>;
}

import { Model } from 'mongoose';
import { Design } from './designs.model';
export declare class DesignsService {
    private readonly designModel;
    constructor(designModel: Model<Design>);
    getDesign(req: any): Promise<Design>;
    getDesignByID(_id: any): Promise<Design>;
    newDesign(designer: string, image: string, name: string): Promise<any>;
    updateDesign(id: string, image: string, name: string): Promise<any>;
    deleteDesign(id: any, designer: any): Promise<boolean>;
    getUserDesigns(designer: any, page: any): Promise<any>;
}

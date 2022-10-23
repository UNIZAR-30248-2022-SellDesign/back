import { Model } from 'mongoose';
import { Design } from './designs.model';
export declare class DesignsService {
    private readonly designModel;
    constructor(designModel: Model<Design>);
    getDesign(req: any): Promise<Design>;
}

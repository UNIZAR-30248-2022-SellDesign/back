import { Model } from 'mongoose';
import { Design } from 'src/designs/designs.model';
import { User } from 'src/users/users.model';
import { Product } from '../products/products.model';
export declare class FillDbService {
    private readonly productModel;
    private readonly designModel;
    private readonly userModel;
    constructor(productModel: Model<Product>, designModel: Model<Design>, userModel: Model<User>);
    resetDb(): Promise<void>;
}
